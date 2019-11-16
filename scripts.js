function initTest() {
    const startButtonEl = document.querySelector("button");
    const startContainerEl = document.getElementById("start-container");
    const testContainerEl = document.getElementById("test-container");

    startButtonEl.setAttribute("class", "btn btn-success btn-lg");

    function startTest() {
        // startButtonEl.setAttribute("class", "btn btn-success btn-lg");
        startContainerEl.setAttribute("class", "container d-none");
        testContainerEl.setAttribute("class", "container");


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

// 10. At end user can click on "Go Back to restart test"