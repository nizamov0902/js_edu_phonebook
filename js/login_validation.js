const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorHint = document.getElementById('error');

let myWindow;

function isActive () {
  const token = localStorage.getItem("active");
  
  if (token) {
    document.getElementById("p1").style.display = "block";
    document.getElementById("login").disabled = true;
    setTimeout(() => window.open("/templates/home_page.html"), 3000);
  }

}

form.addEventListener('submit', (value) => {
  let messages = [];
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
      {
        messages.push("Email is not valid");
      }
  console.log(!password.value.match(/^[0-9a-zA-Z!@#$%^&*?".,_()ǀǁ={}№+:;~<>]{8,}$/));
  console.log(!password.value.match(/[^a-zA-Z\\d]/));
  


  if (!password.value.match(/[^a-zA-Z\\d]/) && password.value.length < 8) {
        messages.push("Invalid password");
      }

      
  if (messages.length > 0) {
    value.preventDefault();
    errorHint.innerText = messages.join(", ");

  }

  if (messages.length == 0) {
    localStorage.setItem("active", true);
  }

  if (messages.length == 0) {
     window.open("/templates/home_page.html");
  }
      
});


// .matches(
//   /^[0-9a-zA-Z!@#$%^&*?".,_()ǀǁ={}№+:;~<>]{6,}$/,
//   'Password can not be less than 6 symbols and must contain at least 1 number'
// )






