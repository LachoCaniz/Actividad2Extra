const usuarios = [
  {
    nombre: 'Juan',
    correo: 'juan@gmail.com',
    edad: 25,
    ciudad: 'Buenos Aires',
    activo: true
  },
  {
    nombre: 'Ana',
    correo: 'ana@yahoo.com',
    edad: 32,
    ciudad: 'Córdoba',
    activo: false
  },
  {
    nombre: 'Pedro',
    correo: 'pedro@hotmail.com',
    edad: 19,
    ciudad: 'Rosario',
    activo: true
  },
  {
    nombre: 'María',
    correo: 'maria@gmail.com',
    edad: 40,
    ciudad: 'Mendoza',
    activo: true
  },
  {
    nombre: 'Sofía',
    correo: 'sofia@yahoo.com',
    edad: 28,
    ciudad: 'La Plata',
    activo: false
  }
];

// ejemplo de acceso a la información de un usuario en el arreglo
console.log(usuarios[0].nombre); // salida: Juan
console.log(usuarios[0].correo); // salida: juan@gmail.com

// Obtenemos el formulario
const form = document.querySelector('form');

// Agregamos un evento al formulario para que se ejecute cuando se envíe
form.addEventListener('submit', (event) => {
  // Prevenimos que el formulario se envíe de manera predeterminada
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  const birthdate = form.birthdate.value;

  // Validamos los campos del formulario
  if (!username || !email || !password || !birthdate) {
    alert('Por favor, completa todos los campos.');
    return;
  }else if(email === usuarios[0].correo){
    alert('Usuario ya existente');
  
  }else if (email === usuarios[1].correo){
    alert('Usuario ya existente');
  }else if (email === usuarios[2].correo){
    alert('Usuario ya existente');
  }else if (email === usuarios[3].correo){
    alert('Usuario ya existente');
  }else if (email === usuarios[4].correo){
    alert('Usuario ya existente');
  }else{
    alert('Bienvenido: '+ username)
  }

  // Enviamos el formulario
  form.submit();

});
