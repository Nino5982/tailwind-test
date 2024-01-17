function burger() {
    const burgerMenu = document.querySelector('#burger-menu');
    const navigation = document.querySelector('#navigation');
    const logInButton = document.querySelector('#actions');

    burgerMenu.addEventListener('click', ()=> {
        burgerMenu.classList.toggle('active');
        navigation.classList.toggle('burger-active')
        logInButton.classList.toggle('actions-active')
    })
}
burger();



