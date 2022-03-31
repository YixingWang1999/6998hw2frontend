const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const status = document.getElementById("status"),
  output = document.getElementById("result");

startRecognition = () => {
  if (SpeechRecognition !== undefined) {
    let recognition = new SpeechRecognition();

    recognition.onstart = () => {
      status.innerHTML = `Start speaking`;
      output.classList.add("hide");
    };

    recognition.onspeechend = () => {
      status.innerHTML = `I stopped listening `;
      recognition.stop();
    };

    recognition.onresult = (result) => {
      output.classList.remove("hide");
      output.value = result.results[0][0].transcript;
    };

    recognition.start();
  } else {
    status.innerHTML = "sorry not supported 😭";
  }
};
