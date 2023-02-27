var btn_search = document.getElementById("btn_search");
var search_menu = document.getElementById("search_menu");
const cbo_izq = document.getElementById('cbo_izq');

const btn_search_rojo = document.querySelector('.btn_search_rojo');


btn_search.addEventListener("click", function () {
    if (search_menu.style.display === "none") {
        search_menu.style.display = "block";
        this.classList.toggle('red-border');
        cbo_izq.innerHTML = 'Type... <i class="fa-solid fa-new-icon"></i>';
    } else {
        search_menu.style.display = "none";
        this.classList.toggle("borde-rojo");
        cbo_izq.innerHTML = '🔍 Search<i class="fa-solid fa-new-icon"></i>';
    }
});

const trabajo_0_resumen_1 = document.getElementById('trabajo_0_resumen_1');
const trabajo_0_resumen_0 = document.querySelector('.trabajo_0_resumen_0');

trabajo_0_resumen_0.addEventListener('click', function() {
    trabajo_0_resumen_1.classList.toggle('oculto');
    this.classList.toggle('border_radius_r0');
});
/*
var btn_msg_12 = document.getElementById("btn_msg_12");
var mensaje_1 = document.getElementById("mensaje_1");

btn_msg_12.addEventListener("click", function () {

    if (mensaje_1.style.display === "flex") {
        mensaje_1.style.display = "none";
    }
});*/   

const btn_msg_12 = document.getElementById("btn_msg_12");
const mensaje_1 = document.getElementById("mensaje_1");

btn_msg_12.addEventListener("click", function() {
    mensaje_1.style.display = "none";
});