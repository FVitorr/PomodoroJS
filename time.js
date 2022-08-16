let minute = 0;
let second = 0;
let millisecond = 0;
let duration = 0.1; //Variavel em Minutos controle da notificação
let cron;
let notification_ = 0; //Variavel de controle para notifição

document.getElementById("start").onclick = () => start();
document.getElementById("pause").onclick = () => pause();
document.getElementById("refresh").onclick = () => reset();

console.log(document.getElementById("start"));
function start() {
    pause();
    notification_ = 0;
    cron = setInterval(() => { timer(duration); }, 10);
}
  
function pause() {
    clearInterval(cron);
}
  
function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    //document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    //document.getElementById('millisecond').innerText = '000';
}

function timer(duration) {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    //document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    //document.getElementById('millisecond').innerText = returnData(millisecond);

    let time_second = second + minute * 60;
    let time_stop = duration * 60;
    //console.log(time_second);
    if (time_second == time_stop && notification_ == 0){
      notifyMe();
      pause();
      reset();
      notification_ = 1;
    }
    //console.log(second)
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }



/*Notificação*/const title = "Time out";
const msg = "Message";
const icon = "https://img.freepik.com/free-psd/alarm-clock-icon-3d-render-illustration-transparent-background_439185-11786.jpg?w=2000";
const song = "notification.mp3";

function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support Desktop notifications");
  }
  if (Notification.permission === "granted") {
    callNotify(title, msg, icon);
    return;
  }
  if (Notification.permission !== "denied") {
    Notification.requestPermission((permission) => {
      if (permission === "granted") {
        callNotify(title, msg, icon);
      }
    });
    return;
  }
}

function callNotify(title, msg, icone) {
  new Notification(title, { body: msg, icon: icone });
  new Audio(song).play();
}