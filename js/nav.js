$( document ).ready(function() {
    $(".burger").click(function() {
      if ($(".sidebar").hasClass('on')) {
        $(".sidebar").removeClass("on");
      } else {
        $(".sidebar").addClass("on");
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