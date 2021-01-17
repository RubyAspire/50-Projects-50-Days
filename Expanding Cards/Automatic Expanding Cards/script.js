const cards = document.querySelectorAll(".card");
var index =0;
var timer;

timer =setInterval(() => {
    cards.forEach(card => card.classList.remove('active'));
    if(index >= cards.length){index = 0;}
    cards[index].classList.add('active');
    index++;
}, 4000);