let num = document.querySelector(".num");
let count = 0;

setInterval(() => {
  if (count < 75) {
    count++;
    num.innerHTML = count + "%";
  } else {
    clearInterval();
  }
}, 25);
