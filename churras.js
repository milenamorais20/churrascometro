// Carne - 400 g/ pessoa + 6 hrs - 650 g
// Pão de alho - 1/pesssoa + 6 hrs - 1,5
// Farofa - 100 g/pessoa + 6 hrs - 150 g
// Vinagrete - 200 g/pessoa + 6hrs - 275 g
// Arroz - 50g/pessoa + 6 hrs - 100 g
// Cerveja - 1200 ml/pessoa + 6hrs - 2000 ml
// Refrigerante/água - 1000 ml/pessoa + 6 hrs - 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
// console.log(inputAdultos.value, inputCriancas.value, inputDuracao.value); Aqui foi apenas para ver se estava funcionando
let resultado = document.getElementById("resultado");

function calcular(){
    console.log('Carregando...');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    qtdTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) * criancas/2;
    qtdTotalPao = paoPP(duracao) * adultos + paoPP(duracao) * criancas/2;
    qtdTotalFarofa = farofaPP(duracao) * adultos + farofaPP(duracao) * criancas/2;
    qtdTotalVinagrete = vinagretePP(duracao) * adultos + vinagretePP(duracao) * criancas/2;
    qtdTotalArroz = arrozPP(duracao) * adultos + arrozPP(duracao) * criancas/2;
    qtdTotalBebidas = bebidasPP(duracao) * adultos + bebidasPP(duracao) * criancas/2;
    qtdTotalCerveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML += `<p>${qtdTotalCarne} g de Carne </p>`;
    resultado.innerHTML += `<p>${qtdTotalPao} Pães de Alho </p>`;    
    resultado.innerHTML += `<p>${qtdTotalFarofa} g de Farofa </p>`;
    resultado.innerHTML += `<p>${qtdTotalVinagrete} g de Vinagrete </p>`;
    resultado.innerHTML += `<p>${qtdTotalArroz} g de Arroz </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/350)} Latinhas de Cerveja </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/1000)} L de Bebidas </p>`;

}

function carnePP(duracao){

    if(duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}

function paoPP(duracao){

    if(duracao >= 6){
        return 1 + 1/2
    }
    else{
        return 1
    }
}

function farofaPP(duracao){

    if(duracao >= 6){
        return 150
    }
    else{
        return 100
    }
}

function vinagretePP(duracao){

    if(duracao >= 6){
        return 275
    }
    else{
        return 200
    }
}

function arrozPP(duracao){

    if(duracao >= 6){
        return 100
    }
    else{
        return 70
    }
}

function cervejaPP(duracao){

    if(duracao >= 6){

        return 2000
    }
    else{
        return 1200
    }
}

function bebidasPP(duracao){

    if(duracao >= 6){
        return 1000
    }
    else{
        return 1500
    }
}
