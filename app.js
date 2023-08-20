const inp=document.getElementById('inp');
const list=document.getElementById('list');
const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
    let todoText=inp.value;
    if(todoText=="")
    {
        alert("Dont put empty string");
    }
    else
    {
        todoText=todoText.toUpperCase();
        let li=document.createElement('li');
        li.innerText=todoText;
        li.classList.add('change');
        list.append(li);
        li.addEventListener('click',()=>{
            li.classList.add('remove');
        })
        inp.value="";
    }
})
