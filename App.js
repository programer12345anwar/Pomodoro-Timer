//const timerE1=document.querySelector(".timer");//to change same word ctrl + D
const timerE1=document.getElementById("timer");
const startE1=document.getElementById("start");
const stopE1=document.getElementById("stop");
const resetE1=document.getElementById("reset");

function startTimer(){
    interval=setInterval(() => {
        console.log("object")
    }, 1000);
    
}
function stopTimer(){
    console.log("object")
}
function resetTimer(){
    console.log("object")
}
startE1.addEventListener("click",()=>{
    startTimer();
})

stopE1.addEventListener("click",()=>{
    stopTimer();
})

resetE1.addEventListener("click",()=>{
    resetTimer();
})