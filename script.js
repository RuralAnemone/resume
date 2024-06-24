const root = document.querySelector(':root');

setInterval(updateRandomCSSVariables, 10);

function updateRandomCSSVariables() {
    // console.log(Math.random());
    root.style.setProperty('--random-time', `${Math.random()}s`);
    root.style.setProperty('--random-rotation', `${Math.random()}deg`);
    root.style.setProperty('--random-length', `${Math.random()}em`);
}

document.querySelectorAll('.switch').forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('on')) {
            e.classList.add('off');
            e.classList.remove('on');
        } else {
            e.classList.add('on');
            e.classList.remove('off');
        }

        const switchType = e.parentElement.classList[0];
        document.body.classList.contains(switchType) ? document.body.classList.remove(switchType) : document.body.classList.add(switchType);
    });
});
