 const paragraph = document.getElementById('changingParagraph');
    const originalText = paragraph.textContent;
    const words = originalText.split(' ');
    const alternateWords = [
      "blood", "whispers", "void", "mirror", "ashes", "decay", "shiver", 
      "crawl", "echo", "fog", "shadow", "ritual", "crypt", "sigil", "lament"
    ];

    function randomIndex(length) {
      return Math.floor(Math.random() * length);
    }

    function swapWords() {
      const newWords = [...words];
      const numToChange = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < numToChange; i++) {
        const indexToChange = randomIndex(newWords.length);
        const replacement = alternateWords[randomIndex(alternateWords.length)];
        newWords[indexToChange] = `<span class="changing-word">${replacement}</span>`;
      }

      paragraph.innerHTML = newWords.join(' ');
    }

    setInterval(swapWords, 2000); // change every 3 seconds