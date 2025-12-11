// Typing Effect
const typingText = ["Java Developer", "Full Stack Developer", "Web Developer", "UI/UX Designer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (charIndex < typingText[index].length) {
        typingElement.innerHTML += typingText[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    const typingElement = document.getElementById("typing");

    if (charIndex > 0) {
        typingElement.innerHTML = typingText[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 80);
    } else {
        index = (index + 1) % typingText.length;
        setTimeout(typeEffect, 150);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll to Contact Section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
