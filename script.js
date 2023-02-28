let words = {
    Languages: [
        "javascript",
        "python",
        "kotlin",
        "swift",
        "typescript",
    ],

    Food: [
        "burger",
        "pizza",
        "taco",
        "donuts",
        "shawarma",
    ],

    Countries: [
        "america",
        "lebanon",
        "syria",
        "canada",
        "france",
    ],
}
const word_options = document.getElementsByClassName("Word_button");
const printed_word_to_guess = document.getElementById("Word_to_guess");
const keyboard_keys = document.getElementsByClassName("Key");
let option = '';
let word_to_guess = '';
let guessed_letters = [" "];
let game_started = false;
let lives = 6;

// Start game

// console.log(words.Languages)

for (let i=0; i < word_options.length; i++){
    word_options[i].addEventListener("click", () => {
        if(!game_started){
            option = word_options[i].textContent;
            word_to_guess = generateRandomWord();
            console.log(word_to_guess);
            printGeneratedWord();
        }
    });
}

const generateRandomWord = () => {

    if ( option == "Languages"){
        return words.Languages[Math.floor(Math.random() * words.Languages.length)];
    }
    if( option == "Food"){
        return words.Food[Math.floor(Math.random() * words.Food.length)];
    }
    if( option == "Countries"){
        return words.Countries[Math.floor(Math.random() * words.Countries.length)];
    }

}
word_to_guess = word_to_guess.split("");

const printGeneratedWord = (guessed_letters) => {
    // for (i=0; i < word_to_guess.length; i++){
    //     printed_word_to_guess.textContent += "_ ";
    // }
    printed_word_to_guess.textContent = " ";
    if(game_started){
        for (let i=0; i < word_to_guess.length; i++){
            if(guessed_letters.indexOf(word_to_guess[i]) >= 0){
                for(let j=0; j < guessed_letters.length; i++){
                    if(word_to_guess[i] == guessed_letters[j]){
                        printed_word_to_guess.textContent += letter_to_check;
                    }
                }
            }else{
                printed_word_to_guess.textContent += "_ ";
            }
    
        }
    }else{
        for (let i=0; i < word_to_guess.length; i++){
            printed_word_to_guess.textContent += "_ ";
            game_started = true;
        }
    }

}

for (let i=0; i < keyboard_keys.length; i++) {
    keyboard_keys[i].addEventListener("click", () => {
        if(game_started){
            let Letter = '';
            Letter = keyboard_keys[i].innerText;
            checkLetterInWord(Letter)
        }
    });
}

const checkLetterInWord = (Letter) => {
    if (word_to_guess.indexOf(Letter) >= 0){
        if(guessed_letters.indexOf(Letter) == -1){
            guessed_letters.push(Letter);
            console.log(guessed_letters);
        // printGeneratedWord(guessed_letters);
        }
    }
}