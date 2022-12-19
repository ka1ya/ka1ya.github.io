window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav'),
    navItem = document.querySelectorAll('.nav_item'),
    humburger = document.querySelector('.humburger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        nav.classList.toggle('nav_active');
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger_active');
            nav.classList.toggle('nav_active');
        })
    })
})