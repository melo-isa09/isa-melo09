function setup() {
    createCanvas(790,790); 
    background("green");
  }
  
  function draw() {
   
    //consele.log(mouseIsPressed)
    if(mouseIsPressed)
      rect(mouseX,mouseY,100,200);
  }