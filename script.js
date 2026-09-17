let canvas;
let ctx;

const player = {
    x: 0,
    y: 0,
    size: 20,
    speed: 3,
    speedX: 0,
    speedY: 0,
    color: "#b00b69"
};

const keys = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false
}

window.addEventListener("load", Start);

function Start()
{
    canvas = document.getElementById("GameCanvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", OnKeyDown);
    document.addEventListener("keyup", OnKeyUp);
    Update();
}

function OnKeyDown(e)
{
    if (e.key in keys) {
        keys[e.key] = true;
    }
    /*console.log(e.key);
    if (e.key == "ArrowRight") {
        player.speedX = player.speed;
        player.speedY = 0;
    }
    if (e.key == "ArrowLeft") {
        player.speedX = -player.speed;
        player.speedY = 0;
    }
    if (e.key == "ArrowUp") {
        player.speedY = -player.speed;
        player.speedX = 0;
    }
    if (e.key == "ArrowDown") {
        player.speedY = player.speed;
        player.speedX = 0;
    }*/
}
function OnKeyUp(e)
{
    if (e.key in keys) {
        keys[e.key] = false;
    }
}

function MovePlayer()
{
    if (keys.ArrowRight) {
        player.speedX = player.speed;
    } 
    if (keys.ArrowLeft) {
        player.speedX = -player.speed;
    } 
    if (keys.ArrowUp) {
        player.speedY = -player.speed;
    }
    if (keys.ArrowDown) {
        player.speedY = player.speed;
    } 

    player.x += player.speedX;
    player.y += player.speedY;

    if(player.x < 0) 
    {
        player.x = 0;
    } else if (player.x + player.size > canvas.width) {
        player.x = canvas.width - player.size;
    }
    
    if(player.y < 0) 
    {
        player.y = 0;
    } else if (player.y + player.size > canvas.height) {
        player.y = canvas.height - player.size;
    }
}

function Update()
{
    MovePlayer();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawCharacter();
    requestAnimationFrame(Update);
}

function DrawCharacter()
{
    ctx.fillStyle= player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}