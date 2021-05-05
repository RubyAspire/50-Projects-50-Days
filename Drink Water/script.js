const litres = document.getElementById("litres");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const smallCups = document.querySelectorAll(".cup-small");

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => 
    {   
        highlightCups(idx);
    });
})

function highlightCups(index){
    if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index--;
    }

    smallCups.forEach((cup, idx) => {
        if(idx <= index)
        {
            cup.classList.add("full");
        }
        else
        {
            cup.classList.remove("full");
        }
    });

    updateBigCup();
}

function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length;
     
    const totalCups = smallCups.length;
    

    if(fullCups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }
    else{
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 100}%`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = "hidden";
        remained.style.height = 0
    }else{
        remained.style.visibility = "visible";
        litres.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}