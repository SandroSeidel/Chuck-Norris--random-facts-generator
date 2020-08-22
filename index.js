async function getFact() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    const data = await response.json();
    const chuckFact = data.value;

    const textArea = document.querySelector('textarea');

    textArea.value = chuckFact;

}

const button = document.querySelector('button');

button.addEventListener('click', getFact);


