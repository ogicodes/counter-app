const count = document.querySelector('.count')
const add = document.querySelector('.add')
const resetCount = document.querySelector('.reset')
const sub = document.querySelector('.subtract')
const buttons = document.querySelector('.buttons')


// Event Listeners for buttons method of creating a counter using event delegation
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    count.innerHTML++;
    setColor()
  } else if (e.target.classList.contains('subtract')) {
    count.innerHTML--;
    setColor()
  } else if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    setColor()
  }
})

// Function to change color of count based on value
function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else if (count.innerHTML < 0) {
    count.style.color = 'red';
  } else {
    count.style.color = 'white';
  }
}



// Event Listeners for buttons method of creating a counter

// resetCount.addEventListener('click', () => {
//   count.innerHTML = 0;
// });

// add.addEventListener('click', () => {
//     count.innerHTML++;
// });

// sub.addEventListener('click', () => {
//     count.innerHTML--;
// });



