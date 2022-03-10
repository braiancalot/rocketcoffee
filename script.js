const menuToggle = document.getElementById('menuToggle')
const menu = document.getElementById('menu')
let hidden = false

function toggleMenu() {
    menu.classList.toggle('on')
    hidden = !hidden
    if(hidden){
        document.body.style.overflow = "hidden"
        menuToggle.src = "assets/menu-buguer-close.svg"
    } else {
        document.body.style.overflow = "initial"
        menuToggle.src = "assets/menu-buguer-open.svg"
    }
}

function closeMenu(){
    menu.classList.remove('on')
    if(!hidden){
        hidden = true
    }
}

function chooseItem() {

}

menuToggle.addEventListener('click', toggleMenu)