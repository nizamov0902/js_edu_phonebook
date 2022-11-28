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


function showData(ele) {
    const p = document.createElement("p");
    ele == registered ? p.innerText = registeredAt : p.innerText = ele.value;
    div.appendChild(p);
}

modal.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.dir(modal);

    const {age, name, company} = event.target.elements;
    console.log(age.value, email.value);
    
    const arr = [inputId, box1, age, fname, lname, company, email, phone, address, registered];
    console.log(arr);
    arr.forEach(ele => showData(ele));
   
    div.style.display = "block";
    modal.style.display = "none";

    let userNumber = phone.value;
    let formattedNumber = formatPhoneNumber(userNumber);

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
    "phone": formattedNumber,
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

function formatPhoneNumber(value) {
  let cleaned = ('' + value).replace(/\D/g, '');
  let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    let intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '(', match[2], ') ', match[3], ' ', match[4]].join('');
  }
  return null;
};