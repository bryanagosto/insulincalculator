//ICR = Insulin to Carb Ratio
//IS = Insulin Sensitivity
//TBG = Target Blood Glucose

/*PreFilled on load*/
function preFilled(){
    if (typeof(Storage) !== "undefined") {
        document.getElementById("icr").value = localStorage.getItem("icrx");            
        document.getElementById("is").value = localStorage.getItem("isx");           
        document.getElementById("tbg").value = localStorage.getItem("tbgx");
    }
}

/*Local Storage Setup*/
function setup(){
    //Store
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("icrx",  document.getElementById("icr").value);
        localStorage.setItem("isx",  document.getElementById("is").value);
        localStorage.setItem("tbgx",  document.getElementById("tbg").value);
    // Retrieve
        document.getElementById("icr").innerHTML = localStorage.getItem(document.getElementById("irc").value);
        document.getElementById("is").innerHTML = localStorage.getItem(document.getElementById("is").value);
        document.getElementById("tbg").innerHTML = localStorage.getItem(document.getElementById("tbg").value);
    }
    return false
}

/*Clean Local Storage*/
function cleanstate(){
    if (typeof(Storage) !== "0") {
        document.getElementById("icr").value = ""; 
        document.getElementById("is").value = ""; 
        document.getElementById("tbg").value = ""; 
        localStorage.setItem("icrx", "");
        localStorage.setItem("isx", "");
        localStorage.setItem("tbgx", "");
    }
}

/*Insulin Intake Calculation*/
function insulinintake(){
    var mc= parseInt(document.getElementById('mc').value); 
    var cbg = parseInt(document.getElementById('cbg').value); 
    var icr = parseInt(document.getElementById('icr').value); 
    var is = parseInt(document.getElementById('is').value); 
    var tbg = parseInt(document.getElementById('tbg').value);

    if (cbg > tbg){
        var calculate1 = (cbg-tbg)/is;
        var calculate3 = mc/icr;
        var ti = calculate1 + calculate3;
        ti = Math.round(ti);
        document.getElementById('totalinsulin').innerHTML=ti;  
    }else{
        var calculate2 = mc/icr;
        calculate2 = Math.round(calculate2);
        document.getElementById('totalinsulin').innerHTML=calculate2;
        
    }
    return false
}


  

