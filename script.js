// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const timeLimit = 90 // number of seconds to play the full game

//Global Variables
var pattern = [5, 2, 4, 1, 1, 2, 6, 3];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;
var audio = document.getElementById('audio1');

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    clueHoldTime = 1000;
    pattern = generatePattern();
    strikes = 0;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
  startCountDown();
}

//generates random solution pattern
function generatePattern() {
  for(let i=0;i < 2;i++){
    pattern[i] = Math.floor(Math.random() * 6 + 1);
  }
  console.log(pattern);
  return pattern;
}

function stopGame(){
    //stop the game
    gamePlaying = false;
    document.getElementById("timer").value = 0;
    for(let i = 1; i <= strikes; i++) {
      document.getElementById("strike"+i).classList.remove("mistake");
    }
  
  // swap the Stop and Start buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("image"+btn).classList.remove("hidden");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("image"+btn).classList.add("hidden");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 105;
  console.log(clueHoldTime);
}

function startCountDown() {
  var timeLeft = timeLimit;
  var downloadTimer = setInterval(function() {
    if (gamePlaying) {
      if (timeLeft <= 0) {
        clearInterval(downloadTimer);
        stopGame();
        alert("You ran out of time! You lose!")
      }
      document.getElementById("timer").value = timeLimit - timeLeft
      timeLeft -= 1;
    } else {
      clearInterval(downloadTimer);
    }
  }, 1000);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length -1){
        winGame();
      } else {
        progress ++;
        playClueSequence();
      }
    
    }else{
        guessCounter ++;
    } 
  
  }else {
    strikes ++;
    document.getElementById("strike"+strikes).classList.add("mistake");
    if (strikes == 3)
      loseGame();
  }
}

//Modified to work with animal noises
function playTone(btn,len){ 
  audio = document.getElementById('audio'+btn);
  audio.play();
  setTimeout(function(){
    stopTone(btn)
  },len)
}

//Modified to work with animal noises
function startTone(btn){
  document.getElementById("image"+btn).classList.remove("hidden");
  audio = document.getElementById('audio'+btn);
  audio.play();
}

//Modified to work with animal noises
function stopTone(btn){
  document.getElementById("image"+btn).classList.add("hidden");
  audio.pause();
  audio.currentTime = 0;
  tonePlaying = false
}

