

$(document).ready(function(){
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
    pauseOnDotsHover: true,
    speed: 200,
  });
  $('#to-work').click(function() {
    var x = $('#at-work').position();
    var y = x.top - 54;
    $('html, body').animate({ scrollTop: y }, 1000);
    return false;
  });
  $('#to-about').click(function() {
    var x = $('#at-about').position();
    var y = x.top - 54;
    $('html, body').animate({ scrollTop: y }, 1000);
    return false;
  });
  $('#logo').click(function() {
    var x = $('#at-about').position();
    var y = x.top - 54;
    $('html, body').animate({ scrollTop: y }, 1000);
    return false;
  });
})
