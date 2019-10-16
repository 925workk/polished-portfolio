$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 600) {
      $('.navbar').addClass('fixed-top');
      $('.nav-section').fadeIn(500);
  } else {
      $('.navbar').removeClass('fixed-top');
  }
  var scrollPos = $(document).scrollTop();
    $('#nav_bar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav_bar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
});
});
