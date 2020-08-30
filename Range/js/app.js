


var elem = document.querySelector('input[type="range"]');
var first= document.querySelector(".first");
var second= document.querySelector(".second");
var third= document.querySelector(".third");
var four= document.querySelector(".four");
var five= document.querySelector(".five");
var six= document.querySelector(".six");
var seven= document.querySelector(".seven");
var eight=document.querySelector(".eight");
var body=document.getElementsByTagName("BODY")[0];
var lip=document.querySelector(".lip");
// var rangeValue = function(){
//   var newValue = elem.value;
//   var target = document.querySelector('.value');
//   target.innerHTML = newValue;
// }


elem.addEventListener("input", function(){
    
    let mintap=elem.value
   console.log(mintap);
    if(mintap==3){
       first.style.display="none";
       second.style.display="block";
       
        
        
    }
    if(mintap==4){
        second.style.display="block";
        third.style.display="none";
    }
    if(mintap==5){
        second.style.display="none";
        third.style.display="block";

       
    }
    if(mintap==6){
        four.style.display="none";
        third.style.display="block";
    }
    if(mintap==7){
        third.style.display="none";
        four.style.display="block";

        

    }
    if(mintap==8){
        four.style.display="block";
        five.style.display="none";
    }
    if(mintap==9){
        four.style.display="none";
        five.style.display="block";
        
    }
    if(mintap==10){
        five.style.display="block";
        six.style.display="none";
    }
    if(mintap==11){
        five.style.display="none";
        six.style.display="block";

    }
    if(mintap==12){
        six.style.display="block";
        seven.style.display="none";
    }
    if(mintap==13){
        six.style.display="none";
        seven.style.display="block";
    }
    if(mintap==14){
        eight.style.display="none";
        seven.style.display="block";
    }
    if(mintap==15){
        seven.style.display="none";
        eight.style.display="block";
    }
    if(mintap==17){
        eight.style.display="block";
    }

    
});
