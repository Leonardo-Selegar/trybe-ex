let a = 10;
let b = 2;
let operação = 'Módulo';

switch (a ,b , operação) {
    case "Soma":
        console.log(a + b);
        break;
    case "Subração":
        console.log(a - b);
        break;
    case "Multiplicação":
        console.log(a * b);
        break;
    case "Divisão":
        console.log(a / b);
        break;
    case 'Módulo':
        console.log(a % b);
        break;
}
