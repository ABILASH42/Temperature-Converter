const textbox = document.getElementById("textbox");
const tofar = document.getElementById("tofar");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");

function convert(){
    let value = Number(textbox.value);

    if(tofar.checked){
        result.textContent = (value*9/5 +32).toFixed(1) + "°F";
    }else if(tocel.checked){
        result.textContent = ((value-32)*5/9).toFixed(1) + "°C";
    }else{
        result.textContent = "Enter a value";
    }

}
