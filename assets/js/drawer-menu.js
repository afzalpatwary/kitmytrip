
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }


$(document).ready(function () {
  $(".mobileNavTogler , .overlayView , .btn-mySidenav-close").click(function () {
    $("#mySidenav").toggleClass("inView");
    $(".overlayView").toggleClass("opacity1");
    $("body").toggleClass("OverFlowHiden");
  });

});


