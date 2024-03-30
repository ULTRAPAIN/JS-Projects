const start=document.querySelector('#start');
const stop=document.querySelector('#stop');


function generateRandomColor(){
    const r=Math.floor(Math.random() * 256);
    const g=Math.floor(Math.random() * 256);
    const b=Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
let random_color
let IntervalId
const startInterval=function(){
    if(!IntervalId){
        IntervalId=setInterval(() =>{
            random_color=generateRandomColor();
        document.body.style.backgroundColor=random_color
        console.log("Background Color:",random_color.toString(16).padStart(2, '0') );
        },1000);
    }
}
start.addEventListener('click',startInterval);

stop.addEventListener('click',()=>{
    document.body.style.backgroundColor='rgb(255,255,255)';
    clearInterval(IntervalId);
    console.log('Background color stopped');
});

