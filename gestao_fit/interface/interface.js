function addH1(t) {
    const h1 = window.document.createElement('h1')
    h1.innerHTML = t
    window.document.body.appendChild(h1)
}
addH1('Treino braço')
let id_check
function addCheck(t) {
    function criarCheck() {
        //criar bloco de verificacao
        const check_block = window.document.createElement('div')
        check_block.classList.add('check-block')
        window.document.body.appendChild(check_block)
        //criar check
        const check = window.document.createElement('div')
        check.classList.add('check')
        check_block.appendChild(check)
        //criar texto
        const texto = window.document.createElement('p')
        texto.innerHTML = t
        check_block.appendChild(texto)
        id_check = check_block
        //criar eventos check
        function eventosCheck() {
            let check_tocado = false
            check.addEventListener('click', marcarOuDesmarcarCheck)
            function marcarOuDesmarcarCheck() {
                if(!check_tocado) {
                    check.classList.add('check-marcado')
                    texto.classList.add('p-marcado')
                    check_tocado = true
                } else {
                    check.classList.remove('check-marcado')
                    texto.classList.remove('p-marcado')
                    check_tocado = false
                }
            }
        }
        eventosCheck()
    }
    criarCheck()
}
let id_contador
function addContador() {
    function criarContador() {
        //criar bloco
        const bloco_contagem = window.document.createElement('div')
        bloco_contagem.classList.add('contagem')
        id_check.appendChild(bloco_contagem)
        //criar visualizador de contagem
        const visualizador = window.document.createElement('div')
        visualizador.classList.add('visualizador')
        visualizador.innerHTML = 0
        bloco_contagem.appendChild(visualizador)
        //criar controle de contagem
        const contador = window.document.createElement('div')
        contador.classList.add('contador')
        bloco_contagem.appendChild(contador)
        //criar setas
        //cima
        const seta_cima = window.document.createElement('div')
        seta_cima.classList.add('seta')
        seta_cima.classList.add('seta-cima')
        contador.appendChild(seta_cima)
        //baixo
        const seta_baixo = window.document.createElement('div')
        seta_baixo.classList.add('seta')
        seta_baixo.classList.add('seta-baixo')
        contador.appendChild(seta_baixo)
        //contagem
        let contagem = 0
        function addEventoSetas() {
            seta_cima.addEventListener('click', maisNum)
            function maisNum() {
                contagem ++
                visualizador.innerHTML = contagem
            }
            seta_baixo.addEventListener('click', menosNum)
            function menosNum() {
                if(contagem > 0) {
                    contagem --
                    visualizador.innerHTML = contagem
                }
            }
        }
        addEventoSetas()
        id_contador = bloco_contagem
    }
    criarContador()
}
function addExercicio(t) {
    addCheck(t)
    addContador()
}
addExercicio('Supinoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
addExercicio('Supino')
addExercicio('Supino')
addExercicio('Supino')
addExercicio('Supino')
addExercicio('Supino')
addExercicio('Supino')
addExercicio('Supino')
/*
roupa que se regenera de desgaster, desbotamento e perda de tecido. Tecido vivo que pode mudar de cor de acordo com variacoes quimicas colocadas nele, materiais diferentes ou a exposicao solar, por exemplo. Ele cresce como se fosse um fungo ou algum outro organismo vivo, mas ele não desobedece os artesaos naturais, suas formas, cores e tamanho permanecer ate que alguem as mude. Ela podera ser estilizada no jogo
*/