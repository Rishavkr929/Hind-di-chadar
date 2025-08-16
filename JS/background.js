const container = document.getElementById("scattered-container");
const imageSrc = "/img/rr.png"; // Use correct path
const count = 40; // Number of images falling at a time
const size = 40; // Base size in px
const fallSpeed = 10000; // Base fall duration in ms

function createFallingImage() {
  const img = document.createElement("img");
  img.src = imageSrc;
  img.className = "scattered-image";

  // Random positions and movement
  const left = Math.random() * window.innerWidth;
  const sizeVar = size * (0.5 + Math.random());
  const duration = fallSpeed + Math.random() * 4000;
  const drift = Math.random() * 50 - 25; // side movement

  // Apply styles
  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `-${size}px`;
  img.style.width = `${sizeVar}px`;
  img.style.height = `${sizeVar}px`;
  img.style.setProperty("--drift", `${drift}px`);
  img.style.animation = `fall ${duration}ms linear forwards`;

  // When animation ends, remove and respawn
  img.addEventListener("animationend", () => {
    img.remove();
    createFallingImage();
  });

  container.appendChild(img);
}

// Start the animation
for (let i = 0; i < count; i++) {
  setTimeout(() => {
    createFallingImage();
  }, Math.random() * 3000); // Spread start times for natural effect
}
