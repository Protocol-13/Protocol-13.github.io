particlesJS("particles-js", {

particles: {

number: { value: 100 },

size: { value: 1 },

color: { value: "#00ffff" },

line_linked: {

enable: true,
distance: 100,
color: "#00ffff",
opacity: 0.25

},

move: {

speed: 0.4

}

}

});

const text = "whoami";
let i = 0;

function typeWriter() {

if (i < text.length) {

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter, 120);

}

}

window.onload = typeWriter;

const terminals = document.querySelectorAll(".terminal");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show-terminal");

}

});

});

terminals.forEach(t => observer.observe(t));