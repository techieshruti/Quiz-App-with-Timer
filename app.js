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

startScreen.style.display="none";
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

// hide startscreen
startScreen.id="startScreen";
startScreen.style.display="none"
btn.addEventListener("click", () =>
{
    startScreen.style.display="none"
    quizScreen.style.display = "flex";
})

// QUIZ Screen inside div container
const quizScreen = document.createElement("div");
container.appendChild(quizScreen);

// quiz screen styling
quizScreen.style.display="flex";
quizScreen.style.width="100%";
quizScreen.style.height="550px";
quizScreen.style.backgroundColor="pink";

// div for previous page button and timer
const quizhead=document.createElement("div")
quizScreen.appendChild(quizhead);

quizhead.style.display="flex";
quizhead.style.justifyContent="space-between";
quizhead.style.backgroundColor="#e59696ff"
quizhead.style.width="100%";
quizhead.style.height="3rem"
quizhead.style.margin="1rem"

// prev btn in quizhead div
const preBtn = document.createElement("i")
quizhead.appendChild(preBtn);
preBtn.classList.add("fa-solid", "fa-circle-chevron-left");

preBtn.style.fontSize = "2rem";
preBtn.style.color = "#ffffff";
preBtn.style.cursor = "pointer";
preBtn.style.paddingTop = "0.5rem";
preBtn.style.paddingLeft = "0.5rem";

preBtn.addEventListener("click", () => {
    startScreen.style.display="block";
    quizScreen.style.display = "none";
})

// timer in quizhead div
const timer=document.createElement("div")
quizhead.appendChild(timer);

timer.style.justifyContent="space-between"

const timerIcon=document.createElement("i")
timer.appendChild(timerIcon);
timerIcon.classList.add("fa-solid", "fa-hourglass-end");
timerIcon.style.fontSize = "2rem";
timerIcon.style.color = "#ffffff";
timerIcon.style.marginTop="0.5rem"
timerIcon.style.marginRight="0.5rem"

const timerSpan=document.createElement("span")
timer.appendChild(timerSpan);

