var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    console.log("scrolled");
    if (window.scrollY > 0) {
        console.log(111);
        navbar.classList.remove('hehe'); // Thêm class "change-background"
    } else {
        console.log(222);
        navbar.classList.add('hehe'); // Xóa class "change-background"
    }
});
