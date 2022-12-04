//create timer that counts down
var timeEl = document.querySelector(".timer")


//TIME SET TO COUNT DOWN
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create a message
      sendMessage();
    }

  }, 1000);
}

// Function to create message
function sendMessage() {
    timeEl.textContent = "TIMES UP!";
  
  }
  
  setTime();

//function generateQuiz()


function hidden (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}