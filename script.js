const chessPieces = {
    'rook-white-1': 'a1',
    'knight-white-1': 'b1',
    'bishop-white-1': 'c1',
    'queen-white': 'd1',
    'king-white': 'e1',
    'bishop-white-2': 'f1',
    'knight-white-2': 'g1',
    'rook-white-2': 'h1',
    'pawn-white-1': 'a2',
    'pawn-white-2': 'b2',
    'pawn-white-3': 'c2',
    'pawn-white-4': 'd2',
    'pawn-white-5': 'e2',
    'pawn-white-6': 'f2',
    'pawn-white-7': 'g2',
    'pawn-white-8': 'h2',
    'rook-black-1': 'a8',
    'knight-black-1': 'b8',
    'bishop-black-1': 'c8',
    'queen-black': 'd8',
    'king-black': 'e8',
    'bishop-black-2': 'f8',
    'knight-black-2': 'g8',
    'rook-black-2': 'h8',
    'pawn-black-1': 'a7',
    'pawn-black-2': 'b7',
    'pawn-black-3': 'c7',
    'pawn-black-4': 'd7',
    'pawn-black-5': 'e7',
    'pawn-black-6': 'f7',
    'pawn-black-7': 'g7',
    'pawn-black-8': 'h7',
};

for (const [piece, square] of Object.entries(chessPieces)) {
    // get the square element on the chess board
    const squareElement = document.getElementById(`square-${square}`);
    // create a new element to represent the piece
    const pieceElement = document.createElement('img');
    pieceElement.classList.add('piece-image', piece);
    if(piece.split("-")[0] === "queen"){
        if(piece.split("-")[1] === "white")
            pieceElement.src = '/images/whites/queen.png'
            else pieceElement.src = '/images/Blacks/queen.png'
        squareElement.appendChild(pieceElement);
    }
}

for (const [piece, square] of Object.entries(chessPieces)) {
    // get the square element on the chess board
    const squareElement = document.getElementById(`square-${square}`);
    // create a new element to represent the piece
    const pieceElement = document.createElement('img');
    pieceElement.classList.add('piece-image', piece);
    if(piece.split("-")[0] === "king"){
        if(piece.split("-")[1] === "white")
            pieceElement.src = '/images/whites/king.png'
            else pieceElement.src = '/images/Blacks/king.png'
        squareElement.appendChild(pieceElement);
    }
}

for (const [piece, square] of Object.entries(chessPieces)) {
    // get the square element on the chess board
    const squareElement = document.getElementById(`square-${square}`);
    // create a new element to represent the piece
    const pieceElement = document.createElement('img');
    pieceElement.classList.add('piece-image', piece);
    if(piece.split("-")[0] === "pawn"){
        if(piece.split("-")[1] === "white")
            pieceElement.src = '/images/whites/pawn.png'
            else pieceElement.src = '/images/Blacks/pawn.png'
        squareElement.appendChild(pieceElement);
    }
}

for (const [piece, square] of Object.entries(chessPieces)) {
    // get the square element on the chess board
    const squareElement = document.getElementById(`square-${square}`);
    // create a new element to represent the piece
    const pieceElement = document.createElement('img');
    pieceElement.classList.add('piece-image', piece);
    if(piece.split("-")[0] === "bishop"){
        if(piece.split("-")[1] === "white")
            pieceElement.src = '/images/whites/bishop.png'
            else pieceElement.src = '/images/Blacks/bishop.png'
        squareElement.appendChild(pieceElement);
    }
}

for (const [piece, square] of Object.entries(chessPieces)) {
    // get the square element on the chess board
    const squareElement = document.getElementById(`square-${square}`);
    // create a new element to represent the piece
    const pieceElement = document.createElement('img');
    pieceElement.classList.add('piece-image', piece);
    if(piece.split("-")[0] === "rook"){
        if(piece.split("-")[1] === "white")
            pieceElement.src = '/images/whites/rook.png'
            else pieceElement.src = '/images/Blacks/rook.png'
        squareElement.appendChild(pieceElement);
    }
}

for (const [piece, square] of Object.entries(chessPieces)) {
    // get the square element on the chess board
    const squareElement = document.getElementById(`square-${square}`);
    // create a new element to represent the piece
    const pieceElement = document.createElement('img');
    pieceElement.classList.add('piece-image', piece);
    if(piece.split("-")[0] === "knight"){
        if(piece.split("-")[1] === "white")
            pieceElement.src = '/images/whites/knight.png'
            else pieceElement.src = '/images/Blacks/knight.png'
        squareElement.appendChild(pieceElement);
    }
}
