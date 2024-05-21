// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   const synth = window.speechSynthesis;

   const voiceSelect = document.getElementById('voice-select'); // voices dropdown
   const spokenText = document.getElementById('text-to-speak'); 
   const speechButton = document.querySelector('button'); // press to talk button
   const faceImg = document.querySelector('img');

   // get voice list dropdown
   function populateVoices() {
      const voices = synth.getVoices(); // available voices
      voices.forEach(function(voice, idx) { // add available voices to dropdown
         const option = document.createElement('option');
         option.textContent = voice.name + ' (' + voice.lang +
         ')';
         option.value = idx; 
         voiceSelect.appendChild(option);
      });

   }
   
   populateVoices(); 

   if (typeof synth.onvoiceschanged !== 'undefined') {
      synth.onvoiceschanged = populateVoices;
   }

   // for press to talk button
   speechButton.addEventListener('click', function() {
      const utterance = new SpeechSynthesisUtterance(spokenText.value);
      const voiceIdx = voiceSelect.value; 

      if (voiceIdx !== 'select') {
         utterance.voice = synth.getVoices()[voiceIdx];
      }

      utterance.onstart = function() {
         faceImg.src = "assets/images/smiling-open.png";
      }

      utterance.onend = function() {
         faceImg.src = "assets/images/smiling.png";
      }

      // speak text 
      synth.speak(utterance);
   });

}