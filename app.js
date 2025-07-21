document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Poppins, sans-serif";

// CREATED CONTAINER
const container = document.createElement("div");
document.body.appendChild(container);

// CONTAINER STYLING
container.style.display="flex"
container.style.justifyContent="center"
container.style.alignItems= "center"
container.style.background = "linear-gradient(135deg, #0d0835ff, #4d4883ff, #bcbcd2ff)";
container.style.width="100%";
container.style.height="100vh";
container.style.margin="0";
container.style.padding="0";

// ===========================================
// ============== START SCREEN================
// ===========================================

// CREATED START SCREEN INSIDE CONTAINER
const startScreen = document.createElement("div");
// container.appendChild(startScreen);

// START SCREEN STYLING
startScreen.style.textAlign="center";
startScreen.style.color="#f0f8ff";

//CREATED hEADING INSIDE START SCREEN
const heading1=document.createElement("h1");
startScreen.appendChild(heading1);

// hEADING STYLING AND CONTENT
heading1.textContent="🔥 Ultimate JS Quiz";
heading1.style.textShadow = "0 0 10px #8ce9b6";

// CREATED PARAGRAPh INSIDE START SCREEN
const para = document.createElement("p");
startScreen.appendChild(para);

// STYLING PARAGRAPh AND CONTENT
para.textContent=`Can you survive 60 seconds of JavaScript madness?
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
btn.style.border = "none";
btn.style.boxShadow = "0 0 15px #00e5ff";
btn.style.fontSize="1.3rem";
btn.style.cursor="pointer";
btn.style.transition = "all 0.3s ease";

// ADDED EVENT TO BUTTON IN START SCREEN
btn.addEventListener("mouseover", () =>
{
    btn.style.backgroundColor="#8ce9b6"
    btn.style.border="none"
    btn.style.boxShadow="0 0 15px #8ce9b6"
})

btn.addEventListener("mouseout", () =>
{
    btn.style.backgroundColor="#ffffff";
    btn.style.border = "none";
    btn.style.boxShadow = "0 0 15px #00e5ff";
})

btn.addEventListener("click", () => {
  playClickSound();
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    timerSpan.style.paddingRight="2rem";
    currentQuestionIndex = 0;
  renderQuestion(); // ✅ Timer starts ONLY from here
});




// =========================================
// =========== QUIZ SCREEN =================
// =========================================

// CREATED QUIZ SCREEN INSIDE CONTAINER
const quizScreen = document.createElement("div");
container.appendChild(quizScreen);

// QUIZ SCREEN STYLING
quizScreen.style.display="flex";
quizScreen.style.display = "none";
quizScreen.style.flexDirection = "column";
quizScreen.style.width="100%";
quizScreen.style.height="100%";
quizScreen.style.background = "linear-gradient(135deg, #edece6ff, #ede379ff";

// CREATED QUIZhEAD SECTION INSIDE QUIZ SCREEN
const quizhead=document.createElement("div")
quizScreen.appendChild(quizhead);

// STYLING QUIZhEAD
quizhead.style.display="flex";
quizhead.style.justifyContent="space-between";
quizhead.style.backgroundColor="#27253cff"
quizhead.style.width="100%";
quizhead.style.height="3rem"
quizhead.style.padding = "0 1rem";
quizhead.style.boxSizing = "border-box";
quizhead.style.alignItems = "center";
quizhead.style.borderBottom = "2px solid #00e5ff";

// ADDED PREV BTN INSIDE QUIZ SCREEN hEAD
const preBtn = document.createElement("i")
quizhead.appendChild(preBtn);
preBtn.classList.add("fa-solid", "fa-circle-chevron-left");

// PREV BTN STYLING
preBtn.style.fontSize = "2rem";
preBtn.style.color = "#ffffff";
preBtn.style.cursor = "pointer";
preBtn.style.paddingLeft = "0.5rem";

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

// CLEAR TIMER IF USER GOES BACK
preBtn.addEventListener("click", () => {
  playClickSound();
    clearInterval(timerInterval);
    time = 60;
    timerSpan.textContent = "Time: 60s";
    quizScreen.style.display = "none";
    startScreen.style.display = "block";
});

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
questionText.style.marginTop = "3rem";
questionText.style.marginBottom = "2rem";
questionText.style.textAlign = "center";

// QUESTIONS DATA
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

// CREATED OPTIONS BOX FOR EACh QUESTION
const optionsBox=document.createElement("div")
quizScreen.appendChild(optionsBox);

optionsBox.style.display = "grid";
optionsBox.style.gridTemplateColumns = "1fr 1fr";
optionsBox.style.gap = "1.5rem";
optionsBox.style.justifyContent = "center";
optionsBox.style.maxWidth = "500px";
optionsBox.style.margin = "0 auto";

function renderQuestion() {
  // Get current question
  const question = questions[currentQuestionIndex];

  // Set question text
  questionText.textContent ="";
  questionText.textContent = question.question;

  // Update question counter
  questionCounter.textContent = `📋 Question ${currentQuestionIndex + 1} of ${questions.length}`;

  // Clear previous options
  optionsBox.innerHTML = "";
//   questionText.textContent = "";

  // Reset time & timer
  clearInterval(timerInterval); // 🛑 Stop any existing timer
  time = 60;                    // ⏳ Reset time
  timerSpan.textContent = `Time: ${time}s`;

  // Start new timer for this question
  timerInterval = setInterval(() => {
    time--;
    timerSpan.textContent = `Time: ${time}s`;

    if (time === 0) {
      clearInterval(timerInterval); // ⛔ Stop timer
      // Automatically move to next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    alert("✅ Quiz Finished!");
  }
    }
  }, 1000);


  // Create buttons dynamically
  question.options.forEach(optionText => {
    const btn = document.createElement("button");
    btn.textContent = optionText;

    // Style the button
    btn.style.padding = "1rem";
    btn.style.fontSize = "1rem";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "10px";
    btn.style.border = "none";
    btn.style.backgroundColor = "#f4f4f4";

    // Add click logic
    btn.addEventListener("click", () => {
playClickSound();

      // Check correct
      if (optionText === question.correct) {
        btn.style.backgroundColor = "#8ce9b6"; // green
        btn.style.color = "#000";
        btn.style.boxShadow = "0 0 15px #8ce9b6"
        playCorrectSound();
      } else {
        btn.style.backgroundColor = "#ff4d4d"; // red
        btn.style.color = "#000";
        btn.style.boxShadow = "0 0 15px #ff4d4d";
        playWrongSound();
      }

      // Disable all buttons
      const allButtons = optionsBox.querySelectorAll("button");
      allButtons.forEach(button => {
        button.disabled = true;
        button.style.cursor = "not-allowed";
        if (button !== btn) {
          button.style.opacity = "0.6";
        }
      });

      // Highlight selected
      btn.style.opacity = "1";
      btn.style.color = "#000";
      btn.style.fontWeight = "bold";
      btn.style.border = "none";

      // Move to next question after 1s
      setTimeout(() => {
        const score= currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          renderQuestion();
        } else {
            clearInterval(timerInterval);
          quizScreen.style.display="none"
          scoreScreen.style.display="block"

scoreText.textContent=`You scored ${score} out of ${questions.length} questions`

if(score === questions.length){
  scoreText.textContent="🔥 Legend! You aced it!"
}else if (score >= questions.length/2){
  scoreText.textContent="🎯 Great effort! Keep practicing!"
}else {
  scoreText.textContent="💡 Don’t give up! Try again!"
}

        }
      }, 1000);
    });

    optionsBox.appendChild(btn);
  });

  
}

// LOAD SOUNDS
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const clickSound = new Audio("sounds/click.mp3");

// PLAY ON CORRECT ANSWER
function playCorrectSound(){
  correctSound.currentTime=0;
  correctSound.play();
}

// PLAY ON WRONG ANSWER
function playWrongSound(){
  wrongSound.currentTime=0;
  wrongSound.play();
}

// PLAY ON CLICK ANSWER
function playClickSound(){
  clickSound.currentTime=0;
  clickSound.play();
}

// =========================================
// ===============SCORE SCREEN==============
// =========================================

const scoreScreen = document.createElement("div");
container.appendChild(scoreScreen);
scoreScreen.style.color = "#fff";
// scoreScreen.style.display = "none";
scoreScreen.style.textAlign = "center";
scoreScreen.style.padding = "2rem";

// SCORE HEADING
const scoreHeading = document.createElement("h1");
scoreHeading.textContent = "🎉 Quiz Completed!";
scoreHeading.style.fontSize = "2.5rem";
scoreHeading.style.marginBottom = "1.5rem";
scoreScreen.appendChild(scoreHeading);

// SCORE TEXT
const scoreText = document.createElement("p")
scoreScreen.appendChild(scoreText);
scoreText.style.fontSize = "1.8rem";
scoreText.style.marginBottom = "1rem";

// FEEDBACK MESSAGE
const feedbackMsg= document.createElement("p")
scoreScreen.appendChild(feedbackMsg)
scoreText.style.fontSize = "1.8rem";
scoreText.style.marginBottom = "1rem";

// RESTART BUTTON
const restartBtn=document.createElement("button")
scoreScreen.appendChild(restartBtn);
restartBtn.textContent="🔄 Restart Quiz"
restartBtn.style.backgroundColor="8ce9b6"
restartBtn.style.padding="0.8rem 2rem"
restartBtn.style.fontSize="1.2rem"
restartBtn.style.borderRadius="1.5rem"
restartBtn.style.margin = "0.5rem";
restartBtn.style.cursor = "pointer";
restartBtn.style.border = "none";

// HOME BUTTON
const homeBtn=document.createElement("button")
scoreScreen.appendChild(homeBtn);
homeBtn.textContent="🏠 Back to Home"
homeBtn.style.backgroundColor="8ce9b6"
homeBtn.style.padding="0.8rem 2rem"
homeBtn.style.fontSize="1.2rem"
homeBtn.style.borderRadius="1.5rem"
homeBtn.style.margin = "0.5rem";
homeBtn.style.cursor = "pointer";
homeBtn.style.border = "none";

restartBtn.addEventListener("click", ()=> {
  playClickSound();
  scoreScreen.style.display="none";
  quizScreen.style.display="none";
  startScreen.style.display="block";
  currentQuestionIndex = 0;
  score = 0;
  startTimer(); // reset timer
  renderQuestion();
});

homeBtn.addEventListener("click", ()=>{
  playClickSound();
  scoreScreen.style.display="none";
  quizScreen.style.display="none";
  startScreen.style.display="block";
});
