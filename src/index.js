const mobile_menu = document.querySelector('.mobile_menu-mode');

const close = document.querySelector('.close');

const mobile_menu_bar = document.querySelector('.mobile_menu')

function openMenu(){
    mobile_menu.style.display = 'flex';

}


function closeMenu(){
    mobile_menu.style.display = 'none';
}


mobile_menu_bar.addEventListener('click',openMenu);
close.addEventListener('click',closeMenu);
