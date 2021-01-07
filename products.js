$(function () {
  if ($(window).width() < 1000) {
    $('#imgtwo').addClass('order-last');
    $('#imgfour').addClass('order-last');
  }
});

$(window).on('resize', function () {
  if ($(window).width() < 1000) {
    $('#imgtwo').addClass('order-last');
    $('#imgfour').addClass('order-last');
  } else {
    $('#imgtwo').removeClass('order-last');
    $('#imgfour').removeClass('order-last');
  }
});