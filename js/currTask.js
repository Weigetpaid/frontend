

var data = JSON.parse(sessionStorage.getItem('data'));

if (data.active == true) {
  //$('#workModal ')
  $('#helpTitle').text(data.title);
  $('#helpDescription').text(data.description);
  $('#helpPhone').text(data.phonenumber);
  $('#helpName').text(data.name);
  $('#workIcon').addClass('activeNow');
  $('#workIcon').click(function(){
    $('#helpOutModel').modal('show');
  });
}

function removeActive() {
  data.active = false;
  sessionStorage.setItem('data', JSON.stringify(data));
  $('#workIcon').removeClass('activeNow');
  $('#helpOutModel').modal('hide');
}
