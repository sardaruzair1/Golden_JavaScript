let number = 10;
let guess = prompt('Guess a number');
if (guess == number) {
    document.write( "your guess is write")
}else if(guess < number ){
    document.write("Try again "+ guess + " is less then actual number" );
}else if(guess > number ){
    document.write("Try again "+ guess+" is greater than then actual number" );
}