let navbar = document.getElementById('navbar');
let navElements = document.getElementById('nav-elements');
window.addEventListener('scroll', function () {
    const scroll = this.document.documentElement.scrollTop;

    if (scroll >200) {
        navbar.style.height = '7vh';
        navElements.style.height = '7vh';
        navbar.style.background= "#34bbffc5";
    } else {
        navbar.style.height = '15vh';
        navElements.style.height = '15vh';
        navbar.style.background= "#34bbff";
    }
})
