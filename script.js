// ================================
// MGNREGA Website JavaScript
// ================================

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Quiz Section
// ================================

function check(answer) {

    const result = document.getElementById("result");

    if (!result) return;

    if (answer === 100) {

        result.innerHTML = "✅ Correct! MGNREGA guarantees <b>100 days</b> of wage employment every financial year.";

        result.style.color = "green";

    } else {

        result.innerHTML = "❌ Incorrect. The correct answer is <b>100 Days</b>.";

        result.style.color = "red";
    }
}

// ================================
// Scroll Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section, .card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ================================
// Scroll To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Hero Text Animation
// ================================

const heroHeading = document.querySelector(".hero h1");

if (heroHeading) {

    heroHeading.animate(

        [
            { opacity: 0, transform: "translateY(-40px)" },
            { opacity: 1, transform: "translateY(0px)" }
        ],

        {
            duration: 1200,
            easing: "ease-out"
        }

    );

}

// ================================
// Console Message
// ================================

console.log("🌾 Welcome to the MGNREGA Awareness Website");