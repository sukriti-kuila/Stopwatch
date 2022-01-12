let min = 0;
let sec = 0;
let hrs = 0;
function start() {
    if (sec==60)
    {
        min++;
        sec=0;
    }
    if (min==60)
    {
        hrs++;
        min==0;
    }
    if (sec<10)
    sec = "0"+sec;
    if (min<10)
    min = "0"+min;
    if (hrs<10)
    hrs = "0"+hrs;
    time = hrs + " : " + min + " : " + sec;
    document.getElementById("display-box").innerHTML = time;
    sec++;
    min++;
    min--;
    hrs++;
    hrs--;
    document.getElementById("start_btn").disabled=true;
    myTimeOut = setTimeout(start,1000);
}
function pause() 
{
    clearTimeout(myTimeOut);
    document.getElementById("start_btn").disabled=false;
}
function stop() 
{
    clearTimeout(myTimeOut);
    document.getElementById("display-box").innerHTML = "00 : 00 : 00";
    hrs = 0;
    min = 0;
    sec = 0;
    document.getElementById("start_btn").disabled=false;
}

