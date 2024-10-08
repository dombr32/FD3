const ajaxHandlerScript= "https://fe.it-academy.by/Examples/test_JSE.json";

function getForm (){
    $.ajax(ajaxHandlerScript,
    { type:'GET', dataType:'json',
    success: (data) => {
        formsListReady(data);
        }, error: errorHandler }
    )};

getForm();

function formsListReady(data){
    const formAJAX=data;

    // const value = formAJAX[1].buttonCaption;
    // const alertBut = formAJAX[1].alertText;
    // new PoemButton(value, alertBut);

    for (let i=0; i<formAJAX.length; i++){
            const value = formAJAX[i].buttonCaption;
            const alertBut = formAJAX[i].alertText;
            new PoemButton(value, alertBut);
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}


function PoemButton (buttonCaption, alertText) {
    
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
    // this.buttonPressed = function() {alert(this.alertText);}
    console.log (this.buttonCaption);
    console.log(this.alertText)

    const button = document.createElement("button");
    button.innerHTML = this.buttonCaption;
    document.body.appendChild(button);

    button.addEventListener('click', this.buttonPressed.bind(this)); //с помощью bind фиксируем this

}

PoemButton.prototype.buttonPressed = function() {
    alert(this.alertText); // Метод для вывода текста в alert
    // console.log(this.alertText);
};

