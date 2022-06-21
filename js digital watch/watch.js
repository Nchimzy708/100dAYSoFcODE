function showTime(){
    var date = new Date();
    var h = date.getHours();// 0 - 23
    var m = date.getMinutes();//0-59
    var s =date.getSeconds();//0-59
    var d =date.getDay();//sunday-saturday
    var sessions ="AM"; 

    if (h==0){
        h=12;
    }
    if(h>12){
        h = h - 12;
        session= "PM";
    }
    h= (h < 10) ? "0" + h:h;
    m= (m < 10) ? "0" + m:m;
    s= (s < 10) ? "0" + s:s;
    d= (d < 10) ? "0" + d:d;
    var time = h + ":" + m +":"+ s +":"+ d +" " +  sessions;

    document.getElementById("MyClockDisplay").innerText= time;

    document.getElementsById("MyClockDisplay").textContent = time;

    setTimeout(showTime,1000);
}
showTime();