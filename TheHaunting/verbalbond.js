 let speechRec;

      function setup() {
    

        // Create speech recognition object (English, continuous listening)
        speechRec = new p5.SpeechRec('en-US', gotSpeech);
        speechRec.continuous = true;
        speechRec.interimResults = false;
        speechRec.start();
        
      }

      function gotSpeech() {
        if (speechRec.resultString.toLowerCase() === 'yes') {
          window.location.href = 'finish.html';
        } else {
          document.body.style.background = 'black';
        }
        }
      