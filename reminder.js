const name_reminder = document.getElementById("reminder_name");
const time_reminder = document.getElementById("reminder_time");
const div_reminder = document.getElementById("reminder");

function update_reminder(){
    for (i in reminder){
        let object = reminder[i];
        div_reminder.innerHTML +=`<tr id="table_content" class = "tr_reminder" key = "`+ object.key +`">
            <td>`+ object.reminder + `</td>
            <td>`+ object.date + `</td>
            <td id="reminder_rem" onclick="removed_reminder(`+ object.key +`);"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
    }
}

update_reminder()

function add_reminder(){
    console.log("sdad'a");
    let name = name_reminder.value;
    let time = time_reminder.value;
    console.log(name,time);

    if (name != ''){
        //Renderizar div com as informaçoes passadas
        div_reminder.innerHTML +=`<tr id="table_content" class = "tr_reminder" key = "`+ parseInt(key_reminder) +`">
            <td>`+ name + `</td>
            <td>`+ time + `</td>
            <td id="reminder_rem" onclick="removed_reminder(`+ parseInt(key_reminder) +`);"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        var object = obj_reminder(name,time);
        reminder.push(object);
        //console.log(array_rules);
    }
    localStorage.setItem("reminder",JSON.stringify(reminder));
}


function removed_reminder(key){
    let tr_table = document.getElementsByClassName("tr_reminder");
    for (let j = 0; j < tr_table.length; j++){
        console.log(tr_table[j].getAttribute("key"));
        if (tr_table[j].getAttribute("key") == key){
            tr_table[j].remove();   
        }
    }
    for (i in array_rules){
        if (key == array_rules[i].key){
            console.log("Removed ",key);
            array_rules.splice(i, 1);
        }
    }
    localStorage.setItem("reminder",JSON.stringify(array_rules));
    //resetar key_reminder
    try{
        if(tr_table.length <= 0){
            key_reminder = 0;
            localStorage.setItem('key_reminder',key_reminder);
        }
    }catch{
    
    }

}