//gotop
var gotop = $('#gotop');
gotop.click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});

//cardbox
$('.card>img').click(function(){
    let thisSrc = $(this).attr('src');
    let activeSrc = $('.card.active>img').attr('src');
    let name = $(this).attr('data-name');
    let activeName = $('.card.active>img').attr('data-name');
    let card = $(this).attr('data-card');
    let activeCard = $('.card.active>img').attr('data-card');
    let detail = $(this).attr('data-detail');
    let activeDetail = $('.card.active>img').attr('data-detail');
    $('.card.active>img').attr('src', thisSrc).attr('data-name', name).attr('data-card', card).attr('data-detail', detail).hide().fadeIn(800);
    $(this).attr('src', activeSrc).attr('data-name', activeName).attr('data-card', activeCard).attr('data-detail', activeDetail);
    $('.markbox h4').html(name+'<br><span>'+card+'</span>')
    $('.markbox h4>span').text(card);
    $('.markbox p').text(detail);
    $('.markbox').hide().delay(500).fadeIn(800);
    $(this).closest('.smallCard').find('p').text(activeName);
})

// $('.smallCard img').hover(function(){
//     $(this).next().css('opacity',1)
//     $(this).parent().find('p').text($(this).attr('data-name'))
// }, function ( ) { 
//     $(this).next().css('opacity',0)
// })

// scrollreveal
window.sr = ScrollReveal({ reset: true });
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
sr.reveal('.kv_content ul', {
    delay: 700,
    scale: 1,
    easing: 'ease-in-out'
});
sr.reveal('.kv_content .btn_block', {
    delay: 1000,
    scale: 1,
    easing: 'ease-in-out'
});

AOS.init();


$(".tableBox").mCustomScrollbar({
    axis:"x",
});


$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


