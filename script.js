const root = document.querySelector(":root");

setInterval(updateRandomCSSVariables, 10);

function updateRandomCSSVariables() {
    // console.log(Math.random());
    root.style.setProperty("--random-time", `${Math.random()}s`);
    root.style.setProperty("--random-rotation", `${Math.random()}deg`);
    root.style.setProperty("--random-length", `${Math.random()}em`);
    root.style.setProperty("--random-number", Math.random());
}

document.querySelectorAll(".switch").forEach(e => {
    e.addEventListener("click", () => {
        if (e.classList.contains("on")) {
            e.classList.add("off");
            e.classList.remove("on");
        } else {
            e.classList.add("on");
            e.classList.remove("off");
        }

        const switchType = e.parentElement.classList[0];
        document.body.classList.contains(switchType) ? document.body.classList.remove(switchType) : document.body.classList.add(switchType);

        if (switchType === "nerd") nerdToggle(document.body.classList.contains("nerd"));
    });
});

// nerd mode

function nerdToggle(nerdMode) {
    const directionBinarywards = nerdMode ? "to" : "from";

    // iterate through all elements (small amount so who cares how, right?)
    // for every element that has text directly inside, tun that text through textToBinary()
    document.querySelectorAll("*").forEach(e => {
        if (e.childNodes[0]?.nodeType === Node.TEXT_NODE && !binaryConvert(e.childNodes[0]?.nodeValue, "to").match(/1010 (100000)+/)) {
            const textNode = e.childNodes[0];
            textNode.nodeValue = binaryConvert(textNode.nodeValue, directionBinarywards);
        }
    });
}

function binaryConvert(text, directionBinarywards) {
    if (directionBinarywards === "to") {
        return text
            .split("")
            .map(c => c.charCodeAt(0).toString(2))
            .join(" ");
    } else if (directionBinarywards === "from") {
        return text
            .split(" ")
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join("");
    } else throw new Error("🐗🏿🤯🏼");
}

const phoneLink = document.querySelector(".contact-phone > a");
phoneLink.innerText = atob("KzEgKDQwMikgOTE1LTM3ODc=");
phoneLink.setAttribute("href", atob("dGVsOjQwMjkxNTM3ODc="));

document.querySelectorAll("*").forEach(e=>{
    e.addEventListener('mouseover', () => {
        e.style.setProperty("--static-random-number", Math.random());
    });
});