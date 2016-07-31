if (sessionStorage.getItem("lastLat") === null
    || sessionStorage.getItem("lastLong") === null){
  window.location.replace("./index.html");
}

$( document ).ready(function() {
    $(".burger.left").click(function() {
      $(".sidebar.right").removeClass("on");
      $(".burger.right").addClass('blackBurger');
      $(".burger.right").removeClass('whiteBurger');
      if ($(".sidebar.left").hasClass('on')) {
        $(".sidebar.left").removeClass("on");
      } else {
        $(".sidebar.left").addClass("on");
      }
    });

    $(".burger.left").click(function() {
      if ($(".sidebar.left").hasClass('on')) {
        $("#burgerMenu").addClass('whiteBurger');
        $("#burgerMenu").removeClass("blackBurger");
      } else {
        $("#burgerMenu").addClass('blackBurger');
        $("#burgerMenu").removeClass("whiteBurger");
      }
    });



    $(".burger.left").on('click',function(e) {
  e.stopPropagation();
});

    $(document).click(function() {
      console.log($(".sidebar").hasClass('on'));
      if($(".sidebar").hasClass('on')) {
        $(".burger").addClass('blackBurger');
        $(".burger").removeClass('whiteBurger');
        $('.sidebar').removeClass("on");
      }
    });
});
