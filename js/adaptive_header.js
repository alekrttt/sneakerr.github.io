const hamb = document.querySelector("#hamb");
const pop = document.querySelector("#pop");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    pop.classList.toggle("open");
    renderPop();
}

function renderPop() {
    pop.appendChild(menu);
}