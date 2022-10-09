//pin-generate 
document.getElementById('pin-generate').addEventListener('click', function(){
   const pin = Math.round(Math.random()*100000)
   const pinShow = document.getElementById("pin-show");
   pinShow.value = pin;
})