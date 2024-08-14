function word (startWord, endWord){
    const startWordChartCode = startWord.charCodeAt(0);
    const endWordChartCode = endWord.charCodeAt(0);

    let k=startWordChartCode;
    function timer(){
        console.log(String.fromCharCode(k));
        k++;
        if (k>endWordChartCode)
        clearInterval (interval);
    }

    const interval = setInterval ( timer,1000);

}
 

word ('A', 'F');

