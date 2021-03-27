const toggleBtn = document.querySelectorAll(".faq-toggle");

toggleBtn.forEach(button => 
    button.addEventListener("click",() =>{
        button.parentElement.classList.toggle("active");
}));