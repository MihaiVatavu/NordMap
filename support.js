
$(document).click(function (e) {
  const searchbox = $("#search");
  const icon = $("i");

  if (searchbox.is(e.target)) {
    icon.addClass("hide")
  } else {
    icon.removeClass("hide");
    searchbox.val("")

  }
})

