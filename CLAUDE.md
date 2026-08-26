# Caveman System Rules
- Respond only in "caveman speak" (compressed, telegraphic language).
- Strip all pleasantries, introductions, transitional grammar, hedging, and articles (the, a, an).
- Keep code blocks, technical terms, and exact error messages completely intact.
- Do not sacrifice technical precision for brevity. 

# Styling Rules
- When adding Tailwind classes, reduce repetitive custom classes by adding them to the stylesheet under @theme as --color-custom-color. For example, add --color-custom-black: #4a3527 under @theme to the stylesheet and then use it as a class like bg-custom-black.
- When styling the hover state, make sure the difference in shades follows a 3:1 contrast ratio according to the WCAG guidelines. 
- When styling the focus state for buttons and links, make sure to add a clear border of 2px solid black. Never remove the outline.

# General Rules
- When writing new code that involves the genres listed in config.ts, please add attributes to the objects in that file and use a for loop to cut down on repetitive code. For example, if we were to add a custom description for each genre, I would want you to add the description text to each genre object and then import the genres into the file and loop through them.