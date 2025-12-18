console.log("inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML=d.getDate()+
"CODICI e COLORI";
let colori=[];
let colori2=new array();

function elabora(){
let numero = document.getElementById("inNumber").value;
alert(numero);

if(numero >=0 && numero <=255){
    colori.push(numero);
    document.getElementById("out").innerHTML="Hai inserito il numero"+numero;
    document.getElementById("out").innerHTML+="<br>I colori inseriti sono :"+colori;
    console.log(colori);
    if(colori.length == 3){
        newColor= `rgb(${colori[0]}, ${colori[1]},${colori[2]})`;
        
    }
    }else{
    document.getElementById("error").innerHTML ="il numero non è corretto";   
    }
}
function reset(){
    
}
