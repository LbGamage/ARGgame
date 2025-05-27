let wordChangeCount = 1; // initial number of words to change
const wordChangeMax = 10; // maximum number of words that can be swapped
const wordChangeStep = 1;

const paragraphs = document.querySelectorAll('span'); // get all <p> elements
const originals = []; // store original text for each paragraph
const wordsArray = []; // store words array for each paragraph

const alternateWords = [
  "heRe", "here", "her", "he's coming", "mike", "  ", "Look here!", "HeLp", "Bsnefwe", "efioefjoewif", "efieff", "hidden", "look", "LOOK", "I", "I AM", "I", "I", "console", "Help", "heLPkef"
];

// Initialize original texts and split words
paragraphs.forEach((p, idx) => {
  originals[idx] = p.textContent;
  wordsArray[idx] = originals[idx].split(' ');
});

function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

function swapWords() {
  paragraphs.forEach((p, idx) => {
    const words = [...wordsArray[idx]];
    for (let i = 0; i < wordChangeCount; i++) {
      const indexToChange = randomIndex(words.length);
      const replacement = alternateWords[randomIndex(alternateWords.length)];
      words[indexToChange] = `<span class="changing-word">${replacement}</span>`;
    }
    p.innerHTML = words.join(' ');
  });

  if (wordChangeCount > 0 && wordChangeCount < wordChangeMax) {
    wordChangeCount += wordChangeStep;
  } else {
    wordChangeCount = 0;
  }
}

setTimeout(() => {
  setInterval(swapWords, 800);
}, 5000);
