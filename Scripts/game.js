//IIFE - Immediately Invoked Function Expression
(function(){
    let myVar = 5;

    function Start(){
        console.log(`%c Game Started`, "color: blue; font-size: 20px;");
    }

    function Update(){

    }

    window.addEventListener("load", Start);
})();