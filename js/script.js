const toggle = document.getElementsByClassName('toggle')[0];
const menu = document.getElementsByClassName('nav-link')[0];
const navBrand = document.getElementsByClassName('nav-brand-dua')[0];
const toggleOn = () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    navBrand.classList.toggle('active');
}