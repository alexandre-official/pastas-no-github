const p = window.document.querySelector('p')
function criarContador() {
    const bloco_de_contagem = window.document.createElement('div')
    bloco_de_contagem.classList.add('bloco-de-contagem')
    window.document.body.appendChild(bloco_de_contagem)

    const visualizador = window.document.createElement('div')
    visualizador.classList.add('visualizador')
    bloco_de_contagem.appendChild(visualizador)

    //ESTUDAR ESSA PARTE DEPOIS
    visualizador.setAttribute('contenteditable', 'true')

    visualizador.addEventListener('blur', () => {
        const valorDigitado = parseInt(visualizador.innerText)
        if (!isNaN(valorDigitado)) {
            numContador = valorDigitado
        } else {
            visualizador.innerText = numContador // Se o valor for inválido, reseta
        }
    })
    //ESTUDAR ESSA PARTE DEPOIS


    const contador = window.document.createElement('div')
    contador.classList.add('contador')
    bloco_de_contagem.appendChild(contador)

    //seta pra cima
    const seta_cima = window.document.createElement('div')
    seta_cima.classList.add('seta')
    seta_cima.classList.add('seta-cima')
    contador.appendChild(seta_cima)
    //seta pra baixo
    const seta_baixo = window.document.createElement('div')
    seta_baixo.classList.add('seta')
    seta_baixo.classList.add('seta-baixo')
    contador.appendChild(seta_baixo)
    //--------
    let numContador = 0
    seta_cima.addEventListener('click', maisNum)
    function maisNum() {
        numContador++
        visualizador.innerHTML = numContador
    }
    seta_baixo.addEventListener('click', menosNum)
    function menosNum() {
        if(numContador > 0) {
            numContador--
            visualizador.innerHTML = numContador
        }
    }
}
criarContador()
criarContador()
criarContador()