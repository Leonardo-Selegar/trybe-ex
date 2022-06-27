let word = 'tryber';
let newWord = [];

for(let cont = 0; cont < word.length; cont += 1){
    newWord += word[word.length - 1 - cont]
}
console.log(newWord);