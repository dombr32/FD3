const ajaxHandlerScript= "https://fe.it-academy.by/Examples/test_JSE.txt";

$.ajax(ajaxHandlerScript,
{ type:'GET', dataType:'text',
success: (data) => {
    reg(data);
    }, error: errorHandler }
);

function reg (data){

    const regData = /(['"])([^'"]+)\1/g;
    
    console.log(data.search(regData))
    
    console.log(regData.exec(data))
    
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}