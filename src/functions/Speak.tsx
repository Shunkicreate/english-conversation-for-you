export const Speak = (SpeakText: string) => {
  if ("speechSynthesis" in window) {
    // 発言を設定
    const DevidedSpeakText: string[] = SpeakText.split('. ')
    console.log(DevidedSpeakText)
    // const uttr = new SpeechSynthesisUtterance();
    // uttr.text = SpeakText;
    // uttr.lang = 'en-US'


  //   uttr.onstart = () =>{
  //     resumeInfinity();
  //   }
  //   uttr.onend = function(event) {
  //     clearTimeout(timeoutResumeInfinity);
  // };
    
    // 発言を再生
    // window.speechSynthesis.speak(uttr);
  } else {
    alert("Sorry. Your brouser can't speak.");
  }
};
