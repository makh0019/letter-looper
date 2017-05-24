/*global console, prompt, document*/

//Declare Variables
var letter,
    i,
    k;

//Getting the value for letter
while (!letter) {
    letter = prompt("Enter a character?");
}

//Printing Variable
for (i = 0; i < 10; i += 1) {
    for (k = 0; k <= i; k += 1) {
        document.write(letter);
    }
    document.write("<br>");
}
