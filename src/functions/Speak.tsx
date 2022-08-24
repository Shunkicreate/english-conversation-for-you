export const Speak = (SpeacText: string) => {
  if ("speechSynthesis" in window) {
    // 発言を設定
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = SpeacText;
    uttr.lang = 'en-US';
    
    // 発言を再生
    window.speechSynthesis.speak(uttr);
  } else {
    alert("Sorry. Your brouser can't speak.");
  }
};
