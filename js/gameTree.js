const [UP, DOWN, LEFT, RIGHT, UP_RIGHT, UP_LEFT, DOWN_LEFT, DOWN_RIGHT] = 
[{x:0, y:-1},{x:0, y:1},{x:-1, y:0},{x:1, y:0},{x:1, y:-1},{x:-1, y:-1},{x:-1, y:1},{x:1, y:1}]
const moves = [UP, DOWN, LEFT, RIGHT, UP_RIGHT, UP_LEFT, DOWN_LEFT, DOWN_RIGHT];

// Node 
function Node(value){
    this.value = value;
    this.cooardinaten = {x: this.value.x, y: this.value.y}
    this.distance = distance_between(this.cooardinaten, game.felder[224]);
    this.childern = [];
}
Node.prototype.addChild = function(child){
    this.childern.push(child);
}

function createTree(node, game){
    let root;
    if(!(node instanceof Node)){ root = new Node(node);}
    else root = node;
    _createTree(root, game, 0);
    return root;
}

function _createTree(currentNode, game, depth){
    if(depth > 3){ return;}

    const currentX = currentNode.value.x;
    const currentY = currentNode.value.y;

    let possibleChildern = getPossibleChildern(currentX, currentY, game); 

    possibleChildern = possibleChildern.map(squer =>new Node(squer));

    possibleChildern.sort((a, b) => a.distance-b.distance);
    possibleChildern.forEach(child => {
        currentNode.addChild(child);
    });
    currentNode.childern.forEach(child => _createTree(child, game, depth+1))
}

function getPossibleChildern(currentX, currentY, game){
    let possibleSquer = [];
    moves.forEach(move => {
        if(valideIndex(currentX, currentY,move)){
            possibleSquer.push({x: move.x, y: move.y});
        }
    })
    possibleSquer = possibleSquer.map(squer =>game.felder[((currentY+squer.y)*15)+(currentX+squer.x)]);
    possibleSquer = possibleSquer.filter(squer => squer && !squer.hinderis);

    return possibleSquer;
}

function valideIndex(currentX, currentY,  move){
    if(currentX+move.x < 0 || currentX+move.x > 14) return false;
    else if(currentY+move.y < 0 || currentY+move.y > 14) return false;
    return true;
}