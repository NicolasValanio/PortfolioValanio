const formulario=document.querySelector('#form');
const btnMailto= document.querySelector('#envio');

formulario.addEventListener('submit', handleSubmit );

function handleSubmit(event){
event.preventDefault();

const form=new FormData(this)
btnMailto.setAttribute('href',`mailto:serviciosvalenzuela1@gmail.com?subject=${form.get('nombre')}${form.get('apellidos')}${form.get('telefono')}${form.get('email')}${form.get('mensaje')}`);
btnMailto.click()
}