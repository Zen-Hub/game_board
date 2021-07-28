
const board = document.querySelector('#board');
const colors = ['Aqua', 'Cyan', 'Gold', 'OrangeRed', 'Fuchsia', 'Lime', 'RosyBrown', 'SteelBlue'];

const SQUARES_NUMBER = 500;

for(let i =0;i<SQUARES_NUMBER;i++){

    const square = document.createElement('div')
    square.classList.add('square');

    square.addEventListener('mouseover',()=>
    setColor('square'));

    square.addEventListener('mouseleave',()=>
    removeColor('square'));

    board.append(square);
}


