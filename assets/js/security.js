/* ================= MENU FUNCTIONS ================= */

/* Start phishing game */
function startPhishing() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    loadEmail();
}

/* Start link game */
function startLinks() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("linkGame").style.display = "block";
    loadLink();
}

/* ================= PHISHING GAME ================= */

/* List of emails for the quiz */
const emails = [
{
from: "security@paypa1.com",
subject: "URGENT: Account Suspended",
body: "Your account has been suspended. Click here to verify immediately.",
answer: "phishing",
explanation: "Fake domain (paypa1), urgency, and suspicious link."
},
{
from: "noreply@university.ac.uk",
subject: "Course Reminder",
body: "Reminder: Your lecture starts at 10AM tomorrow.",
answer: "safe",
explanation: "Legitimate domain and no suspicious links."
}
];

/* Track current question and score */
let index = 0;
let score = 0;

/* Load an email onto the page */
function loadEmail() {

    if (index >= emails.length) {
        endGame(score, emails.length);
        return;
    }

    let e = emails[index];

    document.getElementById("from").innerText = e.from;
    document.getElementById("subject").innerText = e.subject;
    document.getElementById("body").innerText = e.body;

    document.getElementById("feedback").innerText = "";
    document.getElementById("explanation").innerText = "";
}

/* Check user answer */
function answer(choice) {

    let correct = emails[index];

    if (choice === correct.answer) {
        score++;
        document.getElementById("feedback").innerText = "Correct";
    } else {
        document.getElementById("feedback").innerText = "Incorrect";
    }

    document.getElementById("explanation").innerText = correct.explanation;

    index++;

    setTimeout(loadEmail, 2000);
}

/* ================= LINK GAME ================= */

/* List of links for the quiz */
const links = [
{
url: "https://paypal.com",
answer: "safe",
explanation: "Correct domain name."
},
{
url: "https://paypa1-login-secure.ru",
answer: "phishing",
explanation: "Misspelling and suspicious domain."
},
{
url: "http://secure-amazon-login.net",
answer: "phishing",
explanation: "Fake domain and no HTTPS."
},
{
url: "https://google.com",
answer: "safe",
explanation: "Trusted domain."
}
];

/* Track link game progress */
let linkIndex = 0;
let linkScore = 0;

/* Load a link onto the page */
function loadLink() {

    if (linkIndex >= links.length) {
        endGame(linkScore, links.length);
        return;
    }

    let l = links[linkIndex];

    document.getElementById("linkText").innerText = l.url;

    document.getElementById("linkFeedback").innerText = "";
    document.getElementById("linkExplanation").innerText = "";
}

/* Check user answer for link game */
function answerLink(choice) {

    let correct = links[linkIndex];

    if (choice === correct.answer) {
        linkScore++;
        document.getElementById("linkFeedback").innerText = "Correct";
    } else {
        document.getElementById("linkFeedback").innerText = "Incorrect";
    }

    document.getElementById("linkExplanation").innerText = correct.explanation;

    linkIndex++;

    setTimeout(loadLink, 2000);
}

/* ================= END / RESET ================= */

/* Show final score */
function endGame(finalScoreValue, total) {

    document.getElementById("game").style.display = "none";
    document.getElementById("linkGame").style.display = "none";
    document.getElementById("end").style.display = "block";

    document.getElementById("finalScore").innerText = finalScoreValue + "/" + total;
}

/* Restart back to menu */
function restart() {
    index = 0;
    score = 0;
    linkIndex = 0;
    linkScore = 0;

    document.getElementById("menu").style.display = "block";
    document.getElementById("end").style.display = "none";
}