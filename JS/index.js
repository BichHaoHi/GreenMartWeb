
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
    var inputhehe = document.querySelector('.input-text')

    var close = document.querySelector('.close')
    
    var logo = document.getElementById("logo_1").style;
    var navbar = document.getElementById("navbar_1").style

    var click = document.querySelector('.click_icon')
    var profile = document.querySelector('.profile')
    var name_click = document.querySelector('.name_click')

    search.addEventListener('click' , function(){

      profile.classList.add('hidden')
      inputhihi.classList.remove('hidden')
      close.classList.remove('hidden')
      navbar.backgroundColor="#dfdfdf";
      logo.backgroundColor = "#dfdfdf";
      inputhehe.focus()
    })

    close.addEventListener('click', function(){
      inputhihi.classList.add('hidden')
      close.classList.add('hidden')
      logo.backgroundImage = "linear-gradient(#6FC5AE,#84CEBA5F,#91D4C200)";
      logo.backgroundColor = "#fff";
      navbar.backgroundColor = "transparent";

    })


    
    // ===================== ICON LOGIN ========================
   
    
    click.addEventListener('click', function(){
      profile.classList.remove('hidden')
      inputhihi.classList.add('hidden')
      close.classList.add('hidden')
      
    })
    name_click.addEventListener('click', function(){
      profile.classList.add('hidden')
    
    })

    // ===================== ký hiệu giỏ hàng khi có hàng ========================

    // var sign = document.querySelector('.sign')
    // var dot_click = document.querySelector('.dot_click')

    // dot_click.addEventListener('click', function(){
    //   sign.classList.remove('hidden')
    // })

        // ===================== khi giảm số lượng trong sp trong cart về 0 thì hiện chắc chắc xóa ko ? ========================
        // var modal_cart = document.querySelector('.modal_cart')
        // var quantity_input = document.querySelectorAll('.quantity_input');
        // quantity_input.forEach(function(input) {
        //   input.addEventListener('change', function() {
        //     var currentValue = parseInt(input.value);
        //     if (currentValue === 0) {
        //       modal_cart.classList.remove('hidden')
        //     }
        //   });
        // });

        // ===================== order completed========================
  var modal_complete = document.querySelector('.modal_complete')
  var checkout =document.querySelector('.checkout')
  var close_complete = document.querySelector('.close_complete')
  var content_table  = document.querySelector('.content_table')

  checkout.addEventListener('click', function(){
    modal_complete.classList.remove('hidden')
    content_table.classList.add('hidden')

  })
  close_complete.addEventListener('click', function(){
    modal_complete.classList.add('hidden')
  })
        
// ===================== tăng giảm số lượng mua ========================
var modal_cart = document.querySelector('.modal_cart')
var quantity_input = document.querySelectorAll('.quantity_input');
function decrease() {
  var soluong = document.getElementById("soluong");
  if (parseInt(soluong.value) >=1) {
    soluong.value = parseInt(soluong.value) - 1;

    quantity_input.forEach(function(input) {
        var currentValue = parseInt(input.value);
        if (currentValue === 0) {
          modal_cart.classList.remove('hidden')
        
      };
    });
  }
}
function increase() {
  var soluong = document.getElementById("soluong");
  if (parseInt(soluong.value) >=1) {
    soluong.value = parseInt(soluong.value) + 1;

    quantity_input.forEach(function(input) {
        var currentValue = parseInt(input.value);
        if (currentValue === 0) {
          modal_cart.classList.remove('hidden')
        
      };
    });
  }
}









