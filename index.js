let element = document.getElementById('status');
let counter = document.getElementById("show");

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

// countdown(1);
