function initTest() {
    const startButtonEl = document.querySelector("button");
    const startContainerEl = document.getElementById("start-container");
    const test1ContainerEl = document.getElementById("test1-container");

    startButtonEl.setAttribute("class", "btn btn-success btn-lg");

    function startTest() {
        startContainerEl.setAttribute("class", "container d-none");
        test1ContainerEl.setAttribute("class", "container");

        let userSelection = [];
        let answers = ["wrong", "correct"]

        const test1ButtonEls = document.querySelectorAll(".test1-button-js");
        // be sure to eventually clear the array
        test1ButtonEls.forEach(function(test1ButtonEl) {
            test1ButtonEl.addEventListener("click", function() {
                console.log(test1ButtonEl);
                userSelection.push(test1ButtonEl);

                userSelection = [];
            });
        });

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