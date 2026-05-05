
    const questions = [
    {
        q: "Which of these is an example of Artificial Intelligence?",
    options: ["A calculator", "Face recognition", "A keyboard"],
    answer: 1
            },
    {
        q: "Which field uses AI to learn from data?",
    options: ["Machine Learning", "Typing", "Printing"],
    answer: 0
            },
    {
        q: "Which of these commonly uses AI?",
    options: ["Voice assistants", "A pencil", "A light switch"],
    answer: 0
            },
    {
        q: "What does AI stand for?",
    options: ["Artificial Intelligence", "Automatic Input", "Advanced Internet"],
    answer: 0
            },
    {
        q: "Which device uses AI?",
    options: ["Smartphone assistant", "Notebook", "Chair"],
    answer: 0
            }
    ];

    let current = 0;
    let score = 0;

    function loadQuestion() {
            if (current >= questions.length) {
        document.getElementById("question").innerText = "Quiz Complete!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = "Score: " + score + "/" + questions.length;
    return;
            }

    document.getElementById("question").innerText = questions[current].q;

    let optionsHTML = "";

    for (let i = 0; i < questions[current].options.length; i++) {
        optionsHTML += "<button onclick='checkAnswer(" + i + ")'>" +
        questions[current].options[i] +
        "</button>";
            }

    document.getElementById("options").innerHTML = optionsHTML;
    document.getElementById("result").innerText = "";
        }

    function checkAnswer(choice) {
            if (choice === questions[current].answer) {
        score++;
    document.getElementById("result").innerText = "Correct!";
            } else {
        document.getElementById("result").innerText = "Incorrect!";
            }

    current++;
    setTimeout(loadQuestion, 1500);
        }

    loadQuestion();
