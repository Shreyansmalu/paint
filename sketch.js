//var dotGroup;
//var dot;
//var vertex;
var drawing = [];
function setup(){
canvas = createCanvas(600,400);
//dotGroup = new Group();

}
function draw(){
    text(mouseX + ',' + mouseY, 10, 15);
 if(mouseDown()){
    var point = {
        x:mouseX,
         y:mouseY
}
    drawing.push(point);
}    
    strokeWeight(4);
    stroke("black");
    for(var i = 0;i<drawing.length;i++){
        var path = drawing[i];
        beginShape();
        for(var j = 0;j<path.length;j++){
            point(path[j].x,path[j].y);
}
        endShape();
}
}