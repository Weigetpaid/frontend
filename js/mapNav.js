

$( document ).ready(function() {
    $(".burger.right").click(function() {
      $(".sidebar.left").removeClass("on");
      $(".burger.left").addClass('blackBurger');
      $(".burger.left").removeClass('whiteBurger');
      if ($(".sidebar.right").hasClass('on')) {
        $(".sidebar.right").removeClass("on");
      } else {
        $(".sidebar.right").addClass("on");
      }
    });

    $(".burger.right").click(function() {
      if ($(".sidebar.right").hasClass('on')) {
        $(".burger.right").addClass('whiteBurger');
        $(".burger.right").removeClass("blackBurger");
      } else {
        $(".burger.right").addClass('blackBurger');
        $(".burger.right").removeClass("whiteBurger");
      }
    });



    $(".burger.right").on('click',function(e) {
  e.stopPropagation();
});

    $(document).click(function() {
      if($(".sidebar").hasClass('on')) {
        $(".burger").addClass('blackBurger');
        $(".burger").removeClass('whiteBurger');
        $('.sidebar').removeClass("on");
      }
    });
});
