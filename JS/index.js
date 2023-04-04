
// Đổi màu logo và thanh navbar khi cuộn trang
window.addEventListener('scroll', function() {
    var logo = document.getElementById("logo_1").style;
    var navbar = document.getElementById("navbar_1").style
    if (window.scrollY === 0) {
    logo.backgroundImage = "linear-gradient(#6FC5AE,#84CEBA5F,#91D4C200)";
    logo.backgroundColor = "#fff";
    navbar.backgroundColor = "transparent";

    } else {
      navbar.backgroundColor="#dfdfdf";

      logo.backgroundColor = "#dfdfdf";

    }
  });
  

