 $(document).ready(function () {
    var banner = $('#banner');
    function alturaBanner(){
      var viewPortAltura = $(window).height(); 
      banner.css('height', viewPortAltura);
    }
    alturaBanner();
  
    $(window).resize(alturaBanner);
  });
  