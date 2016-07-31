if (sessionStorage.getItem("lastLat") === null
    || sessionStorage.getItem("lastLong") === null){
  window.location.replace("./index.html");
}

$( document ).ready(function() {
    $(".burger").click(function() {
      if ($(".sidebar").hasClass('on')) {
        $(".sidebar").removeClass("on");
      } else {
        $(".sidebar").addClass("on");
      }
    });

    $(".burger").click(function() {
      if ($(".sidebar").hasClass('on')) {
        $("#burgerMenu").addClass('whiteBurger');
        $("#burgerMenu").removeClass("blackBurger");
      } else {
        $("#burgerMenu").addClass('blackBurger');
        $("#burgerMenu").removeClass("whiteBurger");
      }
    });



    $(".burger").on('click',function(e) {
  e.stopPropagation();
});

    $(document).click(function() {
      console.log($(".sidebar").hasClass('on'));
      if($(".sidebar").hasClass('on')) {
        $('.sidebar').removeClass("on");      
      }
    });
});
