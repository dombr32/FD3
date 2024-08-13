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

    for (let i=0; i<formAJAX.length; i++){
            const value = document.createTextNode(formAJAX[i].buttonCaption);
            const alertBut = document.createTextNode(formAJAX[i].alertText)
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
    // console.log (this.buttonCaption);
    // console.log(this.alertText)

    const button = document.createElement("button");
    button.appendChild(this.buttonCaption);
    document.body.appendChild(button);

    button.addEventListener('click', this.buttonPressed);

}

PoemButton.prototype.buttonPressed = function() {
    alert(this.alertText); // Метод для вывода текста в alert
};

