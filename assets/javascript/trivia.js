
$(document).ready(function() {


    //GLOBAL VARIABLES
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var noAnswer = 0;
    var nextIndex= 0;
    var timeRemaining = 0;
    var timer;

    //HIDES QUESTIONS BEFORE YOU CLICK START
    $("#maingame, #endScreen").hide();
    $('#A, #B, #C').click(answerCheck);
    $("#StartButton").click(init);


    //QUESTIONS
    var questions = [{

            question: "Who was the first round pick in the 1996 Draft?",
            choices: ["A: Allen Iverson ", "B: Kobe Bryant ", "C: Michael Jordan"],
            answer: "A"
        },

        {
            question: "Who scored the most points in a single game in NBA history?",
            choices: ["A: Michael Jordan ", "B: Wilt Chamberlain ", "C: Yao Ming"],
            answer: "B"
        },

        {
            question: "How many teams are there in the NBA?",
            choices: ["A: 28 ", "B: 32 ", "C: 30"],
            answer: "C"

        },
        {
            question: "What is the name of the Atlanta Hawk's Mascot?",
            choices: ["A: Smeagle the Eagle ", "B: Harry the Hawk ", "C: Birdman"],
            answer: "B"

        }
    ];
    function nextQuestion() {
            if (questions.length === nextIndex) {
                //game over
                $("#maingame").hide();
                $("#endScreen").show();
            }
            else {
            startTimer();
            $("#question").html(questions[nextIndex].question)
            $("#answers").html(questions[nextIndex].choices)
            }
    }

    // Time starts counting down, 30 seconds to answer question
    function incrementTimer() {
        timer = setTimeout(function() {
            $('#time').text(timeRemaining);
            if (timeRemaining <= 0) {
                noAnswer++;
                $(".noguess").html(noAnswer);
                return;
            } else {
                timeRemaining = timeRemaining - 1;
                incrementTimer();
            }
        }, 1000);
    }

    function startTimer() {
        clearTimeout(timer);
        timeRemaining = 24; // in seconds
        incrementTimer();
    }


    function answerCheck() {
        var userGuess = $(this).html();

        if (userGuess === questions[nextIndex].answer) {
            correctAnswer++;
            nextIndex++;
            $('.wins').html(correctAnswer);
            nextQuestion();
            }
         else {
            wrongAnswer++;
            nextIndex++;
            $('.losses').html(wrongAnswer);
            nextQuestion();
            }
    }

    //Game on start, display questions
    function init() {
        $("#startScreen").hide();
        $("#maingame").show();
        startTimer();
        $("#question").append(questions[0].question)
        $("#answers").append(questions[0].choices)
    }
});