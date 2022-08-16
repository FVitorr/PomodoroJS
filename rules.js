const $ = document.querySelector.bind(document);

function update_rules(){
    for (i in rules){
        //console.log(i)
        let object = rules[i];
        $("#rules").innerHTML +=`<tr id="table_content" class = "tr_reminder" key = "`+ object.key +`">
            <td>`+ object.rules + `</td>
            <td>`+ object.date + `</td>
            <td id="reminder_rem" onclick="removed_reminder(`+ object.key +`);"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
    }
}

update_rules();

function add_rules (){
    console.log("ADD Rules");
    let name = $("#rules_name").value;
    let time = $("#rules_time").value;
    console.log(name,time);

    if (name != ''){
        //Renderizar div com as informaçoes passadas
        $("#rules").innerHTML +=`<tr id="table_content" class = "tr_reminder" key = "`+ parseInt(key_rules) +`">
            <td>`+ name + `</td>
            <td>`+ time + `</td>
            <td id="reminder_rem" onclick="removed_reminder(`+ parseInt(key_rules) +`);"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        var object = obj_rules(name,time);       
        rules.push(object);
        //console.log(array_rules);
    }
    localStorage.setItem("rules",JSON.stringify(rules));
}