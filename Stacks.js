/* Stacks! */
//functions of a stack are ;
//Push - for placing data into a stack
//Pop- for removing the top element of a stack
//Peak - for dispalying the top element of a stack
//Length or Size - for determining ho many elements are on a stack

var letters = ""; //this is our stack

var word = "racecar";

var rword = "";

//put letters of the word into a stack
for (var i =0; i <word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in reverse oder
for (var i =0; i <word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " Is a palindrome.");
}
else {
     conole.log(word + "Not a palindrome."); 
}