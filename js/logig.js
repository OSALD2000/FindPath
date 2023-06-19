function bucktSort(array,  reserve){
    let buckts = Array.from({length: 15}, (_, i) => new Buckt(i));
    array.forEach(feld => buckts[feld.y].bucktArr.push(feld));

    if(reserve){buckts.forEach(buckt => buckt.bucktArr.sort((a,b) => b.x - a.x));}
    else buckts.forEach(buckt => buckt.bucktArr.sort((a,b) => a.x - b.x ));


    let index = 0;
    for (const buckt of buckts) {
        for (const feld of buckt.bucktArr) {
            array[index] = feld;
            index+=1;
        }
    }
}

function Buckt(num){
    this.num = num;
    this.bucktArr = [];
}

//evaluation criteria
function distance_between(obj1, obj2) {
    return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
}