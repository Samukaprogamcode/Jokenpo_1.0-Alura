document.getElementById("refinar").onclick = function(){



idade = prompt("Para jogar você precisa ser de maior, Favor informe sua idade no campo abaixo:");

if (idade<18){
    alert("Que pena! Você não tem idade suficiente 😢")
}

if (idade>=18){
    escolhadoJogador = prompt ("Digite: (1)-Pedra, (2)-Papel ou (3)-Tesoura ?")
escolhadoComputador= Math.floor(Math.random() *3) + 1;
}

if (escolhadoJogador==escolhadoComputador){
        alert("Empatou! Bora tentar de novo ?!")
}

//1-Pedra, 2-papel ou 3-tesoura//

if(escolhadoJogador==1){
    if(escolhadoComputador==2){
        alert("Computador Venceu 😢 Escolheu PAPEL, Tente Novamente!")
    }
    if(escolhadoComputador==3){
        alert("Você Venceu 🎉 O computador escolheu TESOURA... ")
    }
}

if(escolhadoJogador==2){
    if(escolhadoComputador==3){
        alert("Computador Venceu 😢 Escolheu TESOURA, Tente Novamente!")
    }
    if(escolhadoComputador==1){
        alert("Você Venceu 🎉 o Computador escolheu PEDRA... ")
    }
}
//1-Pedra, 2-papel ou 3-tesoura//

if(escolhadoJogador==3){
    if(escolhadoComputador==1){
        alert("Computador Venceu 😢 Escolheu PEDRA, Tente Novamente!")
    }
    if(escolhadoComputador==2){
        alert("Você Venceu 🎉 o Computador escolheu PAPEL... ")
    }
}
}