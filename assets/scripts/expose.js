// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
   const selectHorn = document.getElementById('horn-select');
   const hornImg = document.querySelector('img');
   const audioElement = document.querySelector('audio');

   const volSlider = document.getElementById('volume');
   const volImg = document.querySelector('#volume-controls img');

   // img changes according to what is picked, same for audio 
   selectHorn.addEventListener('change', function() {
      if (selectHorn.value === 'air-horn') {
         hornImg.src = 'assets/images/air-horn.svg';
         audioElement.src = 'assets/audio/air-horn.mp3';
      }
      else if (selectHorn.value === 'car-horn') {
         hornImg.src = 'assets/images/car-horn.svg';
         audioElement.src = 'assets/audio/car-horn.mp3';
      }
      else if (selectHorn.value === 'party-horn') {
         hornImg.src = 'assets/images/party-horn.svg';
         audioElement.src = 'assets/audio/party-horn.mp3';
      }
   });

   // vol change
   volSlider.addEventListener('input',function () {
      const vol = volSlider.value;
      audioElement.volume = vol/100;

      // display volume image for each selected volume 
      if (vol == 0) {
         volImg.src = 'assets/icons/volume-level-0.svg';
      }
      else if (vol < 33) {
         volImg.src = 'assets/icons/volume-level-1.svg';
      }
      else if (vol < 67) {
         volImg.src = 'assets/icons/volume-level-2.svg';
      }
      else {
         volImg.src = 'assets/icons/volume-level-3.svg';
      }

   }); 

   // sound and confetti 
   const playButton = document.querySelector('button');
   playButton.addEventListener('click', function() {
      audioElement.play(); 

      // if party horn is selected confetti pops out 
      if (selectHorn.value === 'party-horn') {
         new JSConfetti().addConfetti(); 
      }
   });
  
}