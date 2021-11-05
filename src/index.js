import './style/reset.css';
import './style/style.css';
import pageLoad from './modules/page-load'
import homePage from './modules/home-page'
import menuPage from './modules/menu-page'
import contactPage from './modules/contact-page'



init()

function navigation() {
    const home = document.getElementById('home-btn')
    const menu = document.getElementById('menu-btn')
    const contact = document.getElementById('contact-btn')
    const order = document.getElementById('order')
    const content = document.getElementById('tab-content');
    home.addEventListener('click', () => {
        content.innerHTML = "";     

        menu.classList.remove('active');
        contact.classList.remove('active');
        home.classList.add('active');   
        homePage();
        
    })
    menu.addEventListener('click', () => {
        content.innerHTML = "";       
        home.classList.remove('active');
        contact.classList.remove('active');  
        menu.classList.add('active');   
        menuPage();
        
    })
    order.addEventListener('click', () => {
        content.innerHTML = "";
        home.classList.remove('active');
        contact.classList.remove('active');  
        menu.classList.add('active');  
        menuPage();
    })
    contact.addEventListener('click', () => {
        content.innerHTML = "";
        menu.classList.remove('active');
        home.classList.remove('active');
        contact.classList.add('active');  
        contactPage();
    })
}

function init() {
    
    pageLoad();
    homePage();
    navigation();
}