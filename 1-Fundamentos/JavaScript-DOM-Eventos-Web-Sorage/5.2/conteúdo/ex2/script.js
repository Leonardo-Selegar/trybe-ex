const pai = document.getElementById('pai');
const irmãoElemententoOndeVoceEsta = document.createElement('section');
irmãoElemententoOndeVoceEsta.id = 'irmãoElemententoOndeVoceEsta';
pai.appendChild(irmãoElemententoOndeVoceEsta);

const elemententoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elemententoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id ='filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

const terceiroFIlho = document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;

