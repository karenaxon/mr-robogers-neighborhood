$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#output").hide();

    const inputNumber = $("input#number").val();
    console.log(inputNumber);

    $("#number-translated").text(inputNumber);
    $("#output").show();

  });

});