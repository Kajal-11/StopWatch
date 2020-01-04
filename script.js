let timer;
let sec= 0;
let min= 0;
let hr= 0;

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let isRunning = false;

start.addEventListener("click", ()=>{
    if(isRunning)
        return
    isRunning = true;
    timer = setInterval(TimerHandler, 1000);
});

pause.addEventListener('click', ()=>{
    timer = clearInterval(timer);
    isRunning = false;
    DisplayTime();
});

reset.addEventListener('click', ()=>{
    timer - clearInterval(timer);
    sec = 0;
    min = 0;
    hr = 0;
    isRunning = false;
    DisplayTime();
});

function TimerHandler(){
    sec++;
    
    if(sec == 60)
    {
        min++;
        sec = 0;
    }
    
    if(min == 60)
    {
        hr++; 
        min = 0;
    }
    
    if(sec % 2 ==0)
        DisplayTime();
    else
        DisplayBlinkingTime() 
}

function DisplayTime(){
    let doubleSec = sec;
    let doubleMin = min;
    let doubleHr = hr;
    if(sec < 10)
        doubleSec = "0" + sec;
    if(min < 10)
        doubleMin = "0" + min;
    if(hr < 10)
        doubleHr = "0" + hr;
    
    let time=document.getElementById("timer");
    time.innerHTML = doubleHr + ":" + doubleMin + ":" + doubleSec;
}

function DisplayBlinkingTime(){
        let doubleSec = sec;
    let doubleMin = min;
    let doubleHr = hr;
    if(sec < 10)
        doubleSec = "0" + sec;
    if(min < 10)
        doubleMin = "0" + min;
    if(hr < 10)
        doubleHr = "0" + hr;
    
    let time=document.getElementById("timer");
    time.innerHTML = doubleHr + " " + doubleMin + " " + doubleSec;
}
