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
let option = '';
let word_to_guess = '';
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

