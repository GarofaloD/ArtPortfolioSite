//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//Initial state
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);  //When click, call for the function

// const imageLink = document.querySelector('imageLink');
// imageLink.addEventListener('click', onClick);



//Custom functions
function toggleMenu () {
    if(!showMenu) { //If showMenu is false...
        //.classList adds the class
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //loop through the elements of the items list and add the class
        navItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}



function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}
