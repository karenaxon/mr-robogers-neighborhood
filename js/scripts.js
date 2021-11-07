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

      if (separatedNumbers.includes(1) || separatedNumbers.includes(2) ||       separatedNumbers.includes(3)){
        biggestNumber = Math.max(...separatedNumbers);

        if (keyArray.includes(biggestNumber)){
          index = keyArray.indexOf(biggestNumber);
          translatedNumbers.push(robogersLanguage[index]); 
        } else if (keyArray.includes(separatedNumbers[0])){
          index = keyArray.indexOf(separatedNumbers[0]);
          translatedNumbers.push(robogersLanguage[index]);
        } else {
          index = keyArray.indexOf(separatedNumbers[1]);
          translatedNumbers.push(robogersLanguage[index]);
        }

      }  else{
          translatedNumbers.push(separatedNumbers.join(""));
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

  $("form#number").keyup(function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
      $("form").submit();
    }
  })
    
  $("form").submit(function(event){
    event.preventDefault();
    $("#output").hide();

    let input = $("input#number").val();
    const originalNumber = parseInt(input);
    let translation = translator(originalNumber);
    
    if (!input.match(/^[0-9]+$/)) {
      alert("Please enter a number.");
      $("#output").hide();
      location.reload();
    }

    $("#number-translated").text(translation);
    $("#display-original-number").text(originalNumber);
    $("#output").show();
    $("form").trigger("reset");
  });
});