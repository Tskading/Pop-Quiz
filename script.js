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
var label = document.querySelector(".label")
var initials = document.querySelector(".initials");
var submit = document.querySelector(".submit");
var initialsValue;



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
        if (seconds <= 0){
        // This is where I want to say that the game is over.  Then prompt for highscore entry data.
                clearTimeout(timer);
                enterInitials();
                testText.setAttribute("style", "display:none");
                testText2.setAttribute("style", "display:none");
                testText3.setAttribute("style", "display:none");        
        }
        }, 1000);

        openingText.setAttribute("style", "display:none");
        hopperGif.setAttribute("style", "display:none");
        startButton.setAttribute("style", "display:none");

        quizQuestion1();

}

        startButton.addEventListener("click", startQuiz);

        function quizQuestion1() {

                testText.setAttribute("style", "visibility:visible text-align:center" );

                testHeader.textContent = "What movie was the opening .gif from?";
                testButton1.textContent = "Easy Rider";
                testButton2.textContent = "Speed";
                testButton3.textContent = "Apocalypse Now";
                testButton4.textContent = "Blue Velvet";

                testButton1.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })
                
                testButton3.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })
                
                testButton4.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })

                // if user picks correct answer; move to next question
                        // if pick answer2 then hide 'quizQuestion1' and show 'quizQuestion2'

                testButton2.addEventListener("click", function(event) {
                        event.stopPropagation();
                        quizQuestion2();
                        testText.setAttribute("style", "display:none");
                });      
                
        }

        function quizQuestion2() {

                testText2.setAttribute("style", "visibility:visible");

                testHeader2.textContent = "What is the worst Dennis Hopper movie?";
                test2Button1.textContent = "Super Mario Bros.";
                test2Button2.textContent = "From Hell to Texas";
                test2Button3.textContent = "Rumble Fish";
                test2Button4.textContent = "Waterworld";

                test2Button1.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })
                
                test2Button2.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })
                
                test2Button3.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })

                test2Button4.addEventListener("click", function(event) {
                        event.stopPropagation();
                        quizQuestion3();
                        testText2.setAttribute("style", "display:none");
                });      

        }

        function quizQuestion3() {

                testText3.setAttribute("style", "visibility:visible");

                testHeader3.textContent = "Dennis Hopper narrates a song in a Gorillaz ablum.  Pick the name of that song:";
                test3Button1.textContent = "Fire Coming Out of the Monkeys Head";
                test3Button2.textContent = "Don't Get Lost in Heaven";
                test3Button3.textContent = "Kids with Guns";
                test3Button4.textContent = "Last Living Souls";

                test3Button2.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })
                
                test3Button3.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })
                
                test3Button4.addEventListener("click", function(event) {
                        seconds -= 5;                        
                })

                test3Button1.addEventListener("click", function(event) {
                        event.stopPropagation();                        
                        testText3.setAttribute("style", "display:none");
                        enterInitials();
                });      
        }

       
        // STOP timer; send timer value to highscores; open dialogue box for initial entry
        function enterInitials() {
                clearTimeout(timer);
                entryForm.setAttribute("style", "visibility:visible");
                label.textContent = "Please enter your initials, you've got a high score!";
                
                

                
             localStorage.setItem("timer", JSON.stringify(seconds));
             
             entryForm.addEventListener("submit", function (event) { 
                     event.preventDefault();
                    initialsValue = initials.value;
                    localStorage.setItem("entryForm", JSON.stringify(initialsValue));

                    console.log(initialsValue);
                    console.log(initials);
                    console.log(seconds);
                    console.log(submit);

                    highScore.textContent = "High Score: " + initialsValue + " " + seconds;
              })

             

            
        }


       
