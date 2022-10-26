$('#account-form').validate({
  rules: {
      confirm: {
          equalTo: "#password"
      }
  }
});
$('#profile-form').validate();
$('#form-1').validate();
$('#jquery-steps').steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  onStepChanging: function (event, currentIndex, newIndex)
  {
    if (newIndex<currentIndex){
      return true;
    }
    var form=$('.body.current form');     
    if (form.length==1){
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    }
    return true;
  },
  onFinishing: function (event, currentIndex)
  {
    
    var form=$('.body.current form');     
    if (form.length==1){
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    }
    return true;
  },
  onFinished: function (event, currentIndex)
  {
      alert("Submitted!");
  }
});