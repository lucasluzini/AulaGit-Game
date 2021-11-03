let numeroAleatorio=[];
// let arrayJogador=[];


const gerarNumero = function (){
    numeroAleatorio.push(Math.trunc(Math.random()*4) + 1);  
}

// const arr = function (num){
//     arrayJogador.push(num);  
// }

const comparar = function (numeroAleatorio, numeroPressionado) {

    // numeroAleatorio.forEach(item => {
        
    // });

    // numeroAleatorio.every(function(element, index) {
    //     // Do your thing, then:
    //     if (numeroPressionado !== element) {
    //         console.log("-----------");
    //         console.log(numeroPressionado);
    //         console.log(element);
    //         return false
    //     }
    //     else return true
    //   })

    for (let i = 0; i<=numeroPressionado.length; i++){
        if(numeroAleatorio[i] === numeroPressionado[i]){
            return true;
        }else{
            gameOver();
            break;
        }
    }
    gerarNumero();
}

gerarNumero();
comparar(numeroAleatorio, 1);
comparar(numeroAleatorio, 2);
comparar(numeroAleatorio, 3);
comparar(numeroAleatorio, 1);

