let TodoList=[
    {
        item: 'work',
        date: '23/04/2024'
    }
];

function add() {
    let inputele = document.querySelector('#input');
    let dateele = document.querySelector('#date');
    let addele = inputele.value;
    let adddate = dateele.value;
    TodoList.push({item: addele,date: adddate});
    inputele.value = '';
    dateele.value = '';
    display();
}

function display() {
    let displayele = document.querySelector('.items');
    let newhtml='';
    for(let i=0;i<TodoList.length;i++){
        let {item,date}=TodoList[i];
        newhtml+= `
            <span>${item}</span>
            <span>${date}</span>
            <button id="delete" onclick="TodoList.splice(${i},1); 
             display()">Delete</button>`;
        
    }
    displayele.innerHTML=newhtml;
}