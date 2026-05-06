export default function About() {
    return <div className="w-1/1 md:w-3/4 mx-auto">
        <div className="bg-white p-3">
            <h2 className="text-2xl pt-serif-bold">About this project</h2>
            <p>This project is a web application built with React and Next.js, with an SQL database basckend in Neon, hosted on Vercel.</p>
            <p>Some small bookstores will wrap their books in brown paper and write quick summaries on the cover, essentially giving their customers the experience of a blind date. This app is an homage to that experience, with a bit of Tinder thrown into the mix.</p>
            <p>All book data is sourced from the Google Books API, which is free to use. This was originally built with jQuery, then updated to be on the MEAN stack (MongdoDB, Express, AngularJS, NodeJS), then finally updated again in 2026 to use React and Next.JS.</p>
            <p>You can find the link to the repository up in the header.</p>
        </div>
    </div>
}