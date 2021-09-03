function on() {
  const square = 'n' + number;
  const element = document.getElementById(square);
  element.classList.toggle('on');
}
function off() {
  const previous = 'n' + (number - 1);
  const element = document.getElementById(previous);
  element.classList.toggle('on');
}
let number = 1
function move() {
  setTimeout(() => {
    on();
    if (number > 1) {
        off();
    }
    number +=1;
    move();
}, 500);
}