const pieces = ['king', 'queen', 'knight'];

const getStrength = function(piece) {
    switch (piece) {
        case "king": return 10;
        case "queen": return 9;
        case "knight": return 3;
    }
}