function calculate() {

    let guesses = parseFloat(document.getElementById('inputC1').value);
    let greens = parseFloat(document.getElementById('inputC2').value);
    let yellows = parseFloat(document.getElementById('inputC3').value);

    let wordle = guesses * (1/2*greens + 1/yellows);
    let one = parseFloat(document.getElementById('inputCOne').value);

    let scoreC = Math.round((Math.sqrt((wordle)*(wordle) + (one/2)*(one/2)) + Number.EPSILON) * 100) / 100;

    guesses = parseFloat(document.getElementById('inputM1').value);
    greens = parseFloat(document.getElementById('inputM2').value);
    yellows = parseFloat(document.getElementById('inputM3').value);

    wordle = guesses * (1/2*greens + 1/yellows)
    one = parseFloat(document.getElementById('inputMOne').value);

    let scoreM = Math.round((Math.sqrt((wordle)*(wordle) + (one/2)*(one/2)) + Number.EPSILON) * 100) / 100;

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

