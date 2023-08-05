let nameError = document.querySelector(".name-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");
let msgError = document.querySelector(".msg-error");

document.querySelector("#submit").addEventListener("click",function (){
    let name = document.querySelector("#fname").value;
    let phone = document.querySelector("#phoneNbr").value;
    let email = document.querySelector("#email").value;
    let msg = document.querySelector("#msg").value;

    // name
    if(name.length == 0){
        nameError.innerHTML="Name is required";
    }
    else if(name.length < 10){
        nameError.innerHTML="Name should have more than 10 characters";
    }
    else{
        nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    }
// phone
    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
    }
    if(phone !== 10){
        phoneError.innerHTML="Phone number should be 10 digits";
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Only digits please";
    }
    if(phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    }
    // email

    if(email.match( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    }
    if(email.length == 0){
        emailError.innerHTML='Email is required';
    }
    if(!email.match( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Invalid email';
    }
    // MESSAGE

    if(msg.length<30){
        msgError.innerHTML=" more than 30 characters required";
    }else{
        msgError.innerHTML='<i class="fa-solid fa-circle-check"></i>';

    }
})
