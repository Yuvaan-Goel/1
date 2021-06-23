function preload()
{
    
}

function setup()
{
    canvas = createCanvas(700, 700);
    canvas.position(150, 150);
    img = createCapture(VIDEO);
    img.hide();
}

function draw()
{
    image(img, 90, 50, 440, 380);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, -10, 20, 500);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(70, 50, 500, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(70, 420, 500, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(530, -10, 20, 500);
}