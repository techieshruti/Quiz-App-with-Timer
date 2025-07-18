// container
const container = document.createElement("div");
document.body.appendChild(container);
container.style.display="flex"
container.style.justifyContent="center"

container.style.backgroundColor="#0f0c29";
container.style.width="100%";
container.style.height="550px";

// start screen div inside container
const startScreen = document.createElement("div");
container.appendChild(startScreen);
startScreen.style.textAlign="center";
startScreen.style.color="#b2d3f5ff";

//heading inside startscreen div
const heading1=document.createElement("h1");
startScreen.appendChild(heading1);
heading1.textContent="🔥 Ultimate JS Quiz";
heading1.style.paddingTop="2rem"

// paragraph inside startscreen div
const para = document.createElement("p");
startScreen.appendChild(para);
para.textContent=`Can you survive 60 seconds of JavaScript madness? \n
Only legends score 100%!`;

para.style.fontSize="2rem"
para.style.paddingTop="2rem"
para.style.paddingBottom="2rem"

// button inside startscreen div
const btn = document.createElement("button");
startScreen.appendChild(btn);
btn.textContent="Start the Challenge";

btn.style.width="15rem"
btn.style.height="3.5rem";
btn.style.borderRadius="2.3rem"
btn.style.fontSize="1.3rem";
btn.style.cursor="pointer";

btn.addEventListener("mouseover", () =>
{
    btn.style.backgroundColor="#8ce9b6ff"
    btn.style.border="none"
    btn.style.transition="0.2s ease-in"
    btn.style.boxShadow="0px 0px 10px #b2d3f5ff"
})

btn.addEventListener("mouseout", () =>
{
    btn.style.backgroundColor="#ffffff"
    btn.style.transition="0.5s ease-in"
    btn.style.boxShadow="none"
})