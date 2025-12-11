const firstParagraph = document.getElementById("myName");
const secondParagraph = document.getElementById("copyright");
const thirdParagraph = document.getElementById("lastModified");


const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;


firstParagraph.textContent = `Mufaro Justice Tapera`;
secondParagraph.textContent = `© ${currentYear} Travel and Planner. All rights reserved.`;
thirdParagraph.textContent = `Last Modified: ${lastModified}`;


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');
});
