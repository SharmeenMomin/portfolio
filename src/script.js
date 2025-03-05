document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });
});
// Typewriter Effect
const text = "Software Developer | Data Enthusiast | Web Engineer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = () => {
    typeEffect();
};
// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("JSON/projects.json")
      .then(response => response.json())
      .then(projects => {
        const projectsContainer = document.querySelector(".projects-container");
        
        projects.forEach(project => {
          const projectCard = document.createElement("div");
          projectCard.classList.add("project-card");
  
          projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Date:</strong> ${project.date}</p>
            <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
            <a href="${project.link}" target="_blank">View Project</a>
          `;
  
          projectsContainer.appendChild(projectCard);
        });
      })
      .catch(error => console.error("Error loading projects:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("JSON/experiences.json")
      .then(response => response.json())
      .then(experienceData => {
        const experienceContainer = document.querySelector(".experience-container");
        
        experienceData.forEach(experience => {
          const experienceCard = document.createElement("div");
          experienceCard.classList.add("experience-card");
  
          // Add company name, title, and date
          experienceCard.innerHTML = `
            <h3>${experience.company}</h3>
            <h4>${experience.title} (${experience.date})</h4>
            <p>${experience.description}</p>
            <ul class="achievements">
              ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
          `;
  
          experienceContainer.appendChild(experienceCard);
        });
      })
      .catch(error => console.error("Error loading experience data:", error));
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("JSON/skills.json")
      .then(response => response.json())
      .then(skillsData => {
        const skillsContainer = document.querySelector(".skills-container");
  
        skillsData.forEach(skillCategory => {
          // Create category heading
          const categoryTitle = document.createElement("h3");
          categoryTitle.textContent = skillCategory.category;
          skillsContainer.appendChild(categoryTitle);
  
          // Create list of skills
          const skillsList = document.createElement("ul");
          skillCategory.skills.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.classList.add("skill-item");
  
            // Create skill icon and name
            skillItem.innerHTML = `
              <i class="${skill.icon}"></i>
              <span>${skill.name}</span>
            `;
  
            skillsList.appendChild(skillItem);
          });
  
          skillsContainer.appendChild(skillsList);
        });
      })
      .catch(error => console.error("Error loading skills data:", error));
  });
  