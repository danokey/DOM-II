// Your code goes here

let contactButton = document.querySelectorAll('.nav-link')
contactButton[3].addEventListener('click', (event) => {
    alert('You Clicked the Contact Button!')},

contactButton[0].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue';

// contactButton[0].addEventListener('click', (event) => {
//     event.stopPropagation();
//     event.target.style.backgroundColor = 'brown';})
    
contactButton[1].addEventListener('keydown', (event) => {
    event.target.style.fontSize = '5rem';

})    

}))

// let mainHead = document.querySelector('h1')
// mainHead.addEventListener('scroll', (event) => {
//     event.target.style.color = 'green';
// })

let introButton = document.querySelector('.intro')
window.addEventListener('click', () => {
    introButton.style.backgroundColor = 'green';
})

window.addEventListener("keydown", event => {
    contactButton[1].style.fontSize = "5rem";
});

let mainHead = document.querySelector('h1')
window.addEventListener("scroll", event => {
    mainHead.style.fontSize = "10rem";
});

let destinationClass = document.querySelector('.btn')
destinationClass.addEventListener('dblclick', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'red';
})