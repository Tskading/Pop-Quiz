// Need a start button

// That starts a timer

// And presents a set of multiple choice questions

// When correct move to next question

// When incorrect alert user and subtract time from counter

// Bring up score when timer is zero or all questions are answered

// Allow user to input initials and save highscores

///////////////////////////////////////////////////////////////////////////////////////////
// html keys
var header = document.querySelector(".header");
var displayTime = document.querySelector(".displayTime");
var containerHighScore = document.querySelector(".containerHighScore");
var highScore = document.querySelector(".highScore");
var popQuiz = document.querySelector(".popQuiz");
var hopperGif = document.querySelector(".hopper");
var openingText = document.querySelector(".openingText");
var startButton = document.querySelector(".startButton");
var timeStartButton = document.querySelector(".timeStartButton");
// keys for question 1
var testHeader = document.querySelector(".testheader");
var testButton1 = document.querySelector(".testbutton1");
var testButton2 = document.querySelector(".testbutton2");
var testButton3 = document.querySelector(".testbutton3");
var testButton4 = document.querySelector(".testbutton4");
// keys for question 2
var testHeader2 = document.querySelector(".testheader2");
var test2Button1 = document.querySelector(".test2button1");
var test2Button2 = document.querySelector(".test2button2");
var test2Button3 = document.querySelector(".test2button3");
var test2Button4 = document.querySelector(".test2button4");
// keys for question 3
var testHeader3 = document.querySelector(".testheader3");
var test3Button1 = document.querySelector(".test3button1");
var test3Button2 = document.querySelector(".test3button2");
var test3Button3 = document.querySelector(".test3button3");
var test3Button4 = document.querySelector(".test3button4");
// keys for question divs 
var testText = document.querySelector(".testtext");
var testText2 = document.querySelector(".testtext2");
var testText3 = document.querySelector(".testtext3");
// timer keys
var timer;
var seconds = 60;
// initial form entery keys
var entryForm = document.querySelector(".entryForm");

// Hides question data unitl function called
testText.setAttribute("style", "display:none");
testText2.setAttribute("style", "display:none");
testText3.setAttribute("style", "display:none");
entryForm.setAttribute("style", "display:none");






// Starts the quiz timer and hides the base page elements
var startQuiz = function() {
        timer = setInterval(function() {
        seconds--;
        
        displayTime.textContent = seconds;
        if (seconds==0){
        // This is where I want to say that the game is over.  Then prompt for highscore entry data.
                clearTimeout(timer);
                enterInitials();
        }
        }, 1000);

        openingText.setAttribute("style", "display:none");
        hopperGif.setAttribute("style", "display:none");
        startButton.setAttribute("style", "display:none");

        quizQuestion1();

}

        startButton.addEventListener("click", startQuiz);

        function quizQuestion1() {

                testText.setAttribute("style", "visibility:visible");

                testHeader.textContent = "question one";
                testButton1.textContent = "answer1";
                testButton2.textContent = "answer2";
                testButton3.textContent = "answer3";
                testButton4.textContent = "answer4";

                // if user picks correct answer; move to next question
                        // if pick answer2 then hide 'quizQuestion1' and show 'quizQuestion2'

                testButton2.addEventListener("click", function(event) {
                        event.stopPropagation();
                        quizQuestion2();
                        testText.setAttribute("style", "display:none");
                });      
                // if user picks incorrect answer: subtract 5 seconds from 'seconds'
                        // 'if else' subtract 5 from seconds
        }

        function quizQuestion2() {

                testText2.setAttribute("style", "visibility:visible");

                testHeader2.textContent = "question two";
                test2Button1.textContent = "answer1";
                test2Button2.textContent = "answer2";
                test2Button3.textContent = "answer3";
                test2Button4.textContent = "answer4";

                test2Button4.addEventListener("click", function(event) {
                        event.stopPropagation();
                        quizQuestion3();
                        testText2.setAttribute("style", "display:none");
                });      

        }

        function quizQuestion3() {

                testText3.setAttribute("style", "visibility:visible");

                testHeader3.textContent = "question three";
                test3Button1.textContent = "answer1";
                test3Button2.textContent = "answer2";
                test3Button3.textContent = "answer3";
                test3Button4.textContent = "answer4";

                test3Button1.addEventListener("click", function(event) {
                        event.stopPropagation();                        
                        testText3.setAttribute("style", "display:none");
                        enterInitials();
                });      
        }

        
        function enterInitials() {
                clearTimeout(timer)
                entryForm.setAttribute("style", "visibility:visible");
                // STOP timer; send timer value to highscores; open dialogue box for initial entry
             localStorage.setItem("timer", JSON.stringify(seconds));
             highScore.textContent = "High Score " +  + seconds;
        }