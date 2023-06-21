const [UP, DOWN, LEFT, RIGHT, UP_RIGHT, UP_LEFT, DOWN_LEFT, DOWN_RIGHT] = 
[{x:0, y:-1},{x:0, y:1},{x:-1, y:0},{x:1, y:0},{x:1, y:-1},{x:-1, y:-1},{x:-1, y:1},{x:1, y:1}]
const moves = [UP, DOWN, LEFT, RIGHT, UP_RIGHT, UP_LEFT, DOWN_LEFT, DOWN_RIGHT];


function BFS(maze, start, end){
   let queue = new Queue();
   queue.push(start);
   currentNode = _BFS(queue, maze, end);
   
    //    while(!queue.empty()){

    //     currentNode = queue.pop();

    //     if(currentNode == end ){ break;}

    //     possibleSquer = possibleChildern(currentNode.x, currentNode.y, maze);
        
    //     possibleSquer.forEach(child => {
    //         if(!child.visted){
    //             child.visted = true;
    //             child.parent = currentNode;
    //             queue.push(child);
    //         }
    //     });
    //    }

   if(currentNode == end ){
        while(true){
            if(currentNode==start){break;}
            currentNode.player = true;
            currentNode= currentNode.parent;

        }
   }
   game.draw(ctx);
}

function _BFS(queue, maze, end){
    if(queue.empty()){return false;}

    currentNode = queue.pop();

    if(currentNode == end ){ return currentNode;}

    possibleSquer = possibleChildern(currentNode.x, currentNode.y, maze);

    possibleSquer.forEach(child => {
        if(!child.visted){
            child.visted = true;
            child.parent = currentNode;
            queue.push(child);
        }
    });
    
    return _BFS(queue, maze, end);
}


function possibleChildern(currentX, currentY, game){
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
    if(currentX+move.x < 0 || currentX+move.x >= 15) return false;
    else if(currentY+move.y < 0 || currentY+move.y >= 15) return false;
    return true;
}