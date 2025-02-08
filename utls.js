const pieces = ['king', 'queen'];

const getStrength = function(piece) {
    switch (piece) {
        case "king": return 10;
        case "queen": return 9;
    }
}

// fixed a bug here
const movePiece = function(piece) {
    let moves = [[0, 0]];
    switch(piece) {
        case "king": moves = [[+1, 0], [+1, -1], [0, -1], [-1, -1], [-1, 0], [-1, +1], [0, +1], [+1, +1]];
        case "knight": moves = [[+1, +2], [-1, +2], [-2, +1], [-2, -1], [+1, -2], [-1, -2], [+2, +1], [+2, -1]];
    }
    return moves;
}

// add new feature
// fix bug in new feature