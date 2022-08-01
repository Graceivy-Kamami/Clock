/*function dateTime(){
    document.getElementById("date").innerHTML=new Date();
    }
    dateTime();   
    function startTime(){
        interValid = setInterval(dateTime, 1000);  */

var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");

function setTime(){
   const day = new Date();
    const hr = day.getHours(); //starts from 0-23
    const min = day.getMinutes(); //starts from 0-59
    const sec = day.getSeconds(); //starts from 0-59

    //clock is 360 degrees so for hr will 360/12=30degrees so min will be 360/60=6 same for seconds
    const hourDeg = (hr * 30) + (min * 0.5 ) ; //in every 60mins it rotates 30 degrees so in every min it rotates 30/60=0.5
    const minuteDeg = (min * 6) + (sec * 0.1); //in every 60sec it rotates 6 degrees so in every second it rotates 6/60=0.1
    const secondDeg = (sec * 6);

    hour.style.transform = `rotateZ(${hourDeg}deg)`
    minute.style.transform =`rotateZ(${minuteDeg}deg)`
    second.style.transform =`rotateZ(${secondDeg}deg)`


}
setTime();
setInterval(setTime, 1000);