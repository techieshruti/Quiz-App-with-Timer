// CREATED CONTAINER
const container = document.createElement("div");
document.body.appendChild(container);

// CONTAINER STYLING
container.style.display="flex"
container.style.justifyContent="center"
container.style.backgroundColor="#0f0c29";
container.style.width="100%";
container.style.height="550px";

// ===========================================
// ============== START SCREEN================
// ===========================================

// CREATED START SCREEN INSIDE CONTAINER
const startScreen = document.createElement("div");
container.appendChild(startScreen);

// START SCREEN STYLING
startScreen.style.display="none";
startScreen.style.textAlign="center";
startScreen.style.color="#b2d3f5ff";

//CREATED hEADING INSIDE START SCREEN
const heading1=document.createElement("h1");
startScreen.appendChild(heading1);

// hEADING STYLING AND CONTENT
heading1.textContent="🔥 Ultimate JS Quiz";
heading1.style.paddingTop="2rem"

// CREATED PARAGRAPh INSIDE START SCREEN
const para = document.createElement("p");
startScreen.appendChild(para);

// STYLING PARAGRAPh AND CONTENT
para.textContent=`Can you survive 60 seconds of JavaScript madness? \n
Only legends score 100%!`;
para.style.fontSize="2rem"
para.style.paddingTop="2rem"
para.style.paddingBottom="2rem"

// CREATED BUTTON INSIDE START SCREEN
const btn = document.createElement("button");
startScreen.appendChild(btn);

// STYLING BUTTON AND CONTENT
btn.textContent="Start the Challenge";
btn.style.width="15rem"
btn.style.height="3.5rem";
btn.style.borderRadius="2.3rem"
btn.style.fontSize="1.3rem";
btn.style.cursor="pointer";

// ADDED EVENT TO BUTTON IN START SCREEN
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

// hIDE START SCREEN
startScreen.id="startScreen";
startScreen.style.display="none"

// =========================================
// =========== QUIZ SCREEN =================
// =========================================

// CREATED QUIZ SCREEN INSIDE CONTAINER
const quizScreen = document.createElement("div");
container.appendChild(quizScreen);

// QUIZ SCREEN STYLING
quizScreen.style.display="flex";
quizScreen.style.width="100%";
quizScreen.style.height="550px";
quizScreen.style.backgroundColor="pink";

// CREATED QUIZhEAD SECTION INSIDE QUIZ SCREEN
const quizhead=document.createElement("div")
quizScreen.appendChild(quizhead);

// STYLING QUIZhEAD
quizhead.style.display="flex";
quizhead.style.justifyContent="space-between";
quizhead.style.backgroundColor="#e59696ff"
quizhead.style.width="100%";
quizhead.style.height="3rem"
quizhead.style.margin="1rem"
quizhead.style.padding = "0 1rem";
quizhead.style.alignItems = "center";

// ADDED PREV BTN INSIDE QUIZ SCREEN hEAD
const preBtn = document.createElement("i")
quizhead.appendChild(preBtn);
preBtn.classList.add("fa-solid", "fa-circle-chevron-left");

// PREV BTN STYLING
preBtn.style.fontSize = "2rem";
preBtn.style.color = "#ffffff";
preBtn.style.cursor = "pointer";
preBtn.style.paddingLeft = "0.5rem";

// ADDED EVENT ON PREV BTN
preBtn.addEventListener("click", () => {
    startScreen.style.display="block";
    quizScreen.style.display = "none";
})

// CREATED TIMER DIV INSIDE QUIZhEAD
const timer=document.createElement("div")
quizhead.appendChild(timer);

// TIMER DIV STYLING
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.gap = "0.5rem";
timer.style.paddingRight = "1rem";
timer.style.justifyContent="space-between"

// CREATED TIME-ICON INSIDE TIMER DIV
const timerIcon=document.createElement("i")
timer.appendChild(timerIcon);
timerIcon.classList.add("fa-solid", "fa-hourglass-end");

// TIME-icon DIV STYLING
timerIcon.style.fontSize = "2rem";
timerIcon.style.color = "#ffffff";
timerIcon.style.margin = "0";


// CREATED TIMER-SPAN INSIDE TIMER DIV
const timerSpan=document.createElement("span")
timer.appendChild(timerSpan);

timerSpan.style.color = "#ffffff";
timerSpan.style.fontWeight = "bold";
timerSpan.style.fontSize = "1.2rem";


// TIME LOGIC
let time = 60;
let timerInterval;

// ADDED EVENT ON PREV BTN
btn.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    timerSpan.style.paddingRight="2rem"

    // Start the countdown
    timerInterval = setInterval(() => {
        time--;
        timerSpan.textContent = `Time: ${time}s`;

        if (time === 0) {
            clearInterval(timerInterval);
            alert("⏰ Time's up!");
            // You can call your end quiz logic here
        }
    }, 1000);
});

// CLEAR TIMER IF USER GOES BACK
preBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    time = 60;
    timerSpan.textContent = "Time: 60s";
    quizScreen.style.display = "none";
    startScreen.style.display = "block";
});
