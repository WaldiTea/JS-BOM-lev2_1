const count = document.querySelector('#count');
const message = document.querySelector('.message');

let counter = 10;

let countdown = setInterval(() => {
  counter--;

  count.textContent = counter;

  if(counter === 0) {
    clearInterval(countdown);
    message.style.opacity = '0';
  }
},1000);