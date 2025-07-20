

// CREATED CONTAINER
const container = document.createElement("div");
document.body.appendChild(container);

// CONTAINER STYLING
container.style.display="flex"
container.style.justifyContent="center"
container.style.backgroundColor="#0f0c29";
container.style.width="100%";
container.style.height="550px";
container.style.margin="0px";
container.style.padding="0px";

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
quizScreen.style.flexDirection = "column";
quizScreen.style.width="100%";
quizScreen.style.height="100%";
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
quizhead.style.padding = "0 1rem";
quizhead.style.boxSizing = "border-box";
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
timerIcon.style.margin = "0";
timerSpan.style.margin = "0";


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

// Question Data
const questions=[
    {
        question:"1. What does DOM stand for?",
        options: ["Document Object Model","Data Object Model","Desktop Object Model", "Document Oriented Method"],
        correct: "Document Object Model"
    },
    {
        question: "2. Which keyword is used to declare a constant in JS?",
        options: ["let", "const", "var","constant"],
        correct: "const"
    },
    {
        question: "3. What will be the output of the following code snippet? console.log(typeof(NaN));",
        options: ["Object", "Number", "String", "None of above"],
        correct: "Number"
    },
    {
        question: "4. Which method converts JSON data to a JavaScript object?",
        options:["JSON.parse()","JSON.stringify()", "JSON.toObject()","JSON.convert()"],
        correct: "JSON.parse()"
    },
    {
        question: "5. What will `2 + '2'` return?",
        options: ["4", "'22'","NaN","undefined"],
        correct: "'22'"
    },
    {
        question:"6. What does `===` mean in JavaScript?",
        options: ["Equals", "Strict equality", "Assignment","Comparison with type conversion"],
        correct:"Strict equality"
    },
    {
        question:"7. Which of these is a JavaScript data type?",
        options:["float", "integer","symbol", "character"],
        correct: "symbol"
    },
    {
    question: "8. What is a closure in JavaScript?",
    options: [
      "A block of code",
      "A function inside a loop",
      "A function that remembers its lexical scope",
      "A function with no return value"
    ],
    correct: "A function that remembers its lexical scope"
  },
  {
    question: "9. Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()"
  },
  {
    question: "10. What does `NaN` stand for?",
    options: ["Not a Name", "Null and None", "Not a Number", "No assigned Number"],
    correct: "Not a Number"
  },
  {
    question: "11. What does the `addEventListener()` method do?",
    options: [
      "Adds style to HTML",
      "Executes a function immediately",
      "Attaches an event handler to an element",
      "Creates an element"
    ],
    correct: "Attaches an event handler to an element"
  },
  {
    question: "12. What is a promise in JavaScript?",
    options: [
      "A method to style elements",
      "A function that returns true",
      "An object representing future completion or failure of an async operation",
      "A conditional loop"
    ],
    correct: "An object representing future completion or failure of an async operation"
  },
  {
    question: "13. Which built-in method calls a function for each array element?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correct: "forEach()"
  },
  {
    question: "14. Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: "Netscape"
  },
  {
    question: "15. How do you write a comment in JavaScript?",
    options: [
      "`# This is a comment`",
      "`<!-- Comment -->`",
      "`// This is a comment`",
      "`/* This is a comment */`"
    ],
    correct: "// This is a comment"
  }
];

// CREATED QUIZ BOX
const quizBox=document.createElement("div");
quizScreen.appendChild(quizBox);
quizBox.style.padding = "2rem";
quizBox.style.color = "#000";
quizBox.style.fontFamily = "Arial";

// ADDED QUESTION COUNT TO QUIZ BOX
const questionCounter = document.createElement("p")
quizBox.appendChild(questionCounter);

// QUESTION COUNT STYLING
questionCounter.textContent="📋 Question 1 of 10";
questionCounter.style.paddingLeft="2rem"
questionCounter.style.fontSize="1.5rem"
questionCounter.style.color = "#333";

// ADDED hORIZONTAL RULAR TO QUIZ BOX
const line = document.createElement("hr")
quizBox.appendChild(line)

// STYLING TO hORIZONTAL LINE
line.style.width="100%";
line.style.height="0.3rem";
line.style.backgroundColor="#bab7b7ff";
line.style.border="none"

// ADDED QUESTION TEXT TO QUIZ BOX
const questionText = document.createElement("h1")
quizBox.appendChild(questionText);
questionText.textContent=question.text;
questionText.style.marginTop = "3rem";
questionText.style.marginBottom = "2rem";
questionText.style.textAlign = "center";


// CREATED OPTIONS BOX FOR EACh QUESTION
const optionsBox=document.createElement("div")
quizScreen.appendChild(optionsBox);

optionsBox.style.display = "grid";
optionsBox.style.gridTemplateColumns = "1fr 1fr";
optionsBox.style.gap = "1.5rem";
optionsBox.style.justifyContent = "center";
optionsBox.style.maxWidth = "500px";
optionsBox.style.margin = "0 auto";


// Create option buttons
question.options.forEach((optionText) => {
    const btn = document.createElement("button");
    btn.textContent = optionText;
    
    // Option styling
    btn.style.padding = "1rem";
    btn.style.fontSize = "1rem";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "10px";
    btn.style.border = "1px solid #ccc";
    btn.style.backgroundColor = "#f4f4f4";

    // Add to DOM
    optionsBox.appendChild(btn);

    // On option click
    btn.addEventListener("click", () => {
        if (optionText === question.correct) {
            btn.style.backgroundColor = "#8ce9b6"; // green for correct
        } else {
            btn.style.backgroundColor = "#ffb3b3"; // red for wrong
        }

        // 🔐 Disable all option buttons
        const allButtons = optionsBox.querySelectorAll("button");
        allButtons.forEach(button => {
      button.disabled = true;
      button.style.cursor = "not-allowed";
      if (button !== btn) {
        button.style.opacity = "0.6";
      }
        });
        // Highlight the selected button
    btn.style.opacity = "1";
    btn.style.color = "#000"; // normal text
    btn.style.fontWeight = "bold";
    btn.style.border = "2px solid #000";

    });
    
});

