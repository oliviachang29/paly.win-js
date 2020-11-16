
function initJS() {
  
  $(".lazy").unveil(100, function() {
    $(this).on('load', function() {
      this.style.opacity = 1;
    });
  });

}

// executes this stuff before load
$(function() {
  const swup = new Swup();
  swup.on('contentReplaced', function() {
      initJS()
  });
});

initJS()