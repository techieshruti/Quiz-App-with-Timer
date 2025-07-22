# 🔥 Ultimate JavaScript Quiz App

A fully dynamic and interactive quiz application built using **HTML** and **vanilla JavaScript**. This project helps users test their JavaScript knowledge with a clean UI, a timer-based challenge, sound effects, and a score summary with animations.

---

## 🚀 Features

- 🎯 **15 JavaScript Questions** – Carefully selected MCQs to test core JS concepts.
- ⏱️ **60-Second Timer** – Each question has a countdown to increase the challenge.
- 🖱️ **Interactive UI** – Click to answer, and feedback is shown instantly.
- 🔇 **Sound Effects** – Click, correct, and wrong answer sounds.
- ✨ **Score Screen** – Shows results with feedback and celebration animation.
- 🎆 **Fireworks Animation** – On achieving a perfect score.
- ❌ **Option Locking** – Once answered, options disable with dimmed visuals.

---

## 📸 Screenshots

| Start Screen | Quiz Screen | Result Screen |
|--------------|-------------|----------------|
| ![Start](./screenshots/startscreen.png) | ![Quiz](./screenshots/quizscreen.png) | ![Result](./screenshots/scorescreen.png) |

---

## 🛠️ Tech Stack

- **HTML** – Structure of the app
- **CSS** – Styling (custom color themes and animations)
- **JavaScript (ES6)** – Complete logic and DOM manipulation
- **Font Awesome** – For icons
- **MP3 Audio Files** – Sound effects
- **Fireworks JS / CSS Animation** – For result celebration

---

## 📁 Folder Structure

```
quiz-app/
│
├── index.html
├── script.js
│ ├── sounds/
│ │ ├── click.mp3
│ │ ├── clapping.mp3
│ │ ├── correct.mp3
│ │ ├── wrong.mp3
│ │ └── failed.mp3
│ ├── screenshots/
│ │ ├── startscreen.png
│ │ ├── quizscreen.png
│ │ └── scorescreen.png

```

## 🧠 How It Works

1. **Start Screen**: User clicks "Start the Challenge" to begin.
2. **Question Rendering**: Questions and options are rendered from an object dynamically.
3. **Timer Logic**: 60 seconds per question, resets per new one.
4. **Scoring**: Correct answers increase score. Once submitted, others are disabled.
5. **Result Page**: Shows score with dynamic feedback and optional fireworks for top scorers.

---

## 🧪 Lessons Learned

- DOM manipulation using `createElement`, `appendChild`, `textContent`, and styling.
- Managing state (e.g., `score`, `currentQuestionIndex`) across the app.
- Handling user interactions, event listeners, and timers.
- Preventing double scoring using flag variables.
- Creating dynamic, responsive UI with animations and sound effects.

---

## 🔊 Credits

- [Font Awesome](https://fontawesome.com/) – Icons
- [Pixabay](https://pixabay.com/sound-effects/)) – Sound effects

---

## 📌 Future Improvements

- Add difficulty levels (Easy, Medium, Hard)
- Add timer bar animation
- Store high scores using `localStorage`
- Add leaderboard or shareable results
- Mobile responsiveness and dark mode

---

## ✅ Demo

> [Live Link](https://techieshruti.github.io/Quiz-App-with-Timer/) - Live Link

---

## 🙌 Author

**Shruti Chandra**  
Frontend Enthusiast | Passionate about learning through building.

---



