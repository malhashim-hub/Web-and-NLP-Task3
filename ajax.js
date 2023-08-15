function stt(){
  // get output div reference
  var output = document.getElementById("output");
  // get action element reference
  var action = document.getElementById("action");
      // new speech recognition object
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
      var transcript = "";
      // This runs when the speech recognition service starts
      recognition.onstart = function() {
          action.innerHTML = "<small>listening, please speak...</small>";
      };
      
      recognition.onspeechend = function() {
          action.innerHTML = "<small>stopped listening</small>";
          recognition.stop();
      }
      document.getElementById("myButton").value = output;
      // This runs when the speech recognition service returns result
      recognition.onresult = function(event) {
          transcript = event.results[0][0].transcript;
          var confidence = event.results[0][0].confidence;
          output.innerHTML = transcript ;
          output.classList.remove("hide");
          $.ajax({
            type: 'POST',
            url: 'connect.php',
            data: { button: transcript },
            success: function(response) {
              // Handle the server response
              console.log(response);
            }
          });
          
      };
    
       // start recognition
       recognition.start();

}