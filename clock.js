function Manivarman(){
const minhand = document.getElementById('min');
const sechand = document.getElementById('sec');
const hourhand =document.getElementById("hour");
//time calculation
const Now = new Date();
const min = Now.getMinutes();
const sec = Now.getSeconds();
const hour = Now.getHours() % 12;

//angle work
const minok = (360/60) * min;
const secok = (360/60) * sec;
const hourok = (360/12) * (hour + min / 60);

minhand.style.transform =  `rotate(${minok}deg)`;
sechand.style.transform =  `rotate(${secok}deg)`;
hourhand.style.transform = `rotate(${hourok}deg)`;
}
setInterval(Manivarman, 1000);
const check = ()=>{
    const rich = document.getElementById("m1");

    rich.style.transform = "rotate(0deg)"
    
}

Manivarman();