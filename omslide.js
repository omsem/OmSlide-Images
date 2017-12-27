$("#omslide-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#omslide-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#omslide-slideshow');
}, 3000);
