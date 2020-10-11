// Text top side
function upperText(){
    textSize(12);
    fill(255, 255, 255);
    textStyle(NORMAL);
    text('ELECTRONIC', 10, 20);
    text('MUSIC', 10, 40);
    text('FESTIVAL', 10, 60);
    text('#7', 10, 80);
}

// Text bottom side
function lowerText(){
    textSize(12);
    fill(255, 255, 255);
    textStyle(NORMAL);
    text('DIJON', 450, 620);
    text('DU 07 AU IO', 417, 640);
    text('NOVEMBRE', 417, 660);
    text('#2013', 451, 680);
}

// Letters for résonance
function mainLetters(){

    textSize(56);
    fill(255, 255, 255, fade); //Variable to control fade in velocity
    textStyle(BOLD);

    text("R", 225, 68);
    text("É", 275, 136);
    text("S", 225, 204);
    text("O", 275, 272);
    text("N", 225, 340);
    text("A", 275, 408);
    text("N", 225, 476);
    text("C", 275, 544);
    text("E", 225, 612);
    text("S", 275, 680);
}

// Array ellipses
var objects = [];

// Random ellipses color
var col = {
    r: 255,
    g: 0,
    b: 0,
    a: 255
}

// Text fade velocity
var fade = 0;

// Random numner to change drawing shapes
var r = 0;


function setup() {
    createCanvas(500, 700);
    resetSketch();
}
  
function draw() {

    // Text fade velocity
    if (fade < 256){
        fade += r/2;
    };

    // If statement to control when background stops drawing. This is used to be able to draw wake on shapes
    if (objects[0].counter < 400){
        fill(0, 0, 0, 20);
        rect(0, 0, width, height);
    }

    // Movement and drawing of shapes
    for (let i = 0; i < objects.length; i++){
        objects[i].move();
        objects[i].display();
    }

    
    upperText();
    lowerText();
    mainLetters();

  }

// Redraw animation on mobile devices
function deviceShaken(){
    resetSketch();
  }

// Redraw animation on computer
function mousePressed() {
    resetSketch();
}

// Redraw animation
function resetSketch(){
    background(0);

    objects = [];
    fade = 0;

    col.r = random(256);
    col.g = random(256);
    col.b = random(256);
    
    r = random(1, 11);
    let shape = random(0, 3);

    //Going up shapes
    append(objects, new Spot(-200, 500, 40, r, shape)); //1st row 1st shape
    append(objects, new Spot(0, 500, 40, r, shape));  //2nd row 1st shape
    append(objects, new Spot(-160, 660, 40, r, shape));  //2nd row 2nd shape
    append(objects, new Spot(-300, 800, 40, r, shape));  //2nd row 3rd shape
    append(objects, new Spot(0, 700, 40, r, shape)); //3rd row 1st shape
    append(objects, new Spot(-150, 850, 40, r, shape)); //3rd row 2nd shape
    append(objects, new Spot(-300, 1000, 40, r, shape)); //3rd row 3rd shape
    append(objects, new Spot(0, 900, 40, r, shape)); //4th row 1st shape

    //Going down shapes
    append(objects, new Spot(500, -300, 40, -r, shape)); //4th row 2nd shape
    append(objects, new Spot(500, -100, 40, -r, shape)); //2nd row 1st shape
    append(objects, new Spot(700, -300, 40, -r, shape)); //2nd row 2nd shape
    append(objects, new Spot(500, 100, 40, -r, shape)); //3rd row 1st shape
    append(objects, new Spot(600, 200, 40, -r, shape)); //4th row 1st shape
    append(objects, new Spot(800, 0, 40, -r, shape)); //4th row 2nd shape
    append(objects, new Spot(800, 200, 40, -r, shape)); //5th row 1st shape
}


// Class for shapes
function Spot(x, y, dia, value, random){
    this.x = x;
    this.y = y;
    this.counter = 0; //Variable to control when do shapes stop
    this.dia = dia;
    this.value = value; //Variable to control shape speed
    this.r = random; //Variable to decide shape

    // Function to move shapes in a diagonal. Variable counter used to stop
    this.move = function(){

        if (this.value > 0){
            
            if (this.counter < 450){
                this.x += this.value;
                this.y -= this.value;
                this.counter += this.value;
            }
        }

        else if (this.value < 0){
            
            if (this.counter > -450){
                this.x += this.value;
                this.y -= this.value;
                this.counter += this.value;
            }
        }

        
    };

    // Function to draw object everytime it has moved. Variable r used for shape
    this.display = function(){
        fill(col.r, col.g, col.b, col.a);
        noStroke();

        if (this.r <= 1){
            ellipse(this.x, this.y, this.dia, this.dia);
        }

        else if (this.r > 1 && this.r < 2){
            rect(this.x, this.y, this.dia, this.dia);
        }

        else if (this.r >= 2){
            triangle(this.x, this.y, this.x - 20, this.y + 40, this.x + 20 , this.y + 40);
        }
        
    };
    
}