var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
  	delay: 6000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

//Script Change Color
let html = document.querySelector(`html`);

var color = ['#3B60AE', '#E11F28', '#F8981D', '#3B60AE', '#1DAD4B'];
var dark = ['#1d4089', '#9e0056', '#c7002a','#1d4089', '#357e00'];
var i =0;

let uid = setInterval(() => {
    i = (i+1)%color.length;
    i = (i+1)%dark.length;
    change = color[i];
    change2 = dark[i];
    html.style.setProperty(`--theme`, `${change}`);
    html.style.setProperty(`--dark`, `${change2}`);
}, 6000);

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('shadow');
    }

    else {
          $('nav').removeClass('shadow');
    }
});


$('body').localScroll();