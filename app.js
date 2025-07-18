// start screen

const container = document.createElement("div");
document.body.appendChild(container);
container.style.display="flex"
container.style.justifyContent="center"

container.style.backgroundColor="#0f0c29";
container.style.width="100%";
container.style.height="550px";

// heading h1
const heading1=document.createElement("h1");
container.appendChild(heading1);
heading1.textContent="🔥 Ultimate JS Quiz";
heading1.style.color="#b2d3f5ff";

// button
const btn = document.createElement("button");
container.appendChild(btn);
btn.textContent="Start Button";

btn.style.width="10rem"
btn.style.height="3rem";