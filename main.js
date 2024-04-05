function startClassification(){ navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5cQdwffxs/model.json",modelReady);
}
function modelReady(){
  classifier.classify(gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result").innerHTML="I can hear"+results[0].label;document.getElementById("acc").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(3)+" %";
  im1= document.getElementById("a1");
  im2= document.getElementById("a2");
  im3= document.getElementById("a3");
  im4= document.getElementById("a4");
  if(results[0].label=="clap"){ 
    document.getElementById("clap").style.backgroundColor="red";
    document.getElementById("bgnoise").style.backgroundColor="gray";
  }else if(results[0].label=="bell"){
    document.getElementById("bell").style.backgroundColor="orange";
    document.getElementById("clap").style.backgroundColor="gray";
    document.getElementById("bgnoise").style.backgroundColor="gray";

  }else if(results[0].label=="snap"){
    document.getElementById("snap").style.backgroundColor="yellow";
    document.getElementById("bell").style.backgroundColor="gray";
    document.getElementById("clap").style.backgroundColor="gray";
    document.getElementById("bgnoise").style.backgroundColor="gray";
  }else{
    document.getElementById("bgnoise").style.backgroundColor="green";
    document.getElementById("snap").style.backgroundColor="gray";
    document.getElementById("bell").style.backgroundColor="gray";
    document.getElementById("clap").style.backgroundColor="gray";
    }
    }
}