// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
   const hornSelect = document.getElementById('horn-select');
   const volumeSlider = document.getElementById('volume');
   const playButton = document.querySelector('button');
   const audioElement = document.querySelector('audio');
   const volumeImg = document.querySelector('#volume-controls img');
   const hornImg = document.querySelector('main img');

   // img change 
   hornSelect.addEventListener('change', () => {
      if (hornSelect.value === 'air-horn') {
         hornImg.src = 'assets/images/air-horn.svg';
         audioElement.src = 'assets/audio/air-horn.mp3';
      }
      else if (hornSelect.value === 'car-horn') {
         hornImg.src = 'assets/images/car-horn.svg';
         audioElement.src = 'assets/audio/car-horn.mp3';
      }
      else if (hornSelect.value === 'party-horn') {
         hornImg.src = 'assets/images/party-horn.svg';
         audioElement.src = 'assets/audio/party-horn.mp3';
      }
   });

   // vol change
   volumeSlider.addEventListener('input', () => {
      const vol = volumeSlider.value;
      audioElement.vol = vol/100;

      if (vol == 0) {
         volumeImg.src = 'assets/icons/volume-level-0.svg';
      }
      else if (vol < 33) {
         volumeImg.src = 'assets/icons/volume-level-1.svg';
      }
      else if (vol < 67) {
         volumeImg.src = 'assets/icons/volume-level-2.svg';
      }
      else {
         volumeImg.src = 'assets/icons/volume-level-3.svg';
      }
   }); 

   // sound and confetti 
   playButton.addEventListener('click', () => {
      audioElement.play(); 

      if (hornSelect.value === 'party-horn') {
         new JSConfetti().addConfetti(); 
      }
   });
  
}