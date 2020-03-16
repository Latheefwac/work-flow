$('.main-nav ul li:has(ul)').addClass('sub-menu');
$('.main-nav ul li:has(ul)').append("<i></i>");
$('.main-nav ul i').click(function() {
    $(this).parents('li').toggleClass('open');

})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});
// Slim Header
var header = 0;

function scrollHead() {
    if ($(document).scrollTop() > 10) {
        if (header == 0) {
            header = 1;
            $('html').addClass('slim');
        }
    } else {
        if (header == 1) {
            header = 0;
            $('html').removeClass('slim');
        }
    }
}
scrollHead();
$(window).scroll(scrollHead);


// multiple header
// var loc = window.location.href;
// var loc_spl = loc.split('/');
// if(loc_spl[loc_spl.length-1] == '' || loc_spl[loc_spl.length-1] == 'index.html' || loc_spl[loc_spl.length-1] == 'about-us.html'){
//    $('.rz-header').addClass('home-header');
// }
// else if(loc_spl[loc_spl.length-1] == 'newpage-1.html' || loc_spl[loc_spl.length-1] == 'newpage-2.html' || loc_spl[loc_spl.length-1] == 'newpage-3.html'){
//   $('.rz-header').addClass('admin-header');
//   $('.rz-header').addClass('inner-header');
// }
// else{
//   $('.rz-header').addClass('inner-header');
// }
// Slick slider
//   $('#exp-itemslide').slick({
//   draggable: false,
//   arrows: false,
//   dots: false,
//   infinite: false,
//   slidesToShow: 6,
//   slidesToScroll: 1,	
//   responsive: [
//     {
//         breakpoint: 1450,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,

//         }
//       },
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows:true
//         }
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           centerMode: true,
//         infinite: true,
//         centerPadding: '60px',
//         slidesToShow: 2,
//         speed: 500,
//         variableWidth: false,
//         arrows:true
//         }
//       },{
//         breakpoint: 767,
//         settings: {
//           centerMode: true,
//         infinite: true,
//         centerPadding: '60px',
//         slidesToShow: 1,
//         speed: 500,
//         variableWidth: false,
//         }
//       }]

// });