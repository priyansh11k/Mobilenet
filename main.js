function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , Modelloaded )
}
function preload(){
}

function Modelloaded(){
console.log("Model is loaded");
}

function draw(){
image(video , 0 , 0 , 300 ,300 );
classifier.classify(video,gotResults);
}
var preresults = "";

function gotResults(error , results){
  if(error){
    console.error(error);
  }

else{

  if((results[0].confidence > 0.5) && (preresults != results[0].label)){
  console.log(results);
  preresults = results[0].label;

  //writting code for speaking the result

   var synth = window.speechSynthesis;
   speakData = "object detected is " + results[0].label;
   var utter = new SpeechSynthesisUtterance(speakData);
   synth.speak(utter);

   //displaying the result

   document.getElementById("result_object").innerHTML = results[0].label;
   document.getElementById("result_acc").innerHTML = results[0].confidence.toFixed(2);
  }
}
}





