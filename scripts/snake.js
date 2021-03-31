const pixelSize = 10;

let velocity = [1,0];

let snake = [];
let snakeSize = 1;

let foodSpawned = false;
let foodInfo = [0,0];
let score = 0;
let gameEnd = false;

let canvas = document.getElementById("snake_canvas");
let ctx = canvas.getContext("2d");
let snakeX = (canvas.width/2) >> 0
let snakeY = (canvas.height/2) >> 0

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e)
{
    if (e.key == "Right" || e.key == "ArrowRight") {
        velocity[0] = 1;
        velocity[1] = 0;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        velocity[0] = -1;
        velocity[1] = 0;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
        velocity[0] = 0;
        velocity[1] = -1;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        velocity[0] = 0;
        velocity[1] = 1;
    }
}

function drawSnake()
{
    ctx.beginPath();
    for (i = 0; i < snake.length; i++)
    {
        ctx.rect(snake[i][0], snake[i][1] , pixelSize, pixelSize);
        ctx.fillStyle = "#00A4FA";
        ctx.fill();
    }

    ctx.closePath();
}

function spawnFood()
{
    let x = Math.floor(Math.random() * 390);
    let y = Math.floor(Math.random() * 390)
    return [x,y];
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
    snake.push(snake[snake.length - 1]);
    snakeSize += 1;
}

function collision(snake, foodInfo)
{
    if (foodInfo[0] < snake[0][0] + pixelSize &&
        foodInfo[0] + pixelSize > snake[0][0] &&
        foodInfo[1] < snake[0][1] + pixelSize &&
        foodInfo[1] + pixelSize > snake[0][1])
    {
        return true;
    }
    return false;
}

function collsionSelf(snake)
{
    if (snake[0][0] > canvas.width || snake[0][0] < 0 || snake[0][1] > canvas.height || snake[0][1] < 0)
    {
        return true;
    }
    for (i = 3; i < snake.length; i++)
    {
        if (snake[0][0] == snake[i][0] && snake[0][1] == snake[i][1])
        {
            return true;
        }

    }
    return false;
}

function displayScore()
{
    ctx.beginPath();
    ctx.font = "20px Consolas"
    ctx.fillStyle = "#00FF00";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, canvas.width/2 , 25);
    ctx.closePath();
}

function gameOver()
{
    ctx.beginPath();
    ctx.font = "20px Consolas"
    ctx.fillStyle = "#00FF00";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER Score: " + score, canvas.width/2 , canvas.width/2);
    ctx.closePath();            
}

function play()
{
    ctx.clearRect(0,0 , canvas.clientWidth, canvas.height);

    if (gameEnd == true)
    {
        gameOver();
    }
    else
    {

        snake.push([snakeX, snakeY]);
        if (snake.length > snakeSize ) {snake.shift()}
    
        snakeX += velocity[0];
        snakeY += velocity[1];
        drawSnake();
        displayScore();
    
        if (!foodSpawned)
        {
            foodInfo = spawnFood();
            foodSpawned = true;
        }
        else
        {  
            drawFood(foodInfo)
        }
    
        if (collision(snake, foodInfo))
        {
            growSize();
            foodSpawned = false;
            score += 1;
        }
        if (collsionSelf(snake))
        {
            gameEnd = true;
        }
    }

}
setInterval(play , 10);