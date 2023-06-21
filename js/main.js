const board = document.getElementById('board');
const ctx = board.getContext("2d");
const BREITE = 75;

const game = new GameBoard();
game.creatHindernise();
game.setPlayer();
game.setZiel(210);
game.draw(ctx);

BFS(game, game.felder[0], game.felder[210]);