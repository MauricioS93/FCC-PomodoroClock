let element = document.getElementById('status');
let counter = document.getElementById("show");
let add1 = document.querySelector(".add1");
let add2 = document.querySelector(".add2");
let minus1 = document.querySelector(".minus1");
let minus2 = document.querySelector(".minus2");
let setMin = document.querySelector(".setMin");
let setRest = document.querySelector(".setRest");

let currentMin = setMin.value + 1;
add1.addEventListener('click', ()=>{
  setMin.value = currentMin++;
  console.log(currentMin - 1);
});





function countdown(minutes) {
  let sec = 60;
  let min = minutes;

  function countMin() {    
    let currentMin = min-1;
    sec--;
    console.log(min, sec);
    counter.innerHTML = currentMin.toString() + ":" + (sec < 10 ? "0" : "") + String(sec);
    if(min === 1 && sec === 0){
      element.innerHTML = "Done, bye";
    } else if( sec > 0 ) {
      setTimeout(countMin, 100);
    } else {
      if(currentMin === 1){
        countdown(min-1);           
      }
    }
  }
  countMin();
}
