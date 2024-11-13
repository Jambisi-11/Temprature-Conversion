// function temperature(){
//     //To convert celcius to farenheit
//     //(CEL * 9/5) + 32
//     var c = document.getElementById("celsius").value;
//     var f = (c * 9/5) + 32
//     document.getElementById("fahrenheit").value = f
// }

window.onload = function() {
    document.getElementById("checkbox").checked = true;
  }
  
function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var checkBox = document.getElementById("checkbox");
    if (checkBox.checked){
        var c = document.getElementById("celsius").value;
        var f = (c * 9/5) + 32
        document.getElementById("fahrenheit").value = f
    }  else {
        // Convert Fahrenheit to Celsius
        var f = document.getElementById("fahrenheit").value;
        var c = (f- 32) * 5/9;
        document.getElementById("celsius").value = c;
      }
    
    
    
}



function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}


function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").innerHTML = m // I used Label to display my result here, instead of input button
}