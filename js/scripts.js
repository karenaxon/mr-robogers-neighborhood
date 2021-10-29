

function translator(number) {
  const robogersLanguage = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const keyArray = [1, 2, 3];
  let translatedWords = [];
  let translation, index;

  for (let i = 0; i <= number; i++){
    if (i === 0) {
      translatedWords.push(0);
    } else if (keyArray.includes(i)){
      index = keyArray.indexOf(i);
      translatedWords.push(robogersLanguage[index]);  
    }
  }
  return translatedWords.join(", ");
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