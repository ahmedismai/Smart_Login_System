let yourEmail =document.getElementById('yourEmail');
let yourPassword =document.getElementById('yourPassword');
let logIn=document.getElementById('logIn');

let emailList;
if (localStorage.getItem("siteContainer") !== null) {
    emailList = JSON.parse(localStorage.getItem("siteContainer"));
}

logIn.addEventListener('click', function(event) {
    event.preventDefault();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(yourEmail.value)) {
        document.getElementById('dataInput').innerHTML = 'Please enter a valid email address';
        return; 
    }

    
    if (yourPassword.value.length < 6) {
        document.getElementById('dataInput').innerHTML = 'Password must be at least 6 characters long';
        return; 
    }
    let prodact={
        email: yourEmail.value,
        password: yourPassword.value
    };
    let user = emailList.find(user => user.email === yourEmail.value);
    if (!user) {
        document.getElementById('dataInput').innerHTML = 'This account does not exist';
        return; 
    }

    
    if (user.password !== yourPassword.value) {
        document.getElementById('dataInput').innerHTML = 'Incorrect password';
        return; 
    }
    emailList.push(prodact);
    if(yourEmail.value===''||yourPassword.value==='')
    {
        document.getElementById('dataInput').innerHTML='please enter a valid email or password';
    }
    else{
        window.location=`${'./main.html'}`
    }
    
    yourEmail.value = "";
    yourPassword.value = "";
})

