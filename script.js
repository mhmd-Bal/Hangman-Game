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
const hangedman = document.getElementById("Hangedman");
let option = '';
let word_to_guess = '';
let guessed_letters = [];
let game_started = false;
let lives = 6;
let is_in_word = false;

// Start game


for (let i=0; i < word_options.length; i++){
    word_options[i].addEventListener("click", () => {
        if(!game_started){
            option = word_options[i].textContent;
            word_to_guess = generateRandomWord();
            word_options[i].classList.add("Disabled");
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

const printGeneratedWord = () => {
    if(game_started){
        printed_word_to_guess.textContent = "";
        for (let i=0; i < word_to_guess.length; i++){
            let letter = word_to_guess[i];
            if(guessed_letters.indexOf(letter) >= 0){
                for(let j=0; j < guessed_letters.length; j++){
                    if(letter == guessed_letters[j]){
                        printed_word_to_guess.textContent += letter;
                        break;
                    }
                }
            }else{
                printed_word_to_guess.textContent += "_ ";
            }
    
        }
    }else{
        printed_word_to_guess.textContent = "";
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
            keyboard_keys[i].classList.add("Disabled");
        }
    });
}

const checkLetterInWord = (Letter) => {
    if (word_to_guess.indexOf(Letter) >= 0){
        if(guessed_letters.indexOf(Letter) == -1){
            guessed_letters.push(Letter);
            printGeneratedWord();
            is_in_word = true;
            if(gameIsWon()){
                setTimeout(() => {
                    printed_word_to_guess.textContent = "YOU WON!";; 
                }, 500);
                setTimeout(() => {
                    gameReset(); 
                }, 3000);
            }
        }
    }else{
        is_in_word = false;
        if(guessed_letters.indexOf(Letter) == -1){
            lives -= 1;
            checkIfAlive();
        }
    }
}

const checkIfAlive = () => {
    if(lives == 5){
        hangedman.src = "Images/1.jpg";
    }else if(lives == 4){
        hangedman.src = "Images/2.jpg";
    }else if(lives == 3){
        hangedman.src = "Images/3.jpg";
    }else if(lives == 2){
        hangedman.src = "Images/4.jpg";
    }else if(lives == 1){
        hangedman.src = "Images/5.jpg";
    }else if(lives == 0){
        hangedman.src = "Images/6.jpg";
        gameLost();
        setTimeout(() => {
            gameReset(); 
        }, 3000);
    }
}

const gameIsWon = () => {
    let won = true
    for (let i=0; i < word_to_guess.length; i++){
        let letter = word_to_guess[i];
        if(guessed_letters.indexOf(letter) >= 0){
            continue;
        }else{
            won = false;
            break;
        }
    }
    return won;
}

const gameLost= () => {
    printed_word_to_guess.textContent = "YOU LOST!";
}


const gameReset = () => {
    for (let i=0; i < keyboard_keys.length; i++){
        keyboard_keys[i].classList.remove("Disabled");
    }
    for (let j=0; j < word_options.length; j++){
        word_options[j].classList.remove("Disabled");
    }
    game_started = false;
    lives = 6;
    hangedman.src = "Images/0.jpg";
    guessed_letters = [];
    printed_word_to_guess.textContent = "";
}