let wordChangeCount = 1;
const wordChangeMax = 10;
const wordChangeStep = 1;

const paragraphs = document.querySelectorAll('span');
const originals = [];
const wordsArray = [];

const alternateWords = [
  "heRe", "here", "her", "he's coming", "mike", "  ", "CONSOLE", "HeLp", "Bsnefwe", "It's mike", "look console",
  "kjefkj", "look", "LOOK", "I", "I AM", "I", "I", "console", "Help", "heLPkef"
];

paragraphs.forEach((p, idx) => {
  originals[idx] = p.textContent;
  wordsArray[idx] = originals[idx].split(' ');
});

function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

function resetParagraphs() {
  paragraphs.forEach((p, idx) => {
    p.textContent = originals[idx];
  });
}

function startSwapping() {
  wordChangeCount = 1;

  const swapInterval = setInterval(() => {
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
      clearInterval(swapInterval);
      setTimeout(() => {
        resetParagraphs(); // reset to original text
        setTimeout(startSwapping, 3000); // wait 3 seconds before restarting
      }, 200); // short pause before resetting
    }
  }, 800);
}

// Initial delay before starting the cycle
setTimeout(startSwapping, 5000);
