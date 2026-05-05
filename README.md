# The Blind Book Dating App
Meet your next book with the Blind Book Dating App! Swipe through descriptions of books from genres you love, from romance to fantasy to memoirs to science fiction - all with the titles and authors and book covers filed off so you can get a real first impression.

**Link to project:** https://blindbookreact.vercel.app/

![A screenshot of the website. The header has the title 'Blind Book Dating App' and links to a demo and the login page. The main body shows a book summary with the title redacted, and the title 'Time to Swipe!'](https://i.imgur.com/RfISsDK.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Next.JS, TypeScript, Neon, Vercel

This was originally a General Assembly bootcamp project for jQuery in which we were told to pick from a list of free APIs and utilize them. I chose the Google Books API because I love books and also have always loved when bookstores anonymize books this way by wrapping the books in paper and writing quick summaries on them. I basically wanted to reproduce this experience online.

Right now I have some preset categories you can choose from, but you can also use the searchbar to make your own query which will then get plugged into the API call under the q param. The caveat is that the Google Books API can be inconsistent. You are limited by how many results you can pull at a time, and querying beyond a certain limit (100 usually; 200 is pushing it) can result in 503 errors. I had to handle this with a few different layers of precautions:
* Make up to 4 attempts to get some kind of response, using exponential backoff and jitter to space out each call a little more/randomly with each new attempt
* Cache the first successful attempt for 12 hours to reduce unnecessary calls

Once we have our set of results, we then have to shuffle the books and censor the descriptions. We take the title and author information from the API and head into our censor.tsx file to find the start and end positions of these values in the description string. This is done in two different ways: using the npm package talisman and its method levenshtein to do some fuzzy matching (this catches typos), and using our own token matching.

The function for this (tokenProximitySpans) has each step more or less explained in comments throughout the code, but to summarize:
* First we normalize the strings - which means removing punctuation and making everything lowercase so we can more precisely match each name/word in the author list/title.
* From those normalized strings we create an array of 'tokens' (while filtering out common stopwords like 'a', 'or', 'the', etc. We don't want to censor every 'the'!)
* Then we find every index where each word in the title/author name shows up in the description string (example: if the description starts with Shelley and the author's name is Mary Shelley, the index position is 0)
* Now we use bitmasking to find every possible combination of tokens and go through every possible combination of indexes to see how close each token is to each other. For example if the author name is Mary Wollstonecraft Shelley, but the description says Mary at positions 5 and 100 and Shelley at positions 10 and 105, we know that the description says 'Mary Shelley' twice.
* If these tokens are very close together, we find the start of the first token and end of the last token and push them into an array of objects.
* Back in books.tsx, we sort and merge the overlapping spans, then go through and censor each span

Since the nature of the app is random, I provided a demo link in the header so you can see specific examples of the censorship in action. It's a little complex but I found this to be more effective at finding and replacing the author names and titles compared to simply doing .replace(), since the data that comes back from the API is not always consistent. Since the API can be so inconsistent, there are also some fallback pages for when the calls fail.

Then of course we also have the match page. This is currently locked behind a login page; once you've made an account and logged in, all your swipes will be saved to the PostgresQL database in Neon. We fetch books from that database based on your user ID. On this page you will see the full title and author and description for each right swipe. You are also able to remove a swipe if you no longer want it saved to your account.

## Future Optimizations
* Either have a guest swipe view page that can be saved to the session or force the user to log in before swiping at all
* Add book covers to the swipe view page
* Perhaps also add links to where to buy the books? Need to check if the Google Books API has that data included
* Upgrade the visuals
* Add testing
* Improve accessibility

## Lessons Learned:
I learned a lot about handling failed calls and working with inconsistent APIs from this project. My previous experience was in Salesforce, which rarely if ever responds with 503s. Caching was also more or less handled by Salesforce, so having to figure that out on my own was an interesting challenge. I also learned firsthand why censorship is such a difficult thing to handle. As a gamer I often see complaints and jokes about how innocent words get flagged as profanity online, and I can now see why it's so difficult to control for what words need to be flagged or not. I doubt there could ever be a perfect solution to this, but it was satisfying to get close enough.
