// ===============================
// Typing Animation
// ===============================

const text = [
  "Aspiring Data Scientist",
  "Python Developer",
  "Power BI Developer",
  "AI & Machine Learning Enthusiast",
  "SQL Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            type();

        }, 1500);

    }

    else {

        setTimeout(type, 100);

    }

})();


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});


// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(10,10,25,.75)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        nav.style.background = "rgba(20,20,35,.45)";
        nav.style.boxShadow = "none";

    }

});// ===============================
// DARK / LIGHT MODE
// ===============================

const toggle = document.getElementById("themeToggle");

if (toggle) {

    if(localStorage.getItem("theme") === "light"){

        document.body.classList.add("light");
        toggle.innerHTML = "☀️";

    }

    toggle.onclick = () => {

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            localStorage.setItem("theme","light");
            toggle.innerHTML = "☀️";

        }

        else{

            localStorage.setItem("theme","dark");
            toggle.innerHTML = "🌙";

        }

    };

}// ==============================
// PRELOADER
// ==============================

window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

if(preloader){

setTimeout(()=>{

preloader.classList.add("hide");

},1000);

}

});