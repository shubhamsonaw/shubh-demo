// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// ================================
// DARK / LIGHT MODE
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Remember user's theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";

}


// ================================
// DYNAMIC COUNTERS
// ================================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.ceil(target / 50);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = current;

            setTimeout(updateCounter, 30);

        };

        updateCounter();

    });

};


// Start counters when stats section becomes visible

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting) {

            startCounters();

            observer.disconnect();

        }

    },
    {
        threshold: 0.3
    }
);

observer.observe(statsSection);


// ================================
// FEATURE BUTTONS
// ================================

const featureButtons = document.querySelectorAll(".learn-btn");

featureButtons.forEach(button => {

    button.addEventListener("click", () => {

        const feature = button.dataset.feature;

        alert(
            `${feature} is one of the main features of this website!`
        );

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Validation

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#dc2626";

        return;

    }


    // Simple email validation

    if (!email.includes("@") || !email.includes(".")) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#dc2626";

        return;

    }


    // Success

    formMessage.textContent =
        `Thank you, ${name}! Your message has been submitted.`;

    formMessage.style.color = "#16a34a";


    // Clear form

    contactForm.reset();

});


// ================================
// CURRENT YEAR
// ================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();