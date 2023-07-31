const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    }) 
 } 

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


// REMOVE MENU WHEN CLICKED ON ICON
const navLink = document.querySelectorAll('.nav-list');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


//SCROLL-UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');

    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// THEME CHANGE SECTION
const themeButton = document.getElementById('theme-button');
const nightTheme = 'night-theme';
const iconTheme = 'fa-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = ()=> document.body.classList.contains(nightTheme) ? 'night' : 'light';
const getCurrentIcon = ()=> document.body.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'night' ? 'add' : 'remove'](nightTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}       

//activate/deactivate manually
themeButton.addEventListener('click',()=>{
    // add or remove night theme
    document.body.classList.toggle('night-theme')
    themeButton.classList.toggle('fa-sun')

    //saving theme the one which user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})