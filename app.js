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

function submitValue() {
   const pinShow = document.getElementById("pin-show").value;
   const displayNumber = document.getElementById("number-display").value;
   const notifyFailed = document.getElementById('notify-failed');
   const notifySuccess = document.getElementById('notify-success');
   if (pinShow == displayNumber) {
      notifyFailed.style.display = "none"
      notifySuccess.style.display = "block"
   }
   else{
      notifyFailed.style.display = "block"
      notifySuccess.style.display = "none"
   }

}