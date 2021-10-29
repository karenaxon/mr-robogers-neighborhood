## Tests / Specifications

### Describe: translator()
<br>

|Test #1:         |It should return 0 if the input from the user is 0.|
|:---             | :---                                                |
|Code:            |translator(0);|
|Expected Output: | 0 |
<br>

|Test #2:         |It should return "Beep!" if the input from the user is 1.|
|:---             | :---                                                |
|Code:            |translator(1);|
|Expected Output: |Beep! |
<br>

|Test #3:         |It should return "Boop!" if the input from the user is 2.|
|:---             | :---                                                |
|Code:            |translator(2);|
|Expected Output: |Boop! |
<br>

|Test #4:         |It should return "Won't you be my neighbor?" if the input from the user is 3.|
|:---             | :---                                                |
|Code:            |translator(3);|
|Expected Output: |Won't you be my neighbor? |
<br>

|Test #5:         |It should return 0, "Beep!", "Boop", "Won't you be my neighbor?" if the input from the user is 3.|
|:---             | :---                                                |
|Code:            |translator(3);|
|Expected Output: |0, Beep!, Boop, Won't you be my neighbor? |
<br>

|Test #6:         |It should return 0, "Beep!", "Boop", "Won't you be my neighbor?", 4 if the input from the user is 4.|
|:---             | :---                                                |
|Code:            |translator(4);|
|Expected Output: |0, Beep!, Boop, Won't you be my neighbor?, 4 |
<br>

|Test #7:         |It should return 0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", 10 if the input from the user is 10.|
|:---             | :---                                                |
|Code:            |translator(4);|
|Expected Output: |0, Beep!, Boop, Won't you be my neighbor?, 4 |
<br>

### Describe: numberSeparator()
<br>

|Test #1:         |It should return 1,0 (separated) if the argument passed in is 10.|
|:---             | :---                                                |
|Code:            |translator(0);|
|Expected Output: | 1 , 0 |
<br>