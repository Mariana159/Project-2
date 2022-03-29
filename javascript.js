

//note switching///////////////////////////
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





function practice(){
    //console.log(document.querySelector(".grid-item").style);
    alert("I'm working")
    document.querySelector(".player").style.background= yay
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


//Debbie Switching Notes
var DS=0
function add1D(){
    DS=DS+1
}

function showD(){
    if (DS==0){
    element = document.getElementById("D1").style.display='block'; 
    }else if (DS==1){
    element = document.getElementById("D2").style.display='block'; 
    }else if (DS==2)
    element = document.getElementById("D3").style.display='block';

}

//Sages swithcing notes
var SS=0
function add1S(){
    SS=SS+1
}

function showS(){
    if (SS==0){
    element = document.getElementById("S1").style.display='block'; 
    }else if (SS==1){
    element = document.getElementById("S2").style.display='block'; 
    }else if (SS==2)
    element = document.getElementById("S3").style.display='block';

}


//Halu Switching Notes
 var HS=0
function add1H(){
    HS=SS+1
}

function showH(){
    if (HS==0){
    element = document.getElementById("H1").style.display='block'; 
    }else if (HS==1){
    element = document.getElementById("H2").style.display='block'; 
    }

}

//Abdu Switching Notes
 var AS=0
function add1A(){
    AS=AS+1
}

function showA(){
    if (AS==0){
    element = document.getElementById("A1").style.display='block'; 
    }else if (AS==1){
    element = document.getElementById("A2").style.display='block'; 
    }else if (AS==2)
    element = document.getElementById("A3").style.display='block';

}


// Get the modal
let modal = document.getElementById('E1');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
