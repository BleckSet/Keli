


document.addEventListener('DOMContentLoaded', function() {
  let burger = document.querySelector('.burger-menu');
  let menu = document.querySelector('.menu');
  let body = document.body;
  let closeButton = document.querySelector('.close_menu');
  
  burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
  });
  
  closeButton.addEventListener('click', function() {
    menu.classList.remove('active');
    body.style.overflow = 'auto';
  });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2.5,
    infinite: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          letiableWidth:true,
          centerMode:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          letiableWidth:true,
          centerMode:true,
          slidesToShow: 1,
        }
      }
    ],
    preletrow: $('.custom-prev-button'),
    nextArrow: $('.custom-next-button')
  });
});
let button1 = document.getElementById('metal_btn');
let button2 = document.getElementById('beton_btn');
let button3 = document.getElementById('pishevaya_btn');

let popup1 = document.getElementById('metal');
let popup2 = document.getElementById('beton');
let popup3 = document.getElementById('pishevaya');

let closeButton = document.getElementsByClassName('close_btn');

// Добавляем обработчики событий на клик кнопок
button1.addEventListener('click', function(e) {
  e.preventDefault();
  popup1.classList.add('show');
  document.body.classList.add('scroll-disabled');
});

button2.addEventListener('click', function(e) {
  e.preventDefault();
  popup2.classList.add('show');
  document.body.classList.add('scroll-disabled');
});

button3.addEventListener('click', function(e) {
  e.preventDefault();
  popup3.classList.add('show');
  document.body.classList.add('scroll-disabled');
});


// Добавляем обработчики событий на клик кнопки "Закрыть"
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    let popup = this.parentNode;
    popup.classList.remove('show');
    document.body.classList.remove('scroll-disabled');
  });
}




$(document).ready(function() {
  const metalButton = document.getElementById('beton_btn');
  const metalPOPUPitems = document.querySelectorAll('.BETON_POPUP_inner_item');

  metalButton.addEventListener('click', function() {
    metalPOPUPitems.forEach(function(item, index) {
      setTimeout(function() {
        item.style.transitionDelay = `${index * 1}s`; // Задержка между появлением каждого элемента: 0.5 секунды
        item.classList.add('show');
      }, 1000); // Задержка после клика: 1000 миллисекунд (1 секунда)
    });
  });
});




$(document).ready(function() {
  const metalButton = document.getElementById('metal_btn');
  const metalPOPUPitems = document.querySelectorAll('.Metal_POPUP_item');

  metalButton.addEventListener('click', function() {
    metalPOPUPitems.forEach(function(item, index) {
      setTimeout(function() {
        item.style.transitionDelay = `${index * 1}s`; // Задержка между появлением каждого элемента: 0.5 секунды
        item.classList.add('show');
      }, 1000); // Задержка после клика: 1000 миллисекунд (1 секунда)
    });
  });
});




$(document).ready(function() {
  const metalButton = document.getElementById('pishevaya_btn');
  const metalPOPUPitems = document.querySelectorAll('.Pishevaya_POPUP_item');

  metalButton.addEventListener('click', function() {
    metalPOPUPitems.forEach(function(item, index) {
      setTimeout(function() {
        item.style.transitionDelay = `${index * 1}s`; // Задержка между появлением каждого элемента: 0.5 секунды
        item.classList.add('show');
      }, 1000); // Задержка после клика: 1000 миллисекунд (1 секунда)
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var popup = document.querySelector('.sfera_hover_Popup');
  var items = document.querySelectorAll('#openpopupSfera');
  var activeItem = null;
  var hideTimeout;

  items.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.stopPropagation();
      
      if (activeItem === this) {
        popup.classList.remove('active');
        activeItem.classList.remove('active');
        activeItem = null;
      } else {
        var posX = event.clientX;
        var posY = event.clientY;

        popup.style.left = posX + 'px';
        popup.style.top = posY + 'px';
        popup.classList.add('active');
        activeItem = this;
        activeItem.classList.add('active');
      }
    });

    item.addEventListener('mouseleave', function() {
      hideTimeout = setTimeout(function() {
        if (activeItem === item) {
          popup.classList.remove('active');
          activeItem.classList.remove('active');
          activeItem = null;
        }
      }, 2000); // Задержка перед скрытием: 300 миллисекунд
    });

    item.addEventListener('mouseenter', function() {
      clearTimeout(hideTimeout);
    });
  });

  document.addEventListener('click', function() {
    if (activeItem !== null) {
      popup.classList.remove('active');
      activeItem.classList.remove('active');
      activeItem = null;
    }
  });
});


$(document).ready(function() {
  // Плавная прокрутка до якоря при клике на кнопку
  $('a').click(function() {
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top + -50
    }, 800);
    return false;
  });
});
