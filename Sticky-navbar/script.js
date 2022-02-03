const nav = document.querySelector(".nav");


const fixnav = () => {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");

    }
}

window.addEventListener("scroll", fixnav);