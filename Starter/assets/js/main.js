// Grab elements
const selector = (selected) =>{
    const element = document.querySelector(selected);
    if (element != null) 
    return element;
    else
    throw new Error(`Element not found: ${selected}, check main.js`);
}


//Nav styles on scroll

const scrollHeader = () =>{
    const headerElement = selector('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }
    else{
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selector('#menu-toggle-icon');

const toggleMenu = ()=>{
    const mobileMenu = selector('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper