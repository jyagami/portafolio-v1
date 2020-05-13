//&lt;script&gt;
const form = document.getElementById("form-contact");

if(form){
    form.addEventListener('submit', contactForm);
}

function contactForm(event) {//se ecarga de mandar el mail con los datos capturados
    event.preventDefault();
    //capturamos los datos
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    const data = {
        'nombre' : nombre.value,
        'correo' : correo.value,
        'asunto' : asunto.value,
        'mensaje': mensaje.value
    };

    saveContact(data); //enviamos la informacion
    form.reset(); //limpiamos los campos
};

const saveContact = (data) => {
    firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function(){
        alert('mensaje enviado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function(){
        alert('mensaje No enviado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      });
};