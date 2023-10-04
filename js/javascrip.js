function clockTime(){
    const now= new Date();
    const hour = now.getHours();
    const minute= now.getMinutes();
    const second = now.getSeconds();

    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("second").innerHTML=second;
}

setInterval(function(){clockTime()})