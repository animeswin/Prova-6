document.addEventListener("DOMContentLoaded", () =>{
    const peso_input = document.querySelector("#peso")
    const altura_input = document.querySelector("#altura")
    const botao = document.querySelector("#botao")

    botao.addEventListener("click", () =>{
        const peso = Number(peso_input.value)
        const altura = Number(altura_input.value)

        if(peso === 0 && altura === 0){
            alert("Insira valores válidos")
            return
        }
        const imc = peso / (altura ** 2)
        alert(`Seu IMC é ${imc.toFixed(2)}`)
    })
})