const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{
const values = getrandomValue()
    document.body.style.backgroundColor = colors[values];
    color.textContent = colors[values]
})


function getrandomValue(){
    return Math.floor(Math.random() * colors.length)
}