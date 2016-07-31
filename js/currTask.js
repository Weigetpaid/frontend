

var data = JSON.parse(sessionStorage.getItem('data'));

if (data.active == true) {
  //$('#workModal ')
  $('#helpTitle').text(data.title);
  $('#helpDescription').text(data.description);
  $('#helpPhone').text(data.phonenumber);
  $('#helpName').text(data.name);
  $('#workIcon').addClass('activeNow');

}
