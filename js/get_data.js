const modal = document.getElementById('mainForm');
const div = document.getElementById('new1');
const dataButton = document.getElementById('btn01');
const url = '../phones.json';
const ul = document.getElementById('list');
let globalData = [];
let letter = "";
const registeredAt = new Date();

btn01.addEventListener('click', reqData);


function deleteUser(id) {
    document.getElementById(id).remove();
}

function reqData() {
    fetch(url)
      .then(res => res.json())
      .then(data => adder(data));
}

function adder(data) {
    const sortedData = data.sort((a, b) => a.name.first > b.name.first ? 1 : -1);
    globalData = sortedData;


    
    globalData.forEach(element => {

       const li = document.createElement("li");
       const p = document.createElement("p");
       const a = document.createElement('a');
       const i = document.createElement('i');

      
       a.setAttribute("href", `/templates/user_info.html?user=${element.id}`);

       li.setAttribute("id", `${element.id}`);
       i.setAttribute("class", "fas fa-times delete");
       i.addEventListener('click', function() {deleteUser(element.id);});


       if (letter !== element.name.first.charAt(0)) {
        p.innerText = element.name.first.charAt(0);
        ul.appendChild(p);
        letter = element.name.first.charAt(0);

        }

       a.innerText = element.name.first;
       li.appendChild(a);
       li.appendChild(i);
       ul.appendChild(li);   
    });  
}

function showData(ele) {
    const p = document.createElement("p");
    ele == registered ? p.innerText = registeredAt : p.innerText = ele.value;
    div.appendChild(p);
}

modal.addEventListener('submit', (event) => {
    event.preventDefault();
    console.dir(modal);

    const {age, name, company} = event.target.elements;
    console.log(age.value, email.value);
    
    const arr = [inputId, box1, age, name, company, email, phone, address, registered];
    console.log(arr);
    arr.forEach(ele => showData(ele));
   
    div.style.display = "block";


    
    setTimeout(() => modal.reset(), 2000);
    
});


