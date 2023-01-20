
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttons = document.querySelector('.btn-hero')
const color = document.querySelector('.color');

buttons.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i<6;i++){
        hexColor +=hex[getrandomNumber()]
    }
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor
})

function getrandomNumber(){
    return Math.floor(Math.random() * hex.length);
}