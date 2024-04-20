import './style.css';
import { loadHome } from './home';

import { loadMenu} from './menu';
import { loadContact } from './contact';
// import './images/cake-variant-outline.svg'
// import './images/Star.png'
 //const logo=document.getElementById('logo')

//  const img_logo=document.createElement('img')
// img_logo.src='./images/Star.png'

// img_logo.alt='logo'
// img_logo.setAttribute('id','cakelogo')


// logo.appendChild(img_logo)

// const logoImg=document.createElement("div")
// logoImg.id="cakelogo"

// logo.appendChild(logoImg)

const logo=document.getElementById('logo')
const restName=document.createElement('h1')
restName.id='restName'
restName.textContent='Cake Heaven'

logo.appendChild(restName)

loadHome();







const nav_Home = document.querySelector("#nav-Home");
const nav_Menu = document.querySelector("#nav-Menu");
const nav_Contact = document.querySelector("#nav-Contact");


function clearContent(){
    const mainContent = document.querySelector(".content");
    mainContent.innerHTML = '';
}

// loadHome();

nav_Home.addEventListener('click', (event)=>{
    clearContent();
    loadHome();
})

nav_Menu.addEventListener('click', (event)=>{
    clearContent();
    loadMenu();
})

nav_Contact.addEventListener('click', (event)=>{
    clearContent();
    loadContact();
})
