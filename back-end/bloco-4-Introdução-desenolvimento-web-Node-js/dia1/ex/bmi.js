const readline = require('readline-sync');

const handleBMI = (weight, height) => {
  const heigthM =  height/100;
  const BMI = weight/(heigthM ** 2);
  return BMI;
}

const main = () => {
  const weight = readline.questionFloat('Qual seu peso? (kg) ')
  const height = readline.questionInt('Qual sua altura? (cm) ')
  const bmi = handleBMI(weight, height);
  console.log(`BMI: ${bmi.toFixed(2)}`)
  if(bmi < 18.5){
    console.log('Abaixo do peso (magreza)');
    return;
  }
  if(bmi >= 18.5 && bmi <= 24.9){
    console.log('Peso normal');
    return;
  }
  if(bmi >= 25 && bmi <= 29.9){
    console.log('Acima do peso (sobrepeso)');
    return;
  }
  if(bmi >= 30 && bmi <= 34.9){
    console.log('Obesidade grau I');
    return;
  }
  if(bmi >= 35 && bmi <= 39.9){
    console.log('Obesidade grau II');
    return;
  }
  if(bmi >= 40){
    console.log('Obesidade graus III e IV');
    return;
  }
}

main();