let abre = document.querySelector(".abre")
let campo = document.querySelector(".campo")
let fecha = document.querySelector(".fecha")


abre.addEventListener("click", () => {
    campo.classList.add("ativo")
})

fecha.addEventListener("click", () => {
    campo.classList.remove("ativo")
})