
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




// SLIDESHOW

// var background = document.querySelectorAll('.background img')
// var dot = document.querySelectorAll('.next')


// dot.forEach( function(dott, index){
//   dott.addEventListener('click', function(){
//     const activeDot = document.querySelector('.dot .active');
//     if (activeDot) {
//       activeDot.classList.remove('active');
//     }

//     dot[index].classList.add('active')

//     background[0].style.opacity=0;
//     setTimeout(()=> {

//       if(index == 0) background[0].src = "./img/Background.svg"
//       background[0].src = background[index].getAttribute('src');
//       background[0].style.opacity=1;
//     },400)
//   })

// })




// SLIDESHOW tự chuyển

  

    // ===================== THANH TÌM KIẾM ========================

    var search  = document.querySelector('.icon-search')
    var inputhihi = document.querySelector('.input')
    var close = document.querySelector('.close')
    
    var logo = document.getElementById("logo_1").style;
    var navbar = document.getElementById("navbar_1").style

    search.addEventListener('click' , function(){
      console.log(11111111);

    inputhihi.classList.remove('hidden')
      close.classList.remove('hidden')
      navbar.backgroundColor="#dfdfdf";
      logo.backgroundColor = "#dfdfdf";
    })

    close.addEventListener('click', function(){
      inputhihi.classList.add('hidden')
      close.classList.add('hidden')
      logo.backgroundImage = "linear-gradient(#6FC5AE,#84CEBA5F,#91D4C200)";
      logo.backgroundColor = "#fff";
      navbar.backgroundColor = "transparent";

    })











