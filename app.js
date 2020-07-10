let min     = 0;
let sec     = 0;
let milli   = 0;


let minButton   = document.getElementById("min");
let secButton   = document.getElementById("sec");
let milliButton = document.getElementById("milli");


function count() {
    milli++;
    milliButton.innerHTML = milli;
    if(milli > 100){
        sec++;
        secButton.innerHTML = sec;
        milli = '00';
    }
    else if(sec == 60){
        min++;
        minButton.innerHTML = min;
        sec = '00';
    }

    
}
let call_interval;

function interval (){
    call_interval = setInterval(function(){
        count();
    },10)
}

function startTimer() {
    interval();
    document.getElementById("startButton").disabled = true;
}

function pauseTimer() {
    document.getElementById("startButton").disabled = false;
    clearInterval(call_interval);
}
function resetTimer() {
    min     = '00';
    sec     = '00';
    milli   = '00';
    milliButton.innerHTML = milli;
    secButton.innerHTML = sec;
    minButton.innerHTML = min;
    clearInterval(call_interval);
    document.getElementById("startButton").disabled = false;
}
