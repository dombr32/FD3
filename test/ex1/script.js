function word (startWord, endWord){

// console.log(startWord.charCodeAt(0));

let arrWords = [];

// узнаем код буквы
const startWordChartCode = startWord.charCodeAt(0);
const endWordChartCode = endWord.charCodeAt(0);

// добавляем все буквы от начальной до конечной в массив переводя в юникод
for (let i=startWordChartCode; i<=endWordChartCode; i++){
    // пушим в массив сразу переводя код в строку
    arrWords.push(String.fromCharCode(i));
}

// console.log(arrWords)

// for (let k=0; k<arrWords.length; k++){

//     console.log(arrWords[k]);
// }

// таймер по массиву
let k=0; // элемента массива с буквами
setInterval ( ()=>{
    
    if (k<arrWords.length){
        console.log(arrWords[k]);
        k++;
    }
    
},1000)

 
}

word ('A', 'F');
// setInterval(word,1000);