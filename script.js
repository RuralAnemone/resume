const root = document.querySelector(":root");

setInterval(updateRandomCSSVariables, 10);

function updateRandomCSSVariables() {
    // console.log(Math.random());
    root.style.setProperty('--random-time', `${Math.random()}s`);
    root.style.setProperty('--random-rotation', `${Math.random()}deg`);
}