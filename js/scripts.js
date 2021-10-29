

function translator(number) {
  if (number === 0) {
    return 0;
  }

}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#output").hide();

    const originalNumber = parseInt($("input#number").val());
    let translation = translator(originalNumber);
    

    $("#number-translated").text(translation);
    $("#output").show();

  });

});