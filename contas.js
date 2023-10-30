
const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


let numContas = 0 // declara e inicializa contador...
let valTotal = 0 //... e acumulador (variáveis globais)
let resposta = "" /// string com a resposta a ser exibida

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descrição = frm.inDescrição.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal = valTotal + valor 


    resposta = resposta + descrição + "- R$: " + valor.toFixed(2) + "\n"


    resp1.innerText = `${resposta}--------------`
    resp2.innerText = `${numContas} Contas(s) - total R$: ${valTotal.toFixed(2)}`

    frm.inDescrição.value = ""
    frm.inValor.value = ""
    frm.inDescrição.focus ()




)}
 
 