function numberSeparator(number) {
  console.log("In number separator with: " + number);
  return number.toString().split('').map(function(num){return parseInt(num)});
}

function translator(number) {
  const robogersLanguage = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const keyArray = [1, 2, 3];
  let translatedNumbers = [];
  let translation, index;

  for (let i = 0; i <= number; i++){
    if(i >= 10){
      translatedNumbers.push(numberSeparator(i));
    }
    // }else if (i === 0) {
    //   translatedNumbers.push(0);
    // } else if (keyArray.includes(i)){
    //   index = keyArray.indexOf(i);
    //   translatedNumbers.push(robogersLanguage[index]);  
    // } else {
    //   translatedNumbers.push(i);
    // }
  }
  return translatedNumbers.join(", ");
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