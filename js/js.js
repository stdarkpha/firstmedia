var swiper = new Swiper('.swiper-container', {
  autoplay: {
   	delay: 6000,
     disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

let html = document.querySelector(`html`);

var color = ['#3B60AE', '#E11F28', '#F8981D', '#3B60AE', '#1DAD4B'];
var dark = ['#1d4089', '#9e0056', '#c7002a','#1d4089', '#357e00'];
var hue = ['0' , '130', '165', '0', '245'];
var i =0;

setInterval(() => {
if($('#slide1').hasClass('swiper-slide-active')){
  change = color[0];
  change2 = dark[0];
  change3 = hue[0];

    html.style.setProperty(`--theme`, `${change}`);
    html.style.setProperty(`--dark`, `${change2}`);
    html.style.setProperty(`--shift`, `${change3}deg`);
}else if($('#slide2').hasClass('swiper-slide-active')){
  change = color[1];
  change2 = dark[1];
  change3 = hue[1];

    html.style.setProperty(`--theme`, `${change}`);
    html.style.setProperty(`--dark`, `${change2}`);
    html.style.setProperty(`--shift`, `${change3}deg`);
}else if($('#slide3').hasClass('swiper-slide-active')){
  change = color[2];
  change2 = dark[2];
  change3 = hue[2];

    html.style.setProperty(`--theme`, `${change}`);
    html.style.setProperty(`--dark`, `${change2}`);
    html.style.setProperty(`--shift`, `${change3}deg`);
}else if($('#slide4').hasClass('swiper-slide-active')){
  change = color[3];
  change2 = dark[3];
  change3 = hue[3];

    html.style.setProperty(`--theme`, `${change}`);
    html.style.setProperty(`--dark`, `${change2}`);
    html.style.setProperty(`--shift`, `${change3}deg`);
}else{
  change = color[4];
  change2 = dark[4];
  change3 = hue[4];

    html.style.setProperty(`--theme`, `${change}`);
    html.style.setProperty(`--dark`, `${change2}`);
    html.style.setProperty(`--shift`, `${change3}deg`);
}
  }, 500);

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('shadow');
    }

    else {
          $('nav').removeClass('shadow');
    }
});


$('body').localScroll();
