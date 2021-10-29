# Mr. Roboger's Neighborhood
#### By Karen Axon
Web application that takes a number from the user and returns a range of numbers from 0 to the number entered by the user with the following substitutions made within the returned range:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
  
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. For example:
* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "Won't you be my neighbor?"

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Setup/Installation

* Click on the link to my [repository](https://github.com/karenaxon/mr-robogers-neighborhood).
* Click on the green "Code" button and copy the repository URL.
* Open your terminal and use the command: git clone https://github.com/karenaxon/mr-robogers-neighborhood.git into the directory you would like to clone the repository.
* Open in your favorite text editor to view code and make changes.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Known Bugs

* None

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) October, 2021 - Karen Axon

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Contact Information:

<h3>Karen Axon</h3>

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/karenaxon)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kaxon)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

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