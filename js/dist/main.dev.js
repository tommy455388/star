"use strict";

//gotop
var gotop = $('#gotop');
gotop.click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 500);
});

function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    gotop.fadeIn();
  } else {
    gotop.stop().fadeOut();
  }

  if (isMobile()) {
    console.log($(this).scrollTop());

    if ($(this).scrollTop() > 1800) {
      $('.vertical').addClass('long');
    } else {
      $('.vertical').removeClass('long');
    }
  } else {
    if ($(this).scrollTop() > 1150) {
      $('.vertical').addClass('long');
    } else {
      $('.vertical').removeClass('long');
    }
  }

  if ($(this).scrollTop() > 7000) {
    line.play();
  }
}); // scrollreveal

window.sr = ScrollReveal({
  reset: true
});
sr.reveal('.kv_content h1', {
  delay: 100,
  scale: 1,
  easing: 'ease-in-out'
});
sr.reveal('.kv_content h2', {
  delay: 400,
  scale: 1,
  easing: 'ease-in-out'
});
sr.reveal('.kv_content p', {
  delay: 700,
  scale: 1,
  easing: 'ease-in-out'
});
sr.reveal('.kv_content a', {
  delay: 1000,
  scale: 1,
  easing: 'ease-in-out'
});
sr.reveal('.second h3', {
  delay: 100,
  scale: 0.9,
  easing: 'ease-in-out'
});
sr.reveal('.third h3', {
  delay: 100,
  scale: 0.9,
  easing: 'ease-in-out'
});
sr.reveal('.fourth .chart img', {
  delay: 100,
  scale: 0.9,
  easing: 'ease-in-out'
});
sr.reveal('.fifth h3', {
  delay: 100,
  scale: 0.9,
  easing: 'ease-in-out'
});
sr.reveal('.fifth h4', {
  delay: 100,
  scale: 0.9,
  easing: 'ease-in-out'
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    responsive: {
      769: {
        items: 3,
        autoplay: false,
        mouseDrag: false
      }
    },
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true
  });
});
$('a.more').click(function () {
  $('.more_block').slideToggle();
});
$('.header_inner').click(function () {
  $(this).next().slideToggle();
  $(this).find('img').toggleClass('rotate');
});
$('.header_out').click(function () {
  $(this).next().slideToggle();
  $(this).find('.plus').toggle();
  $(this).find('.minus').toggle(); // $(this).closest('.faq_block').toggleClass('pb-20');
});
var params = {
  container: document.getElementById('bodymovin'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
};
var anim;
anim = bodymovin.loadAnimation(params);
lottie.loadAnimation({
  container: document.getElementById('ai01'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data2.json'
});
lottie.loadAnimation({
  container: document.getElementById('ai02'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data3.json'
}); // $(document).ready(function(){
//     $.getJSON('qa.json',function(data){
//         console.log('success');
//         $.each(data.basic,function(i,bas){
//             $('.header_inner').append('<h5>'+bas.index+' '+bas.question+'</h5>');
//         });
//     }).error(function(){
//         console.log('error');
//     });
// });

var mydata = data;
console.log(mydata.basic); //question

for (var ix = 1; ix <= Object.keys(mydata.basic).length; ix++) {
  $('#Q' + ix).append(mydata.basic[ix - 1].index + mydata.basic[ix - 1].question);
} //answer


for (var i = 1; i <= Object.keys(mydata.basic).length; i++) {
  $('#A' + i).append(mydata.basic[i - 1].answer);
} //hint


for (var j = 1; j <= Object.keys(mydata.basic).length; j++) {
  $('.content_inner').eq(j - 1).append(mydata.basic[j - 1].hint);
}

$('#A2-1').append('<p>' + mydata.basic[1].answer2 + '</p>'); //mobile
// if($(window).width() < 768){
//     $('.right').click(function () {
//         $(this).addClass('act');
//         $('.left').removeClass('act');
//     });
//     $('.left').click(function () {
//         $(this).addClass('act');
//         $('.right').removeClass('act');
//     })
// }
//slider
// $(document).ready(function() {
//     $('.slider2').owlCarousel({
//         items: 1,
//         loop: false,
//         center: true,
//         margin: 10,
//         callbacks: true,
//         URLhashListener: true,
//         autoplayHoverPause: true,
//         startPosition: 'URLHash',
//         navSpeed: 1000,
//         dots: false
//     });
// });
//
// $(document).ready(function() {
//     $('.slider').owlCarousel({
//         items: 1,
//         loop: false,
//         center: true,
//         margin: 10,
//         callbacks: true,
//         URLhashListener: true,
//         startPosition: 'URLHash',
//         nav: true,
//         navSpeed: 300,
//         mouseDrag: false,
//         touchDrag: false
//     });
// });
//see more
// $('.btn2').click(function () {
//     $('.second2 ul li p').css({
//         'height':'169px'
//     });
//     $(this).css({
//         'display':'none'
//     });
// });
//scroll
// var $link = $('.left_cloud,.right_cloud');
// var $link2 = $(' .fee');
//
//
// $link.click(function () {
//     var $x=$('.fourth2').offset().top;
//
//
//     $('html,body').animate({
//         scrollTop: $x-75
//     }, 300);
// });
//
// $link2.click(function () {
//
//     var $x2=$('.fourth3').offset().top;
//
//     $('html,body').animate({
//         scrollTop: $x2-75
//     }, 300);
// });