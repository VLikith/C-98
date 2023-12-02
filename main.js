var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var hello;
function save()
{
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    var hello=event.results[0][0].transcript.toLowerCase();
    console.log(hello);
    if (hello=="samosa"){
        speak();
    }
}

function speak()
{
    var store=window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds";
    var speakout=new SpeechSynthesisUtterance(speakdata);
    store.speak(speakout);
    Webcam.attach(camera);
    setTimeout(function(){
        imgid="selfie1";
        takesnap();
        speakdata="Talking your next selfie in ten seconds";
        speakout=new SpeechSynthesisUtterance(speakdata);
        store.speak(speakout);
    },5000);
    setTimeout(function(){
        imgid="selfie2";
        takesnap();
        speakdata="Talking your next selfie in fifteen seconds";
        speakout=new SpeechSynthesisUtterance(speakdata);
        store.speak(speakout);
    },10000);
    setTimeout(function(){
        imgid="selfie3";
        takesnap();
    },15000);
}
Webcam.set({
    width: 400,
    height: 250,
    image_format: "png",
    png_qaulity: 90
});
var camera=document.getElementById("camera");

function takesnap()
{
    Webcam.snap(function(data_url){
        if(imgid=="selfie1"){
            document.getElementById("result1").innerHTML="<img id='img1' src='"+data_url+"'>";
        }
        if(imgid=="selfie2"){
            document.getElementById("result2").innerHTML="<img id='img2' src='"+data_url+"'>";
        }
        if(imgid=="selfie2"){
            document.getElementById("result3").innerHTML="<img id='img3' src='"+data_url+"'>";
        }
    });
}

function download()
{
    var link=document.getElementById("link");
    var image=document.getElementById("img1").src;
    link.href=image;
    link.click();
}
