

function contact(event) {
    event.preventDefault();
    const loading  = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
   emailjs
   .sendForm(
'service_3i67wkx',
'template_gfqnki1',
event.target,
'XPr4lQr4ZwKZl2R_t'
   ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
   })
}