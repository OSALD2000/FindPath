const board = document.getElementById('board');
const ctx = board.getContext("2d");
const BREITE = 75;

const game = new GameBoard();
game.creatHindernise();
game.setPlayer();
game.setZiel();
game.draw(ctx);

currentNode = createTree(game.felder[0], game);
counter = 1;
while(true){
while (currentNode.childern[0]) {
    currentNode.value.player=true;
    currentNode=currentNode.childern[0];
}

game.draw(ctx);
if(currentNode.value.zielFeld){break;}
if(counter > 10){break;}
counter++;
currentNode = createTree(currentNode, game);

}