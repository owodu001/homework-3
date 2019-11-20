function initTest() {
    const startButtonEl = document.querySelector("button");
    const startContainerEl = document.getElementById("start-container");
    const allTheQuestionContainers = document.querySelectorAll(".question-container");

    const feedbackCorrect = document.getElementById("feedback-correct-container");
    const feedbackWrong = document.getElementById("feedback-wrong-container");

    const results = document.getElementById("results-container");
    const score = document.getElementById("score");
    const submit = document.getElementById("submit")
    const highScores = document.getElementById("high-score-container");
    let initialsInput = "";
    let inputBox = document.getElementById("userInitials");
    const restartButton = document.getElementById("restart-test");


    let currentQuestion = 0;
    let numberCorrect = 0;

    let topUserData = document.getElementById("top-user-data");

    const resetHighScores = document.getElementById("reset-high-score");

    submit.addEventListener("click", function() {

        results.setAttribute("class", "container d-none");
        highScores.setAttribute("class", "container");
        console.log(inputBox.value);
        initialsInput = inputBox.value;
        // l value = r value, r value being pushed/stored into l value

        inputBox.value = "";
        currentQuestion = 0;
        topUserData.innerHTML = initialsInput + " " + numberCorrect;
        numberCorrect = 0;
    });

    restartButton.addEventListener("click", function() {
        highScores.setAttribute("class", "container d-none");
        startContainerEl.setAttribute("class", "container");
        console.log("FFF");
    });

    resetHighScores.addEventListener("click", function() {
        topUserData.innerHTML = initialsInput + " " + numberCorrect;
    })

    startButtonEl.setAttribute("class", "btn btn-success btn-lg");

    function startTest() {
        startContainerEl.setAttribute("class", "container d-none");
        let firstQuestion = allTheQuestionContainers[0];
        firstQuestion.setAttribute("class", "question-container");

        function startTimer() {


            let timerEl = document.querySelector(".timer");
            time = 60;
            let myInterval = setInterval(function() {
                time = time - 1;
                let minutes = Math.floor(time / 60) % 60;
                let seconds = time % 60;
                if (minutes < 10) {
                    minutes = 0 + minutes;
                }
                if (seconds < 10) {
                    seconds = 0 + seconds;
                }
                timerEl.innerText = minutes + ":" + seconds;
                if (time <= 0) {
                    clearInterval(myInterval);
                }
            }, 1000)
        }
        startTimer()

        let userSelection = [];
        // let answers = [1, 2];

        const correct = document.querySelectorAll(".correct")

        const testButtonEls = document.querySelectorAll(".test-button-js");
        // be sure to eventually clear the array
        testButtonEls.forEach(function run(testButtonEl) {
            testButtonEl.addEventListener("click", function() {

                let classValue = testButtonEl.getAttribute("class");
                if (classValue.includes("correct")) {

                    numberCorrect++;

                    feedbackCorrect.setAttribute("class", "container");
                    feedbackWrong.setAttribute("class", "container d-none");



                } else {
                    feedbackCorrect.setAttribute("class", "container d-none");
                    feedbackWrong.setAttribute("class", "container");

                }

                function myTimeOutFunction() {
                    feedbackCorrect.setAttribute("class", "container d-none");
                    feedbackWrong.setAttribute("class", "container d-none");
                }
                setTimeout(myTimeOutFunction, 500);

                let currQuestionContainer = allTheQuestionContainers[currentQuestion];

                currQuestionContainer.setAttribute("class", "question-container d-none");

                currentQuestion++;
                const indexOfLastQuestContainer = allTheQuestionContainers.length - 1;

                if (currentQuestion <= indexOfLastQuestContainer) {
                    // console.log("current Question: " + currentQuestion);
                    currQuestionContainer = allTheQuestionContainers[currentQuestion];
                    currQuestionContainer.setAttribute("class", "question-container");

                    startTimer()
                    if (myInterval) {
                        clearInterval(myInterval);
                        myInterval = null;
                    }

                    // console.log(currQuestionContainer);
                } else {
                    // console.log("testtesttest");
                    // console.log(document.getElementById("results-container"));
                    results.setAttribute("class", "container");
                    score.innerHTML = numberCorrect;
                    timerEl.innerText = null;
                }

            });
        });
        let savedValue = getItem("highscores");
        let highScores = 0;
        if (savedValue) {
            highScores = savedValue;
        }
        localStorage.setItem('highscores', highScores);
    }
    startButtonEl.addEventListener("click", startTest);


}
initTest();



// Task:

// 1. Create start button. Add click function.

// 2. When user clicks start, start button disappears 

// 3. Show first question.

// 4. Get user answer/event.

// 5. Store user answer.

// 6 When user clicks answer, hide current answer go to next question.

// 7. When user clicks last question, hide current question then show score.

// 7.5. Add Timer.

// 8. If timer ends and user is not done, then user gets zero.

// 9. At end user can click "Clear Highscores" button.

// 10. At end user can click on "Go Back to restart test";