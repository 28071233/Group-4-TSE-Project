/* Array storing all questions, answers, hints and outputs */
const questions = [
{
    q: "Fill in the blank:<br><br>___('Hello World')",
    a: "print",
    hint: "Displays text to the screen.",
    output: "Hello World"
},
{
    q: "Fill in the blank:<br><br>___ x > 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Big')",
    a: "if",
    hint: "Used to check a condition.",
    output: "Big"
},
{
    q: "Fill in the blank:<br><br>if x > 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Big')<br>___:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Small')",
    a: "else",
    hint: "Runs when the if condition is false.",
    output: "Small"
},
{
    q: "Fill in the blank:<br><br>for i in ___(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)",
    a: "range",
    hint: "Used to repeat code a number of times.",
    output: "0\n1\n2"
},
{
    q: "Fill in the blank:<br><br>for i in range(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i == 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___",
    a: "break",
    hint: "Stops the loop early.",
    output: "0"
}
];

/* Tracks current question index */
let current = 0;

/* Tracks number of correct answers */
let score = 0;

/* Function to load and display a question */
function loadQuestion() {

    if (current >= questions.length) {

        document.getElementById("question").innerHTML =
            "Completed!<br><br>Score: " + score + "/" + questions.length;

        document.getElementById("answer").style.display = "none";
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("hintBtn").style.display = "none";
        document.getElementById("skipBtn").style.display = "none";
        document.getElementById("console").style.display = "none";

        document.getElementById("feedback").innerText = "";
        document.getElementById("hint").innerText = "";

        document.getElementById("retryBtn").style.display = "inline-block";

        return;
    }

    document.getElementById("question").innerHTML = questions[current].q;

    document.getElementById("feedback").innerText = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("answer").value = "";

    document.getElementById("console").style.display = "none";
}

/* Function to check the user's answer */
function checkAnswer() {

    let user = document.getElementById("answer").value.trim().toLowerCase();
    let correct = questions[current].a.toLowerCase();
    
    if (user === correct) {

        document.getElementById("feedback").innerText = "Correct";
        score++;

        let consoleBox = document.getElementById("console");
        consoleBox.style.display = "block";
        consoleBox.innerText = questions[current].output;

        current++;
        setTimeout(loadQuestion, 2000);

    } else {
        document.getElementById("feedback").innerText = "Try again or use a hint";
    }
}

/* Function to skip question */
function skipQuestion() {
    current++;
    loadQuestion();
}

/* Function to display hint */
function showHint() {
    document.getElementById("hint").innerText =
        "Hint: " + questions[current].hint;
}

/* Function to show or hide answers */
function toggleAnswers() {

    let box = document.getElementById("answersBox");

    if (box.style.display === "block") {
        box.style.display = "none";
        return;
    }

    box.style.display = "block";

    box.innerHTML = `
    <b>Answers:</b><br><br>

    <b>Question 1:</b> print<br>
    Prints text to the console.<br><br>

    <b>Question 2:</b> if<br>
    Evaluates the conditional statement and executes the code if it is true; otherwise, the code is skipped.<br><br>

    <b>Question 3:</b> else<br>
    Runs the provided code when the if condition is false.<br><br>

    <b>Question 4:</b> range<br>
    Generates an immutable (unmodifiable) sequence of numbers. This function can take arguments to perform specific loops.<br><br>

    <b>Question 5:</b> break<br>
    Stops a loop early.
    `;
}

/* Function to restart the quiz */
function restartQuiz() {

    current = 0;
    score = 0;

    document.getElementById("answer").style.display = "inline-block";
    document.getElementById("submitBtn").style.display = "inline-block";
    document.getElementById("hintBtn").style.display = "inline-block";
    document.getElementById("skipBtn").style.display = "inline-block";

    document.getElementById("retryBtn").style.display = "none";
    document.getElementById("answersBox").style.display = "none";

    loadQuestion();
}

loadQuestion();