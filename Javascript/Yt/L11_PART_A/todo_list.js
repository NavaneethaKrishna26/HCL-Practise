const todolist=[];
renderlist();
function renderlist(){
    let html='';
    for(let i=0;i<todolist.length;i++){
        const {item,date}=todolist[i];
        html+=`
        <div>${item}</div>
        <div>${date}</div>
        <button onclick="
        todolist.splice(${i},1)
        renderlist();
        ">Delete</button>
        `;
    }
    document.querySelector('.div').innerHTML=html;
}


function add(){
    const inputElement=document.querySelector('.input');
    const dateElement=document.querySelector('.date-input');
    if(inputElement.value==='' || dateElement.value===''){
        alert('Enter a field');
        return;
    }
    todolist.push({item:inputElement.value,date:dateElement.value});
    inputElement.value='';
    renderlist();
}