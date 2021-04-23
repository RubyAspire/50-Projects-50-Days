const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        console.log(target);
        const c = parseInt(counter.innerText);

        const increment = target / 100;
       
        if(c < target){
            counter.innerText = `${c + increment}`;   
            
            setTimeout(updateCounter)
        }
    }
    updateCounter();
});