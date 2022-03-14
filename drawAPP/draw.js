const menu = document.querySelector('.menu');
const fonction = document.querySelector('.fonction');
const newOne = document.querySelector(".newone");

// Functions
function areYouSure(){
    //confirm
    let reply = confirm('Voulez-vous vraiment quitter sans sauvegarder?');
    if(reply === true){
        document.location.reload()
    }
}

// MENUS EVENTLISTENERS

newOne.addEventListener('click',areYouSure);
window.addEventListener("load", () => {
    const canvas  = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    

    //Variables
    let paiting = false;
    function startPosition(e){
        paiting = true;
        draw(e);
    }
    function finishedPosition(){
        paiting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!paiting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "black";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //AddEvenListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove",draw);
})