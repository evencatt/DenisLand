let headerButton = document.querySelector('#header__burger')
let navList = document.querySelector('#header__burger-nav')
console.log (headerButton)
headerButton.addEventListener('click', function(event){
    event.preventDefault();
    navList.classList.toggle('visible');
    console.log('done');
})