const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
                        .split("")
                        .map((letter, idx) => `<span style="transition-delay:${idx * 35}ms">${letter}</span>`)//using theindex of each span we can creating an incrementing speed for the transition delay adding the cool wave effect.
                        .join("");
});