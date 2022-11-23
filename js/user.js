const url = '../phones.json';
const div = document.getElementById('div1');
const div2 = document.getElementById('new1');
const table = document.getElementById('tab');
const modal = document.getElementById('mainForm');
const editBtn = document.getElementById('edit');

let user = {};


function reqData() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const localData = JSON.parse(localStorage.getItem('phones'));
      if (localData) {
        showUser(localData);
      } else {
      localStorage.setItem('phones', JSON.stringify(data));
      console.log(data);
      }
  });
    
}


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let userId = params.user; 
  console.log(userId);



function showUser(data){
    const userInfo = data.find(data => data.id == userId);
    user = userInfo;


    for (key in user) {
      let row = document.createElement('tr');
      if (key !== "name") {
        row.innerHTML = `<td>${key}: ${user[key]}</td>`;
        table.appendChild(row);
      } else {
        row.innerHTML = `<td>${key}: ${user[key].first} ${user[key].last}</td>`;
        table.appendChild(row);
      }
      
    }
      

  };
  



  editBtn.addEventListener('click', function() {
    console.log(user);
    console.log(user.phone);

    document.getElementById('inputId').value = user.id;
    document.getElementById('box1').value = user.isActive;
    document.getElementById('age').value = user.age;
    document.getElementById('fname').value = user.name.first;
    document.getElementById('lname').value = user.name.last;
    document.getElementById('company').value = user.company;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('address').value = user.address;
    document.getElementById('registered').value = user.registered;
    
  });

  
  function showData(ele) {
    const p = document.createElement("p");
    p.innerText = ele.value;
    div2.appendChild(p);
}

modal.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.dir(modal);

    const {inputId, box1, age, fname, lname, company, email, phone, address, registered} = event.target.elements;
    // console.log(age.value, email.value);
    
    const arr = [inputId, box1, age, fname, lname, company, email, phone, address, registered];
    // console.log(arr);

    arr.forEach(ele => showData(ele));
   
    document.getElementById('tab').style.display = "none";
    div2.style.display = "block";


    const updatedInfo = {
      "id": inputId.value,
      "isActive": box1.value,
      "age": age.value,
      "name": {
        "first": fname.value,
        "last": lname.value
      },
      "company": company.value,
      "email": email.value,
      "phone": phone.value,
      "address": address.value,
      "registered": user.registered 
     };
     console.log(updatedInfo);

     const localData = JSON.parse(localStorage.getItem('phones'));
    
     const updatedUserData = localData.map(item => {
      if (item.id === updatedInfo.id)
        return updatedInfo;

        return item;

     });

     localStorage.setItem('phones', JSON.stringify(updatedUserData)); 
    
    setTimeout(() => modal.reset(), 2000);
    
});
  