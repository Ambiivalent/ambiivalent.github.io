const pixelSize = 10;
const velocity = 5;

let foodSpawned = false;
let foodInfo = (0,0);

let canvas = document.getElementById("snake_canvas");
let ctx = canvas.getContext("2d");
let snakeX = (canvas.width/2) >> 0
let snakeY = (canvas.height/2) >> 0

function drawSnake()
{
    ctx.beginPath();
    ctx.rect(snakeX, snakeY , pixelSize, pixelSize);
    ctx.fillStyle = "#00A4FA";
    ctx.fill();
    ctx.closePath();
}

function spawnFood()
{
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 400)
    return x,y;
}

function drawFood(foodInfo)
{
    ctx.beginPath();
    ctx.rect(foodInfo[0],foodInfo[1],pixelSize, pixelSize);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function growSize()
{

}

function play()
{
    ctx.clearRect(0,0 , canvas.clientWidth, canvas.height);

    drawSnake();
    if (!foodSpawned)
    {
        foodInfo = spawnFood();
        foodSpawned = true;
    }
    else
    {
        drawFood(foodInfo)
    }
    snakeX += velocity;
}

setInterval(play , 10);