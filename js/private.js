// $(document).ready(function() {
//     if ($('.back-top').length) {
//         var scrollTrigger = 300,
//             backToTop = function () {
//                 var scrollTop = $(window).scrollTop();
//                 if (scrollTop > scrollTrigger) {
//                     $('.back-top').addClass('show');

//                 } else {
//                     $('.back-top').removeClass('show');
//                 }
//             };
//         backToTop();
//         $(window).on('scroll', function () {
//             backToTop();
//         });

//         $('.back-top').on('click', function (e) {
//             e.preventDefault();
//             $('html,body').animate({
//                 scrollTop: 0
//             }, 700);
//         });
//     }
// })

// $('.list-feedback .row').slick({
//     autoplay: false,
//     arrow: true,
//     dots: true,
//     slidesToShow: 2,
//     slidesToScroll: 1, 
//     prevArrow: '',
//     nextArrow: '',
//     responsive: [
//         {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ]
// });