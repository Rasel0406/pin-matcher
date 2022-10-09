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
document.getElementById('key-pad').addEventListener('click', function(event){
   const eventNumber = event.target.innerText
   const eventNumberShow = document.getElementById("number-display");
   eventNumberShow.value = eventNumber;
   
})