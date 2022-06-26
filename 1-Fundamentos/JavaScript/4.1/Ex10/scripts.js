const custo = 20;
const valor = 200;
const imposto = 0.2;

let valorCustoTotal = custo + (custo*imposto);
let lucro = valor - valorCustoTotal;

if(custo < 0 || valor < 0){
    console.log('Erro: Valores invalidos!');
}else{
    console.log('O lucro que a empresa terá após a venda de 1000 unidades desse produto será ' + lucro*1000 + ' Reais!');
}