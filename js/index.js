const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.inner');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}


navslide();
