let soat = document.querySelector("#hours");
let daqiqa = document.querySelector("#minute");
let soniya = document.querySelector("#second");

function time (){
let now = new Date();
soat.textContent = String(now.getHours()).padStart(2,  "0");
daqiqa.textContent = String(now.getMinutes()).padStart(2 , "0");
soniya.textContent = String(now.getSeconds()).padStart(2 , "0");



}
setInterval(time, 1000)

