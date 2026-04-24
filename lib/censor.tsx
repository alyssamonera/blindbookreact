const levenshtein = require('talisman/metrics/levenshtein');

type spansType = {
  start: number,
  end: number
}[]

const stopWords = ['or', 'the', 'a', 'an', 'and', 'of', 'in', 'to'];

/**
 * Trims out punctuation for better matching
 * @param str The string to normalize
 * @returns The normalized string
 */
function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

/**
 * Builds an array that maps each char position from the normalized string back to its position in the original
 * @param original The original string
 */
function buildNormalized(original: string) {
  const positionMap = [];
  let normalized = '';

  for (let i = 0; i < original.length; i++) {
    const char = original[i].toLowerCase();

    // Skip characters that normalization would remove
    if (/^a-z0-9\s]/.test(char)) continue;

    // Collapse whitespace - only add a space if the last char wasn't one
    if (/\s/.test(char)) {
      if (normalized.length > 0 && normalized[normalized.length - 1] !== ' ') {
        normalized += ' ';
        positionMap.push(i);
      }
      continue;
    }

    normalized += char;
    positionMap.push(i);
  }

  return { normalized, positionMap };
}

/**
 * Goes word by word and finds spans that are similar to each word of the title or authors
 * @param description The description to update
 * @param phrase The phrase to censor
 * @returns An array of objects that contain the start and end of each part of the string to censor
 */
export function fuzzySpans(description: string, phrase: string, { threshold = 0.75 } = {}) {
  const spans: spansType = [];

  // Normalize the strings first
  const { normalized, positionMap } = buildNormalized(description);
  const tokens = normalize(phrase).split(' ').filter(token => !stopWords.includes(token));

  // Gets all separate words from the normalized description
  const regex = /\b[\w'.-]+\b/g;
  const matches = [...normalized.matchAll(regex)];

  // Loop through each word in the title/author and see if it matches against each word in the description
  for (const token of tokens) {
    for (const match of matches) {
      const word = match[0];

      // Use levenshtein for fuzzy matching
      const dist = levenshtein(word, token);
      const similarity = 1 - dist / Math.max(word.length, token.length);
      
      // If the words are similar, get the start/end indexes from the original string and push
      if (similarity > threshold) {
        spans.push({start: positionMap[match.index], end: positionMap[match.index + word.length -1] + 1});
      }
    }
  }

  return spans;
}

/**
 * Finds spans to censor by how close they are together in the description
 * @param description The description to update
 * @param phrase The phrase to censor
 * @returns An array of objects that contain the start and end of each part of the string to censor
 */
export function tokenProximitySpans(description: string, phrase: string, { maxWindowChars = 30 } = {}) {
  const spans: spansType = []

  // Normalize the strings first
  const { normalized, positionMap } = buildNormalized(description)
  const tokens = normalize(phrase).split(' ').filter(token => !stopWords.includes(token));

  // Find ALL indexes of each time each word in the title/author shows up in the description
  const positions = tokens.map(token => {
    const regex = new RegExp(`\\b${token}\\b`, "g")
    const matches = [...normalized.matchAll(regex)];
    
    return matches.map((match) => match.index);
  });

  // Try all non-empty subsets of tokens using bitmasking
  const numSubsets = 1 << tokens.length // 2^n
  for (let mask = 1; mask < numSubsets; mask++) {
    // Grab a subset of words in the title or author name
    const subset = tokens
      .map((token, i) => ({ token, positions: positions[i] }))
      .filter((_, i) => mask & (1 << i))

    // Skip if any word in this subset has no matches in the description
    if (subset.some(t => t.positions.length === 0)) continue

    function combine(tokenIndex: number, chosen: number[]) {
      // Collect all the starting positions for each word in the description string
      if (tokenIndex === subset.length) {
        // Select the positions of two words (the one that shows up first and the one that shows up last in the subset)
        // We're also mapping this onto the original not-normalized string
        const origPositions = chosen.map(pos => positionMap[pos])
        const origEnds = chosen.map((pos, i) =>
          positionMap[pos + subset[i].token.length - 1] + 1)

        const start = Math.min(...origPositions)
        const end = Math.max(...origEnds)

        // If the distance between the two is within maxWindowChars distance of each other, add to the list of spans to censor
        // This prevents us from censoring entire blocks of text if word A is 200 characters away from word B, for example
        if (end - start <= maxWindowChars) {
          spans.push({ start, end })
        }

        // You can comment this back in to see an example of how it works
        // console.log('subset', subset, 'chosen', chosen, 'start', start, 'end', end);

        return
      }

      for (const pos of subset[tokenIndex].positions) {
        combine(tokenIndex + 1, [...chosen, pos])
      }
    }

    combine(0, [])
  }

  return spans
}