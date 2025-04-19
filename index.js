

document.getElementById(`submitButton`).onclick = funcion(){


let temp;

    if(document.getElementById(`celc`).checked){
        temp = document.getElementById(`textBox`)
    }
    else if(document.getElementById(`fehr`).checked){


    }
    else{
        document.getElementById(`tempLabel`).innerHTML = `Select a unit`;
    }


function toCelsius(temp){

    return (temp -32)*(5/9);



}

function toFehrenheit(temp){

    return temp * 9/5+32;



    
}
}
