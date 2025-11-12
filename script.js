document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // Navigation tab switching
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const target = link.dataset.target;
      sections.forEach(sec => {
        sec.classList.remove("active");
        if (sec.id === target) sec.classList.add("active");
      });
      if (target === "home") startTyping();
    });
  });

  // Typing animation
  const text = "B.Tech CSE student • AI/ML Engineer";
  const element = document.querySelector(".typed-text");
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  function startTyping() {
    element.textContent = "";
    i = 0;
    type();
  }
  startTyping();

  // Projects fade-in animation with faster stagger
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1 + 0.1) + "s"; // halved from 0.2
    card.style.animationPlayState = "running";
  });

  // Internships fade-in animation with even faster stagger
  const internshipCards = document.querySelectorAll(".internship-card");
  internshipCards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.05 + 0.05) + "s"; // halved from 0.1
    card.style.animationPlayState = "running";
  });
});
