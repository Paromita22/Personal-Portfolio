const roles = ["Competitive Programmer", "Web Developer","ML / AI enthusiast"];
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

