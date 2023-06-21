const board = document.getElementById('board');
const ctx = board.getContext("2d");
const BREITE = 75;
let game = new GameBoard();

function startGame(num){
    game.creatHindernise();
    game.setPlayer();
    game.setZiel(num);
    game.draw(ctx);
    BFS(game, game.felder[0], game.felder[num]);
}

startGame(210);


function startGameWithZiel(){
    let index = parseInt(document.getElementById('yKoo').value) * 15 + parseInt(document.getElementById('xKoo').value);
    console.log(index);
    if(index>0 && index < 224){
        ctx.clearRect(0, 0, board.width, board.height);
        game = new GameBoard();
        startGame(index);
    }
}