const BG = document.querySelector(".BG");
const loadText = document.querySelector(".load-text");

let load = 0;

//need to create a variable to clear interval
let timer = setInterval(blurring, 10);//30 = 30ms

function blurring(){
    load++;
    if(load > 99){
        clearInterval(timer);
    }

    loadText.innerHTML = load + "%";
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    BG.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}