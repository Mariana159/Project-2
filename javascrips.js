//Enrique emotion chart
if (E<=1) {
    document.querySelector(".enrique").style.background= rage
}

if (E==2) {
    document.querySelector(".enrique").style.background= mad
}

if (E==3) {
    document.querySelector(".enrique").style.background= neutral
}

if (E==4) {
    document.querySelector(".enrique").style.background= happy
}

if (E>=5) {
    document.querySelector(".enrique").style.background= yay
}

 //Enrique Switching Notes
 var ES=0
 function add1(){
     ES=ES+1
 }

 function showE(){
     if (ES==0){
     element = document.getElementById("E1").style.display='block'; 
     }else if (ES==1){
     element = document.getElementById("E2").style.display='block'; 
     }else if (ES==2)
     element = document.getElementById("E3").style.display='block';

 }

//Abdu

if (A<=1) {
    document.querySelector(".abdu").style.background= rage
}

if (A==2) {
    document.querySelector(".abdu").style.background= mad
}

if (A==3) {
    document.querySelector(".abdu").style.background= neutral
}

if (A==4) {
    document.querySelector(".abdu").style.background= happy
}

if (A>=5) {
    document.querySelector(".abdu").style.background= yay
}

//Debbie

if (D<=1) {
    document.querySelector(".debbie").style.background= rage
}

if (D==2) {
    document.querySelector(".debbie").style.background= mad
}

if (D==3) {
    document.querySelector(".debbie").style.background= neutral
}

if (D==4) {
    document.querySelector(".debbie").style.background= happy
}

if (D>=5) {
    document.querySelector(".debbie").style.background= yay
}

//Halu
if (H<=1) {
    document.querySelector(".halu").style.background= rage
}

if (H==2) {
    document.querySelector(".halu").style.background= mad
}

if (H==3) {
    document.querySelector(".halu").style.background= neutral
}

if (H==4) {
    document.querySelector(".halu").style.background= happy
}

if (H>=5) {
    document.querySelector(".halu").style.background= yay
}

//Sage
if (S<=1) {
    document.querySelector(".sage").style.background= rage
}

if (S==2) {
    document.querySelector(".sage").style.background= mad
}

if (S==3) {
    document.querySelector(".sage").style.background= neutral
}

if (S==4) {
    document.querySelector(".sage").style.background= happy
}

if (S>=5) {
    document.querySelector(".sage").style.background= yay
}