const phone = document.getElementById("phone");
const tel = document.getElementById('ph');
var div = document.getElementById("box_phone");

const color_hover_footer = () => {
   phone.style.color="green";
    tel.style.color="green";
}
div.addEventListener('click',color_hover_footer());
