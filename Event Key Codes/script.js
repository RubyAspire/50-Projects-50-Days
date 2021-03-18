const insert = document.getElementById("insert");

//Window is the top level object in the browser
window.addEventListener("keydown", (e) =>{
    insert.innerHTML = 
    `
    <div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode(Deprecated)</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    `;
});