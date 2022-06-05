let [millisecs, secs, min, hour] = [0,0,0,0];
let timeDis = document.getElementById('timerDisplay');
let start = document.getElementById('work');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let hook = true;
console.log(start)
console.log(pause)



start.addEventListener('click', () =>{
    
    if(hook !==true){
      clearInterval(hook);
    }
    hook = setInterval(displayTimer, 10)
});

pause.addEventListener('click', ()=>{
    clearInterval(hook);
    
});


reset.addEventListener('click', ()=>{
    clearInterval(hook);
    [millisecs, secs, min, hour] = [0,0,0,0];
    timeDis.innerHTML = '00:00:00:000';
    
});

function displayTimer(){
    millisecs +=10;
    timeDis.textContent = '00 00 00 000';
    if(millisecs == 1000){
        millisecs =0;
        secs ++;
        if(secs == 60){
            secs =0;
            min++;
            if(min == 60){
                min =0;
                hour++;
            }
        }
    }

    let h = hour <10 ? '0' + hour :hour;
    let m = min <10 ? '0' + min : min;
    let s = secs <10 ? '0' + secs : secs;
    let ms = millisecs <10 ? '00' + millisecs : millisecs <100 ? '0' + millisecs : millisecs;

    timeDis.innerHTML = `${h} : ${m} : ${s} : ${ms}`

    // if(hour <10){
    //    timerDisplay.innerHTML = '0' + hour;
    // }else{
    //     timerDisplay.innerHTML =  hour;
    // }
    // if(min <10){
    //     timerDisplay.innerHTML = '0' + min;
    // }else{
    //     timerDisplay.innerHTML =  min;
    // }
    // if(secs <10){
    //     timerDisplay.innerHTML = '0' + secs;
    // }else{
    //     timerDisplay.innerHTML =  secs;
    // }
    // if(millisecs <10){
    //     timerDisplay.innerHTML = '00' + millisecs;
    // }else if (millisecs < 100){
    //     timerDisplay.innerHTML = '0' + millisecs;
    // }else{
    //     millisecs;
    // }
}


console.log(displayTimer())