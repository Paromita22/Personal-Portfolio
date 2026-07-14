//const roles = ["Competitive Programmer", "Web Developer","ML / AI enthusiast"];
const roles = [
  "Software Engineering Intern",
  "AI & ML Researcher",
  "Full-Stack Web Developer",
  "Native Android Developer",
  "Competitive Programmer",
];
let currentRole = 0;
let currentChar = 0;
let deleting = false;
const typingSpan = document.querySelector(".typing-text");

function typeEffect() {
  const role = roles[currentRole];
  if (deleting) {
    //typingSpan.textContent = role.substring(0, currentChar--);
    typingSpan.innerHTML = `<span class="highlight">${role.substring(0, currentChar--)}</span>`;

    if (currentChar < 0) {
      deleting = false;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 50);
    }
  } else {
    typingSpan.innerHTML = `<span class="highlight">${role.substring(0, currentChar++)}</span>`;

    if (currentChar > role.length) {
      deleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      setTimeout(typeEffect, 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ==========================================
// LIGHT/DARK MODE TOGGLE LOGIC
// ==========================================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// 1. Check if they already chose light mode in a previous visit
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.replace("fa-sun", "fa-moon"); // Show moon icon
}

// 2. Listen for a click on the button
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    // Switch to Light Mode
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light"); // Save preference
  } else {
    // Switch to Dark Mode
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark"); // Save preference
  }
});
