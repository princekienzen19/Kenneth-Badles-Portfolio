const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hide cursor when mouse leaves the window
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

// Show cursor when mouse enters the window
document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});
