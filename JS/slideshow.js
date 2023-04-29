var background = document.querySelectorAll('.background img');
  var dot = document.querySelectorAll('.next');
  var index = 0;
  function updateImage() {
    const activeDot = document.querySelector('.dot .active');
    if(index == 0){ 
      if (activeDot) {
        activeDot.classList.remove('active');
      }
      background[0].src = "./img/Background-00.svg"
    dot[index].classList.add('active');


    }
    if( index != 0 ){
      background[0].style.opacity = 0;

        
    if (activeDot) {
      activeDot.classList.remove('active');
    }
    dot[index].classList.add('active');

      background[0].src = background[index].getAttribute('src');  
      background[0].style.opacity = 1;
  }

    index++;
    if (index >= background.length) {
      index = 0;
    }
  }
    updateImage();
    setInterval(() => {
        updateImage();
    }, 4000);
