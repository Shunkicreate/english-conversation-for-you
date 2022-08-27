export const Speak = (SpeakText: string) => {
  if ("speechSynthesis" in window) {
    // 発言を設定
    let DevidedSpeakText: string[] = SpeakText.split('.')
    for (let i of DevidedSpeakText) {
      const uttr = new SpeechSynthesisUtterance();
      uttr.text = i;
      uttr.lang = 'en-US'
      window.speechSynthesis.speak(uttr);
    }
  } else {
    alert("Sorry. Your brouser can't speak.");
  }
};
