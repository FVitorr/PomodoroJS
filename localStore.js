const meuStorage = localStorage;

let task = [];
let rules = [];
let reminder = [];
let routine = [];

let key_reminder = 0 ;
let key_task = 0;
let key_rules = 0;
let key_routine = 0;

//Recarregar as keys se esta ja existem
if (localStorage.getItem('key_reminder') != null){
    key_reminder = localStorage.getItem('key_reminder');
}
if (localStorage.getItem('key_task') != null){
    key_task = localStorage.getItem('key_reminder');
}
if (localStorage.getItem('key_rules') != null){
    key_rules = localStorage.getItem('key_reminder');
}
if (localStorage.getItem('key_routine') != null){
    key_routine = localStorage.getItem('key_reminder');
}

//Criar objeto Task
function obj_task(task,date){
    const new_task = new Object;
    new_task.key = parseInt(key_task);
    new_task.task = task;
    new_task.date = date;
    key_task++;
    localStorage.setItem('key_task',key_task);
    return new_task;
}
//Criar objeto Reminder
function obj_reminder(task,date){
    const new_reminder = new Object;
    new_reminder.key = parseInt(key_reminder);
    new_reminder.reminder = task;
    new_reminder.date = date;
    key_reminder++;
    localStorage.setItem('key_reminder',key_reminder);
    return new_reminder;
}
//Criar objeto Reminder
function obj_rules(task,date){
    const new_rules = new Object;
    new_rules.key = parseInt(key_rules);
    new_rules.rules = task;
    new_rules.date = date;
    key_rules++;
    localStorage.setItem('key_rules',key_rules);
    return new_rules;
}
//Recarregar as Informaçoes do Local Store para a pagina
for (var i = 0; i < localStorage.length; i++){
    let restore = localStorage.key(i);
    if (restore == "reminder"){
        //Recarregar Reminder
        let array = JSON.parse(localStorage.getItem("reminder"));
        reminder = array; //Array de dados
    }
    if (restore == "task"){
        //Recarregar task
        let array = JSON.parse(localStorage.getItem("task"));
        task = array;
    }
    if (restore == "rules"){
        //Recarregar rules
        let array = JSON.parse(localStorage.getItem("rules"));
        rules = array;
    }
    if (restore == "routine"){
        //Recarregar routine
        let array = JSON.parse(localStorage.getItem("routine"));
        routine = array;
    }
}