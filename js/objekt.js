function GameBoard(anzahlFelder, widthFelder){
    this.anzahlFelder = anzahlFelder || 225;
    this.widthFelder = widthFelder || 75;
    this.felder = Array.from({length:  this.anzahlFelder},(feld, index) => feld = new ReacFeld(index));
}

GameBoard.prototype.draw = function(ctx){
        ctx.clearRect(0, 0, board.width, board.height);
        this.felder.forEach(feld => {
            if(feld.hinderis){color = 'red'}
            else if(feld.player){color = 'green'}
            else if(feld.zielFeld){color = 'black'}
            else if(feld.visted){color = '#c7ffc8'}
            else color ='white';

            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.translate(BREITE*feld.x, BREITE*feld.y);
            ctx.fillStyle = color;
            ctx.rect(0, 0, BREITE, BREITE);
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        })
}

GameBoard.prototype.creatHindernise = function(){
    for (i = this.felder.length - 1; i > 0; i--) {
        randomNum = Math.floor(Math.random() * (i + 1));
        [this.felder[i], this.felder[randomNum]] = [this.felder[randomNum], this.felder[i]]
        if(i%2 == 0 )  this.felder[i].hinderis=true;
        else if( i%6 == 0 ) this.felder[i].hinderis=false;
        else if( i%7 == 0 ) this.felder[i].hinderis=false;
        else if( i%9 == 0 ) this.felder[i].hinderis=false;

    }
    bucktSort(this.felder);
}

GameBoard.prototype.setPlayer = function(){
    this.felder[0].player=true;
    this.felder[0].hinderis=false;
    return this.felder[0];
}

GameBoard.prototype.setZiel = function(num){
    this.felder[num].zielFeld=true;
    this.felder[num].hinderis=false;
}

// Feld 
function ReacFeld(index, width){
    this.index = index;
    this.parent;
    this.hinderis =false;
    this.player =false;

    this.visted =false;

    this.zielFeld =false;

    this.x = (index % 15);
    this.y = parseInt(index/15);

    this.width = width || 75;    
}

