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

for (let i=0; i < word_options.length; i++){
    word_options[i].addEventListener("click", () => {
        if(!game_started){
            option = word_options[i].textContent;
            game_started = true;
            console.log(option);
        }
    });
}

