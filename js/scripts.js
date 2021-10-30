function numberSeparator(number) {
  return number.toString().split('').map(function(num){return parseInt(num)});
}

function translator(number) {
  const robogersLanguage = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const keyArray = [1, 2, 3];
  let translatedNumbers = [];
  let translation, index;

  for (let i = 0; i <= number; i++){
    let separatedNumbers;

    if (i === 0) {
      translatedNumbers.push(0);
    } else if (i >= 10) {
      separatedNumbers = numberSeparator(i);
      if (separatedNumbers.includes(1) || separatedNumbers.includes(2) ||     separatedNumbers.includes(3)){
        biggestNumber = Math.max(...separatedNumbers);
        if (keyArray.includes(biggestNumber)){
          index = keyArray.indexOf(biggestNumber);
          translatedNumbers.push(robogersLanguage[index]); 
        } else {
          translatedNumbers.push(separatedNumbers.join(""));
        }
      }
    } else if (keyArray.includes(i)){
      index = keyArray.indexOf(i);
      translatedNumbers.push(robogersLanguage[index]);  
    } else {
      translatedNumbers.push(i);
    }
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
    $("form").trigger("reset");
    
  });
  
});