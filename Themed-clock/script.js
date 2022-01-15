const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
];


toggle.addEventListener("click", function (event) {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        event.target.innerHTML = "Dark mode";
    } else {
        html.classList.add("dark");
        event.target.innerHTML = "Light mode";
    }
})


//map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (
        ((num - in_min) * (out_max - out_min) / (in_max - in_min)) + out_min
    );
}

//set time 
const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursOnClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const amPm = hours >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate( -50%, -100%) rotate(${scale(hoursOnClock, 0 ,11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate( -50%, -100%) rotate(${scale(minutes, 0 ,59, 0, 360)}deg)`;
    secondEl.style.transform = `translate( -50%, -100%) rotate(${scale(seconds, 0 ,59, 0, 360)}deg)`;


    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes } ${amPm}`;
    dateEl.innerHTML = `${daysName[day]} , ${monthsName[month]} <span class="circle">${date}</span>`;


}

setTime();

setInterval(setTime, 1000);