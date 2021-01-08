$(function () {
  if ($(window).width() < 600) {
    $("#navbar").removeClass("fixed-top")
    $("#navbar").addClass("fixed-bottom")
  }
})

$(window).on('resize', function () {
  if ($(window).width() < 600) {
    $("#navbar").removeClass("fixed-top")
    $("#navbar").addClass("fixed-bottom")
  } else {
    $("#navbar").addClass("fixed-top")
    $("#navbar").removeClass("fixed-bottom")
  }
})