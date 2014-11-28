$(document).ready(function(){
  $(".list li").click(function() {
    scrollHeight = ($(this).index()) * ($("section").height() + 2);
    $("html, body").animate({
        scrollTop: scrollHeight
    }, 600);
    return false;
  });
});