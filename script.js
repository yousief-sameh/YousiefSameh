window.onload = function () {
    const menu_btn = document.querySelector('.humburger');
    const moblile_menu = document.querySelector('.mobile-nav')
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        moblile_menu.classList.toggle('is-active');
    })
}