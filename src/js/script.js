function burger() {
    const burgerMenu = document.querySelector('#burger-menu')

    burgerMenu.addEventListener('click', ()=> {
        burgerMenu.classList.toggle('active')
        
    })
     
}
burger();