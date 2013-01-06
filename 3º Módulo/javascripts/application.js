$(document).ready(function() {
  $("#comidaModal").click(function() {
    $("#comida").reveal();
  });
  $("#comida1Modal").click(function() {
    $("#comida1").reveal();
  });
  $("#comida2Modal").click(function() {
    $("#comida2").reveal();
  });
  $("#comida3Modal").click(function() {
    $("#comida3").reveal();
  });
  $("#comida4Modal").click(function() {
    $("#comida4").reveal();
  });
  $("#comida5Modal").click(function() {
    $("#comida5").reveal();
  });
  $("#desayuno1Modal").click(function() {
    $("#desayuno1").reveal();
  });
  $("#desayuno2Modal").click(function() {
    $("#desayuno2").reveal();
  });
  $("#desayuno3Modal").click(function() {
    $("#desayuno3").reveal();
  });
  $("#desayuno4Modal").click(function() {
    $("#desayuno4").reveal();
  });
  $("#desayuno5Modal").click(function() {
    $("#desayuno5").reveal();
  });
});

function check(form)/*function to check userid & password*/
{
  /*the following code checkes whether the entered userid and password are matching*/
  if(form.userid.value == "padre" && form.pswrd.value == "12345"){
    window.open('main.html','_self');/*opens the target page while Id & password matches*/
  }else if(form.userid.value == "admin" && form.pswrd.value == "12345"){
    window.open('main_admin.html','_self');/*opens the target page while Id & password matches*/
  }else{
    alert("Verifique sus datos");/*displays error message*/
  }
}
