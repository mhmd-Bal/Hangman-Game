let Words = {
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

const lang = document.getElementsByClassName("Word_button");
// console.log(lang[1]);

for (let i=0; i < lang.length; i++){
    lang[i].addEventListener("click", function(e){
        console.log(this.innerHTML);
    });
}