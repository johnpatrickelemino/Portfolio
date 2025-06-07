const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const submit = document.querySelector(".submit");

menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    nav.classList.toggle('active');
}

submit.onclick = () => { 
    console. log("Form submitted");
}