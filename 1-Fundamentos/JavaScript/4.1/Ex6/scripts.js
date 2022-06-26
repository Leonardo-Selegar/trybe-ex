let peça = 'Rainha';

switch(peça.toLowerCase()){
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
         break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
    case 'cavalo':
        console.log('Cavalo-> "L" pode pular sobre as peças.');
    case 'torre':
        console.log('Torre -> Horizontal e vertical.')
        break;
    case 'peão':
        console.log('Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
        break;
    default:
        console.log('Peça invalida!');
        break;
}
