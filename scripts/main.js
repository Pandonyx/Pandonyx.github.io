// Matrix intro animation
const matrixText = document.getElementById("matrix-text");
const enterBtn = document.getElementById("enter-btn");
const textLines = [
  "> Welcome to the Source Code of My Reality",
  "> The Matrix has you...",
  "> Reality is not what it seems...",
  "> Knock, knock.",
  "> ",
  "> You've found the quantum bridge between potential and execution",
  "> my digital portfolio, where lines of code rewrite destinies.",
  "> I'm not just showing you skills.",
  "> I'm offering you a glimpse beyond the conventional matrix of design and development.",
  "> Choose to explore.",
  "> The algorithms of innovation are waiting.",
  "> System ready.",
];

let currentLine = 0;
let currentChar = 0;

function typeWriter() {
  if (currentLine < textLines.length) {
    if (currentChar < textLines[currentLine].length) {
      matrixText.textContent += textLines[currentLine].charAt(currentChar);
      currentChar++;
      setTimeout(typeWriter, Math.random() * 50 + 30);
    } else {
      matrixText.textContent += "\n";
      currentLine++;
      currentChar = 0;
      setTimeout(typeWriter, 500);
    }
  } else {
    // Animation complete - show button
    const ctaButtons = document.getElementById("cta-buttons");
    ctaButtons.style.visibility = "visible";
    ctaButtons.style.opacity = "1";
    ctaButtons.classList.remove("hidden");
  }
}

// Start animation on load
window.addEventListener("load", () => {
  typeWriter();

  // Button click handler
  enterBtn.addEventListener("click", () => {
    window.location.href = "home.html";
  });
});

// Audio Initialization
const matrixAudio = document.getElementById("matrix-audio");
const audioPrompt = document.getElementById("audio-prompt");
const activateSound = document.getElementById("activate-sound");

// Set initial volume
matrixAudio.volume = 0.05;

// Try autoplay first
matrixAudio
  .play()
  .then(() => {
    // Success - hide prompt
    audioPrompt.style.display = "none";
  })
  .catch(() => {
    // Show activation prompt
    audioPrompt.style.display = "block";
  });

// Click handler for audio activation
activateSound.addEventListener("click", () => {
  matrixAudio
    .play()
    .then(() => {
      audioPrompt.style.display = "none";
      localStorage.setItem("audioActivated", "true");
    })
    .catch((e) => console.error("Audio playback failed:", e));
});

// Check if already activated
if (localStorage.getItem("audioActivated")) {
  matrixAudio.play().catch(() => (audioPrompt.style.display = "block"));
}
