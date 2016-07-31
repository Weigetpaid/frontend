

var data = JSON.parse(sessionStorage.getItem('data'));

if (data.active == true) {
  //$('#workModal ')
  $('#workIcon').addClass('on');
}
