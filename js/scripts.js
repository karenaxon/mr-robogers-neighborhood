

function translator(number) {
  const robogersLanguage = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const keyArray = [1, 2, 3];
  let translation, index;

  if (number === 0) {
    return 0;
  } else if (keyArray.includes(number)){
    index = keyArray.indexOf(number);
    return translation = robogersLanguage[index]; 
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