var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()

function Start(){
    document.getElementById("textbox").innerHTML = " "
    Recognition.start()

}
Recognition.onresult = function(event){
    console.log(event)
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    console.log(content)
}