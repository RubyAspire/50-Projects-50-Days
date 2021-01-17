const circles = document.querySelectorAll(".circle");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const progress = document.getElementById("progress");

let currentIndex = 1;

btnNext.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= circles.length){
        currentIndex = circles.length;
    }

    update();
});

btnPrev.addEventListener('click', () => {
    currentIndex--;

    if(currentIndex <= 1){
        currentIndex = 1;
    }

    update();
});

function update(){
    circles.forEach((circle, index) => {
        if(index < currentIndex){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1)/(circles.length - 1))*100+"%";

    if(currentIndex === 1){
        btnPrev.disabled = true;
    }
    else if(currentIndex === circles.length){
        btnNext.disabled = true;
    }
    else{
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
}