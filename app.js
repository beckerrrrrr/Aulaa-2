    'use strict'

    const forma1 = document.getElementById('forma1')
    const forma2 = document.getElementById('forma2')
    const forma3 = document.getElementById('forma3')
    const forma4 = document.getElementById('forma4')
    const forma5 = document.getElementById('forma5')
    const forma6 = document.getElementById('forma6')
    const forma7 = document.getElementById('forma7')
    const forma8 = document.getElementById('forma8')

    function mudarCor(){
        forma1.classList.toggle('vermelho')
    }

    function mudarForma(){
        forma2.classList.toggle('circulo')
    }

    function mudarTamanho(){
        forma3.classList.toggle('quadrado')
    }
    function mudarRotacao(){
        forma4.classList.toggle('quadrado2')
    }
    function mudarImagem(){
        forma5.classList.toggle('foto')
    }
    function sumirQuadrado(){
        forma6.classList.toggle('desaparecer')
    }
    function quadradoInverter(){
        forma7.classList.toggle('lugar')
    }
    function mudarOpacidade(){
        forma8.classList.toggle('opacidade')
    }

    forma1.addEventListener('click', mudarCor)
    forma2.addEventListener('click', mudarForma)
    forma3.addEventListener('click', mudarTamanho)
    forma4.addEventListener('click', mudarRotacao)
    forma5.addEventListener('click', mudarImagem)
    forma6.addEventListener('click', sumirQuadrado)
    forma7.addEventListener('click', quadradoInverter)
    forma8.addEventListener('click', mudarOpacidade)