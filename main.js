x = 0;
y = 0;

draw_apple = "";

screen_width = 0;
screen_height = 0;

apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
var speak_data = ""

to_number = ""

var stat = document.getElementById("status")

function start()
{
  stat.innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  
  console.log(event); 
  
  content = event.results[0][0].transcript;
  
  stat.innerHTML = "The speech has been recognized: " + content; 
  
  to_number = Number(content);
  if (Number.isInteger(to_number)){
    stat.innerHTML = "Started drawing apple"
    draw_apple = "set"
  } else{
    stat.innerHTML = "The speech has not been recognized a number"
  }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 canvas = createCanvas(screen_width - 120, screen_height - 150)
}

function draw() {
  if(draw_apple == "set")
  {
    stat.innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for (let i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 700)
      y = Math.floor(Math.random() * 400)
      image(apple, x, y, 100, 100)
    }
    stat.innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = to_number + "Apples drawn";

    var utterThis = new SpeechSynthesisUtterance(speak_data);


    synth.speak(utterThis);
}

function preload(){
  apple = loadImage("apple.png")
}