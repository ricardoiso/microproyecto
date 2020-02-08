var name, phone, email, message;

function onSend(){

    name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    email = document.getElementById('email').value;
    message = document.getElementById('message').value;

    if(name == '' || email == '' || phone == '' || message == ''){
        alert("Campo Vacío")
    } else {
        alert("El mensaje fue enviado con exito");
        console.log("Nombre: ", name);
        console.log("Phone: ", phone);
        console.log("Email: ", email);
        console.log("Mensaje: ", message);
    }

}