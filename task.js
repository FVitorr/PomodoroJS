const name_task = document.getElementById("task_name");
const time_task = document.getElementById("task_time");
const div_task = document.getElementById("task");

function update_task(){
    for (i in task){
        let object = task[i];
        div_task.innerHTML +=`<tr id="table_content" class = "tr_reminder" key = "`+ object.key +`">
            <td>`+ object.task + `</td>
            <td>`+ object.date + `</td>
            <td id="reminder_rem" onclick="removed_reminder(`+ object.key +`);"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
    }
}

update_task()

function add_task(){
    let name = name_task.value;
    let time = time_task.value;

    if (name != ''){
        //Renderizar div com as informaçoes passadas
        div_task.innerHTML +=`<tr id="table_content" class = "tr_reminder" key = "`+ parseInt(key_task) +`">
            <td>`+ name + `</td>
            <td>`+ time + `</td>
            <td id="reminder_rem" onclick="removed_reminder(`+ parseInt(key_task) +`);"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        var object = obj_task(name,time);
        task.push(object);
        //console.log(array_rules);
    }
    localStorage.setItem("task",JSON.stringify(task));
}