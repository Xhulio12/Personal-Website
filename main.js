const letters = "abcdefghijklmnopqrstuvwxyz";

var h1 = document.querySelector("h1");

let interval = null;

function type() {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      h1.innerText = h1.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return h1.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= h1.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    },15);
}

if (h1) {
    type();
}