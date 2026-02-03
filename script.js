const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const btnArea = document.getElementById("btnArea");
const message = document.getElementById("message");

function moveNoButton() {
  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Padding so it doesn't touch edges
  const padding = 10;

  const maxX = areaRect.width - btnRect.width - padding;
  const maxY = areaRect.height - btnRect.height - padding;

  // Random new position inside the button area
  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.right = "auto"; // override the CSS right rule once moved
}

// Run away when hovered (desktop)
noBtn.addEventListener("mouseenter", moveNoButton);

// Also run away on touch / mobile attempts
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

yesBtn.addEventListener("click", () => {
  message.textContent = "YAY!! 💖 Best decision ever 😭✨";
  // Optional: Confetti-ish vibe with emojis
  burstHearts();
});

function burstHearts() {
  const hearts = ["💖","💘","💕","❤","💗"];
  for (let i = 0; i < 24; i++) {
    const span = document.createElement("span");
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-10px";
    span.style.fontSize = (14 + Math.random() * 22) + "px";
    span.style.zIndex = "9999";
    span.style.transition = "transform 1.8s ease, opacity 1.8s ease";
    document.body.appendChild(span);

    requestAnimationFrame(() => {
      span.style.transform = `translateY(${110 + Math.random() * 60}vh) rotate(${Math.random()*360}deg)`;
      span.style.opacity = "0";
    });

    setTimeout(() => span.remove(), 1900);
  }
}
