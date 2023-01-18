// Minha Solução

// function numeroAleatorioEntre(min, max) {
//     if(min > max) [min, max] = [max, min]
//     let fator = max - min + 1
//     return Math.floor(fator * Math.random() + min)
// }

// function pular(elemento, elementoRelativo) {
//     const topRelativo = elementoRelativo.getBoundingClientRect().top
//     const top = elemento.getBoundingClientRect().top
//     const wmFlappy = document.querySelector('[wm-flappy]')
//     if(wmFlappy.hasAttribute('parada')) {
//         return 0
//     } else if(topRelativo < top && top - 50 > topRelativo) {
//         elemento.style.top = `${top - topRelativo - 40}px`
//     } else {
//         elemento.style.top = `0px`
//     }
// }

// function cairPraSempre(elemento, elementoRelativo) {
//     const bottomRelativo = elementoRelativo.getBoundingClientRect().bottom
//     const topRelativo = elementoRelativo.getBoundingClientRect().top
//     const wmFlappy = document.querySelector('[wm-flappy]')
//     const interval = setInterval(() => {
//         const top = elemento.getBoundingClientRect().top
//         const bottom = elemento.getBoundingClientRect().bottom
//         if(wmFlappy.hasAttribute('parada')) {
//             clearInterval(interval)
//             return 0
//         } else if(bottom < bottomRelativo) {
//             elemento.style.top = `${top - topRelativo + 1}px`
//         }
//     }, 8)
// }

// function gerarColunas() {
//     const wmFlappy = document.querySelector('[wm-flappy]')
//     if(!wmFlappy.hasAttribute('parada')) {
//         const coluna = document.createElement('div')
//         const basePonta1 = document.createElement('div')
//         const basePonta2 = document.createElement('div')
//         const base1 = document.createElement('div')
//         const base2 = document.createElement('div')
//         const ponta1 = document.createElement('div')
//         const ponta2 = document.createElement('div')
//         const contagem = document.querySelector('[contagem]')
//         const numeroAleatorio = numeroAleatorioEntre(0, 260)
//         coluna.setAttribute('coluna', '')
//         basePonta1.setAttribute('basePonta', '')
//         basePonta2.setAttribute('basePonta', '')
//         base1.setAttribute('base', '')
//         base2.setAttribute('base', '')
//         base2.setAttribute('inverte', '')
//         ponta1.setAttribute('ponta', '')
//         ponta2.setAttribute('ponta', '')
//         wmFlappy.appendChild(coluna)
//         wmFlappy.removeChild(contagem)
//         coluna.appendChild(basePonta1)
//         coluna.appendChild(basePonta2)
//         basePonta1.appendChild(base1)
//         basePonta1.appendChild(ponta1)
//         basePonta2.appendChild(ponta2)
//         basePonta2.appendChild(base2)
//         wmFlappy.appendChild(contagem)
        
//         base1.style.height = `${30 + numeroAleatorio}px`
//         base2.style.height = `${30 + (260 - numeroAleatorio)}px`
//         if(!wmFlappy.hasAttribute('parada')){
//             moverElemento(coluna, 800, -120, wmFlappy)
//             setTimeout(gerarColunas, 2500)
//         } else {
//             return 0
//         }
//     } else {
//         return 0
//     }
// }

// function moverElemento(elemento, leftInicial, leftFinal, elementoPai) {
//     if(leftInicial > leftFinal) {
//         let contador = leftInicial
//         const interval = setInterval(() => {
//             const wmFlappy = document.querySelector('[wm-flappy]')
//             elemento.style.left = `${contador - 1}px`
//             contador--
//             if(wmFlappy.hasAttribute('parada')) {
//                 clearInterval(interval)
//                 return 0
//             } else if(contador <= leftFinal) {
//                 clearInterval(interval)
//                 elementoPai.removeChild(elemento)
//             } 
//         }, 7)
//     } else {
//         let contador = leftInicial
//         const interval = setInterval(() => {
//             const wmFlappy = document.querySelector('[wm-flappy]')
//             elemento.style.left = `${contador + 1}px`
//             contador++
//             if(wmFlappy.hasAttribute('parada')) {
//                 clearInterval(interval)
//                 return 0
//             } else if(contador >= leftFinal) {
//                 clearInterval(interval)
//                 elementoPai.removeChild(elemento)
//             }
//         }, 7)
//     }
// }

// function contagem() {
//     const contagem = document.querySelector('[contagem]')
//     const wmFlappy = document.querySelector('[wm-flappy]')
//     let contador = 1
//     const interval = setInterval(() => {
//         if(wmFlappy.hasAttribute('parada')) {
//             clearInterval(interval)
//             return 0
//         } else {
//             contagem.innerHTML = `${contador}`
//             contador++
//         }
//     }, 2500)
// }

// function colisao() {
//     const flappy = document.getElementById('flappy-bird')
//     const wmFlappy = document.querySelector('[wm-flappy]')
//     const interval = setInterval(() => {
//         const colunas = document.querySelectorAll('[coluna]')
//         for(x of colunas) {
//             documentHtml = document.querySelector('html')
//             documentWidth = (documentHtml.getBoundingClientRect().width - 800) / 2
//             leftColuna = x.getBoundingClientRect().left - documentWidth
//             if(252.215 < leftColuna && leftColuna < 427.795) {
//                 const elemelemntosBase = x.querySelectorAll('[base]')
//                 const elemelemntosPonta = x.querySelectorAll('[ponta]')
//                 const altura1 = elemelemntosBase[0].getBoundingClientRect().height
//                 const altura2 = elemelemntosBase[1].getBoundingClientRect().height
//                 const altura3 = elemelemntosPonta[0].getBoundingClientRect().height
//                 const altura4 = elemelemntosPonta[1].getBoundingClientRect().height
//                 const topFlappy = flappy.getBoundingClientRect().top - 100
//                 const heighFlappy = flappy.getBoundingClientRect().height
//                 if(altura1 + altura3 > topFlappy || (500 - (altura2 + altura4 + heighFlappy)) < topFlappy) {
//                     wmFlappy.setAttribute('parada', '')
//                     document.onkeydown = () => {
//                         iniciar()
//                     }
//                     clearInterval(interval)
//                     return 0
//                 }
//             }
//         }
//     }, 10)
// }


// function iniciar() {
//     const wmFlappy = document.querySelector('[wm-flappy]')
//     const contagem1 = document.querySelector('[contagem]')
//     const colunas = wmFlappy.querySelectorAll('[coluna]')
//     for(x of colunas) {
//         wmFlappy.removeChild(x)
//     }
//     wmFlappy.removeAttribute('parada')
//     gerarColunas()
//     contagem1.innerHTML = '0'
//     setTimeout(contagem, 1100)
//     const div = document.querySelector('div')
//     const flappy = document.getElementById('flappy-bird')
//     document.onkeydown = () => pular(flappy, div)
//     cairPraSempre(flappy, div)
//     colisao()
// }
// iniciar()

// Solução do professor

function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    this.setAltura = altura => corpo.style.height = `${altura}px`
}
// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth
    this.sortearAbertura()
    this.setX(x)
}
// const b = new ParDeBarreiras(700, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}
function Passaro(alturaJogo) {
    let voando = false
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo / 2)
}
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}
// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)
function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()
    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}
function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}
function FlappyBird() {
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth
    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()
            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}
new FlappyBird().start()