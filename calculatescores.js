function calculate() {

    let Guesses = parseFloat(document.getElementById('inputC1').value);
    let Greens = parseFloat(document.getElementById('inputC2').value);
    let Yellows = parseFloat(document.getElementById('inputC3').value);

    let Wordle = Guesses * (1/2*Greens + 1/Yellows);
    let One = parseFloat(document.getElementById('inputCOne').value);

    let scoreC = Math.round((Math.sqrt((Wordle)*(Wordle) + (One)*(One)) + Number.EPSILON) * 100) / 100;

    Guesses = parseFloat(document.getElementById('inputM1').value);
    Greens = parseFloat(document.getElementById('inputM2').value);
    Yellows = parseFloat(document.getElementById('inputM3').value);

    Wordle = Guesses * (1/2*Greens + 1/Yellows);

    let scoreM = Math.round((Math.sqrt((Wordle)*(Wordle) + (One)*(One)) + Number.EPSILON) * 100) / 100;

    document.getElementById('scoresC').textContent = 'Ciara score: ' + scoreC;
    document.getElementById('scoresM').textContent = 'Matthew score: ' + scoreM;

    let winner;

    if (scoreC < scoreM) {
        winner = 'Ciara wins!';
    }
    else if (scoreC > scoreM) {
        winner = 'Matthew wins!';
    }
    else {
        winner = 'Draw! (wow what are the chances)';
    }

    document.getElementById('result').textContent = winner;

}

