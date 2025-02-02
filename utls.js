const pieces = ['king', 'queen'];

const getStrength = function(piece) {
    switch (piece) {
        case "king": return 10;
        case "queen": return 9;
    }
}