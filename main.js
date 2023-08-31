var tasks = [];
var i = 0;

function addTask() {
    let text = document.getElementById("input_text").value;
    if (text.length != 0) {
        tasks.push(text);

        var parent = document.getElementById('baap');

        var node = document.createElement('li');
        var inputCheckbox = document.createElement('input');
        var label = document.createElement('label');
        var button = document.createElement('button');


        node.appendChild(inputCheckbox);
        node.appendChild(label);
        node.appendChild(button);
        inputCheckbox.setAttribute('type', 'checkbox')
        inputCheckbox.setAttribute('id', i)

        inputCheckbox.style.width = '30px'
        inputCheckbox.style.height = '30px'
        inputCheckbox.setAttribute('value', false)

        label.setAttribute('class', 'task_text');
        label.setAttribute('for', i);
        label.style.padding = '5px';
        label.id
        label.innerText = text;
        inputCheckbox.addEventListener('click', () => {
            if (inputCheckbox.checked)
                label.style.textDecoration = 'line-through';
            else {
                label.style.textDecoration = 'none';
            }
        })

        button.setAttribute('type', 'submit');
        button.innerText = 'Delete'
        button.style.marginInlineStart = '120px'

        button.addEventListener('click', (_) => {
                node.remove();
            }
        )

        i++;


        // node.style.width = 'fit-content'
        // node.style.background = 'white'
        // node.style.display = 'flex'
        // node.style.padding = '12px'
        // node.style.borderRadius = '12px'
        // node.style.marginTop = '12px'

        //node.type = 'checkbox'

        // <li id = "item" >
        //                 <input type="checkbox" id="task" name="vehicle1" value="tytrdty">
        //                 <label  class= "task_text" for= "task"> I have a bike</label><br>
        //             </li>


        parent.appendChild(node);

        document.getElementById("input_text").value = null;

        console.log(tasks.toString());
    }
}


document.addEventListener('keydown', (e) => {
    let text = document.getElementById("input_text").value;

    if(text){
        if(e.key==='Enter'){
            addTask();
        }
    }
})