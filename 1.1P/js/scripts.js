function changeText() {

    let textsArray = [
        "Welcome to SIT725",
        "Learning JavaScript",
        "Software Engineering",
        "Welcome to Programming",
        "Let's Build Something"
    ];

    let number = getRandomNumberBetween(0, textsArray.length - 1);

    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}