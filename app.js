//pin-generate 
function getPin() {
    const pin = Math.round(Math.random()*100000);
     const pinNumber = pin + '';
     if (pinNumber.length == 4) {
        return pinNumber;
     }
     else{
        return getPin();
    }
}
document.getElementById('pin-generate').addEventListener('click', function(){
   const pin = getPin();
   const pinShow = document.getElementById("pin-show");
   pinShow.value = pin;
})

// calculator 
document.getElementById('key-pad').addEventListener('click',function(Event){
   const targetNumber = Event.target.innerText;
   const displayNumber = document.getElementById("number-display");
   const previousNumber = displayNumber.value;
   if (isNaN(targetNumber)) {
      if (targetNumber == 'C') {
         displayNumber.value = '';
      }
   }
  else{
   displayNumber.value = previousNumber + targetNumber;
  }

})