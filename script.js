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
let key = '';
let guessed_letters = [];
let game_started = false;

// Start game

// console.log(words.Languages)

for (let i=0; i < word_options.length; i++){
    word_options[i].addEventListener("click", () => {
        if(!game_started){
            option = word_options[i].textContent;
            game_started = true;
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

const printGeneratedWord = () => {
    word_to_guess = word_to_guess.split("");
    for (i=0; i < word_to_guess.length; i++){
        printed_word_to_guess.textContent += "_ ";
    }
}

