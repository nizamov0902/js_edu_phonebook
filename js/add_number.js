const modal = document.getElementById('mainForm');
const registeredAt = new Date();
const div = document.getElementById('new1');
const url = '../phones.json';





function reqData() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const localData = JSON.parse(localStorage.getItem('phones'));
      if (localData) {
          console.log(localData);
      } else {
      localStorage.setItem('phones', JSON.stringify(data));
      console.log(data);
      }
  });
    
}


// const params = new Proxy(new URLSearchParams(window.location.search), {
//     get: (searchParams, prop) => searchParams.get(prop),
//   });
//   let userId = params.user; 
//   console.log(userId);



// function showUser() {
//     const userInfo = data.find(data => data.id == userId);
//     user = userInfo;


//     console.log(user);
//     console.log(user.phone);

//     document.getElementById('inputId').value = user.id;
//     document.getElementById('box1').value = user.isActive;
//     document.getElementById('age').value = user.age;
//     document.getElementById('name').value = user.name.first + " " + user.name.last;
//     document.getElementById('company').value = user.company;
//     document.getElementById('email').value = user.email;
//     document.getElementById('phone').value = user.phone;
//     document.getElementById('address').value = user.address;
//     document.getElementById('registered').value = user.registered;
    
//   };

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
    
    const arr = [inputId, box1, age, fname, lname, company, email, phone, address, registered];
    console.log(arr);
    arr.forEach(ele => showData(ele));
   
    div.style.display = "block";
    modal.style.display = "none";

   const newNumber = [{
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
    "registered": registeredAt 
   }];
   console.log(newNumber);


    const localData = JSON.parse(localStorage.getItem('phones'));
    

    const filteredData = localData.concat(newNumber);
    console.log(filteredData);

    localStorage.setItem('phones', JSON.stringify(filteredData));

    


    
    // setTimeout(() => modal.reset(), 2000);
    
});