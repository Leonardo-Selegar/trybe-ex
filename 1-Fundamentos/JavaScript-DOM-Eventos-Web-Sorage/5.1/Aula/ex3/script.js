const urgente = document.getElementsByClassName("emergency-tasks")[0];
urgente.style.backgroundColor = 'salmon';

const naoUrgente = document.getElementsByClassName("no-emergency-tasks")[0];
naoUrgente.style.backgroundColor = 'Khaki ';

for (let index = 0; index < 2; index++) {
    const urgenteImportanteNaoImportante = document.getElementsByTagName("h3")[index];
    urgenteImportanteNaoImportante.style.backgroundColor = 'purple'; 
}

for (let index = 2; index < 4; index++) {
    const naoUrgenteImportanteNaoImportante = document.getElementsByTagName("h3")[index];
    naoUrgenteImportanteNaoImportante.style.backgroundColor = 'black'; 
}