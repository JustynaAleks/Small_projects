const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');
let fontSize = 36


const increase = () => {
    if (fontSize >= 56) return
    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
}

const decrease = () => {
    if (fontSize <= 21) return
    fontSize -=5;
    p.style.fontSize = fontSize + 'px';
}

const changeColor = () => {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    p.style.color = `${color}`;
}

sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)
colorBtn.addEventListener('click', changeColor)