
function GameBoard(anzahlFelder, widthFelder){
    this.anzahlFelder = anzahlFelder || 225;
    this.widthFelder = widthFelder || 75;
    this.felder = Array.from({length:  this.anzahlFelder},(feld, index) => feld =new ReacFeld(index));
}

GameBoard.prototype.draw = function(ctx){
        this.felder.forEach(feld => {
            if(feld.hinderis){color = 'red'}
            else if(feld.player){color = 'green'}
            else if(feld.zielFeld){color = 'black'}
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
        if(i%2 == 0 ){
            this.felder[i].hinderis=true;
        }
        if( i%5 == 0 ) this.felder[i].hinderis=false;
    }
    bucktSort(this.felder);
}

GameBoard.prototype.setPlayer = function(){
    this.felder[0].player=true;
    this.felder[0].hinderis=false;
    return this.felder[0];
}

GameBoard.prototype.setZiel = function(){
    this.felder[224].zielFeld=true;
    this.felder[224].hinderis=false;
}

// Feld 
function ReacFeld(index, width){
    this.index = index;

    this.hinderis =false;
    this.player =false;
    this.zielFeld =false;

    this.x = (index % 15);
    this.y = parseInt(index/15);
    this.width = width || 75;    
}

