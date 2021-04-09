canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 210;
car_height = 100;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "https://lpc.opengameart.org/sites/default/files/simple-travel-car-top_view.svg";
car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
rover_x = 10;
rover_y = 10;
rove_x = 10;
rove_y = 120;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image 
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
    background_imgTag.src = background_image; // load image
    car1_imgTag = new Image(); //defining a variable with a new image 
    car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable 
    car1_imgTag.src = car1_image; // load image 
    car2_imgTag = new Image(); //defining a variable with a new image 
    car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable 
    car2_imgTag.src = car2_image; // load image 
} 
function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 
function uploadcar1() { 
    ctx.drawImage(car1_imgTag, rover_x, rover_y, car_width, car_height); 
} 
function uploadcar2() { 
    ctx.drawImage(car2_imgTag, rove_x, rove_y, car_width, car_height); 
} 

window.addEventListener("keydown", my_keydown); 
function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
        if (keyPressed == '87') {
            w();
            console.log("up");
        }
        if (keyPressed == '83') {
            s();
            console.log("down");
        }
        if (keyPressed == '65') {
            a();
            console.log("left");
        }
        if (keyPressed == '68') {
            d();
            console.log("right");
        }
    }

    function up() {
        if (rover_y >= 0) {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function down() {
        if (rover_y <= 500) {
            rover_y = rover_y + 10;
            console.log("when down arrow is pressed, x = " + rover_x +" | y = " +  rover_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function left() {
        if (rover_x >= 0) {
            rover_x = rover_x - 10;
            console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function right() {
        if (rover_x <= 700) {
            rover_x = rover_x + 10;
            console.log("when right arrow is pressed, x " + rover_x + " | y = " + rover_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function w() {
        if (rove_y >= 0) {
            rove_y = rove_y - 10;
            console.log("When up arrow is pressed, x = " + rove_x + " | y = " + rove_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function s() {
        if (rove_y <= 500) {
            rove_y = rove_y + 10;
            console.log("when down arrow is pressed, x = " + rove_x +" | y = " +  rove_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function a() {
        if (rove_x >= 0) {
            rove_x = rove_x - 10;
            console.log("When left arrow is pressed, x = " + rove_x + " | y = " + rove_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function d() {
        if (rove_x <= 700) {
            rove_x = rove_x + 10;
            console.log("when right arrow is pressed, x " + rove_x + " | y = " + rove_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

        if (rover_x > 700) 
        {
             console.log("car_1 won")
             document.getElementById("win").innerHTML = "car 1 won!!"
        } 

        if (rove_x > 700) 
        {
             console.log("car_2 won")
             document.getElementById("win").innerHTML = "car 2 won!!"
        } 