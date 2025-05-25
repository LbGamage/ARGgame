  let glitchDuration = 100; // starting glitch duration in ms
    const durationIncrement = 200; // how much longer it gets each time
     const maxGlitchDuration = 1000;

  const applyGlitch = () => {
      const elements = document.body.querySelectorAll("*");
      elements.forEach(el => el.classList.add("glitch"));

      setTimeout(() => {
        elements.forEach(el => el.classList.remove("glitch"));
      }, glitchDuration); // Glitch duration
       glitchDuration = Math.min(glitchDuration + durationIncrement, maxGlitchDuration);
    };

    // First glitch happens 3–4 seconds after load
    window.addEventListener("load", () => {
      const firstDelay = 5000;
      setTimeout(() => {
        applyGlitch();
        startRandomGlitchLoop(); // comment this out if you want it to happen only once
      }, firstDelay);
    });


     function startRandomGlitchLoop() {
      const randomInterval = () => Math.random() * 1000 + 8000;

      const loop = () => {
        setTimeout(() => {
          applyGlitch();
          loop();
        }, randomInterval());
      };

      loop();
    } 