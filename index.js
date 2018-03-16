let element = document.getElementById('status');
let counter = document.getElementById("show");

function countdown(minutes) {
  let seconds = 60;
  let min = minutes;

  function countMin() {    
    let currentMin = min-1;
    seconds--;
    console.log(min, seconds);
    counter.innerHTML = currentMin.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if(min === 1 && seconds === 0){
      element.innerHTML = "Done, bye";
    } else if( seconds > 0 ) {
      setTimeout(countMin, 100);
    } else {
      if(currentMin === 1){
        countdown(min-1);           
      }
    }
  }
  countMin();
}

countdown(1);
