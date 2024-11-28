let yourEmail =document.getElementById('yourEmail');
let yourName =document.getElementById('yourName');
let yourPassword =document.getElementById('yourPassword');
let signUp=document.getElementById('signUp');

let emailList;
if (localStorage.getItem("siteContainer") !== null) {
    emailList = JSON.parse(localStorage.getItem("siteContainer"));
}

signUp.addEventListener('click', function(event) {
    event.preventDefault();
    

   
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(yourEmail.value)) {
        document.getElementById('dataInput').classList.add('text-danger');
        document.getElementById('dataInput').innerHTML = 'Please enter a valid email address';
        return; 
    }
    else{
        document.getElementById('dataInput').innerHTML = 'Success';
        document.getElementById('dataInput').classList.remove('text-danger');
        document.getElementById('dataInput').classList.add('text-success');
    }
  
    if (yourPassword.value.length < 6) {
        document.getElementById('dataInput').classList.add('text-danger');
        document.getElementById('dataInput').innerHTML = 'Password must be at least 6 characters long';
        return; 
    }
    else{
        document.getElementById('dataInput').innerHTML = 'Success';
        document.getElementById('dataInput').classList.remove('text-danger');
        document.getElementById('dataInput').classList.add('text-success');
        
    }
    
    let emailExists = emailList.some(user => user.email === yourEmail.value);
    if (emailExists) {
        document.getElementById('dataInput').classList.add('text-danger');
        document.getElementById('dataInput').innerHTML = 'This account already exists';
        return; 
    }
    else{
        document.getElementById('dataInput').innerHTML = 'Success';
        document.getElementById('dataInput').classList.remove('text-danger');
        document.getElementById('dataInput').classList.add('text-success');
    }
    let prodact={
        name:yourName.value,
        email: yourEmail.value,
        password: yourPassword.value
    };
    
    emailList.push(prodact);
    localStorage.setItem(`siteContainer`, JSON.stringify(emailList));
    
    yourName.value = "";
    yourEmail.value = "";
    yourPassword.value = "";
})