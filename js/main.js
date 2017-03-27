var resistance  = 0.8;
var canvas;
var ctx;
var c_width = 900;
var c_height = 600;
var player;
var enemy;
var ball;
var h;




window.onload = function()
{
	var p_width = 15;
	var p_height = 100;
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	canvas.width  = c_width;
	canvas.height = c_height;
	player = new Player(40, (c_height/2), 0.8, "blue", p_width, p_height);
	player.draw();
	enemy = new Player(c_width-40, (c_height/2), 1.5, "red", p_width, p_height);
	enemy.draw();
	reset_ball(2);



	setInterval(function(){detection()}, 1);
	setInterval(function(){update()}, 1);
}

var keyMap = [];

document.onkeydown = keyDown;
document.onkeyup = upKey;

function keyDown(e)
{
	keyMap[e.keyCode] = true;
}

function upKey(e)
{
	keyMap[e.keyCode] = false;
}


function move()
{

if (keyMap[38])
	{
		
		player.acceleration.y = (-1) * player.speed;

  	}
  	
	else if (keyMap[40])
	{
	
		player.acceleration.y = player.speed;
  	}

  	else
  	{
  		player.acceleration.y = 0;
  	}

  	

}



function detection() {
	player.collision();
	enemy.collision();
}

function reset_ball(a)
{
	h = Math.floor((Math.random() * c_height) + 1);

	ball = new Ball(c_width/2, h, 0.65, 5);
	ball.acceleration.x = ball.speed;
	ball.acceleration.y = ball.speed;
	
	if (a == 1)
	{
		ball.acceleration.x *= -1; 
	}
	
	ball.draw();
}



function enemy_move()
{
	
/*
	if (ball.location.y > enemy.location.y + enemy.h / 4 && ball.location.y < enemy.location.y + 0.75 * enemy.h)
		{
			return;
		}
*/


	if (ball.location.y > enemy.location.y + enemy.h / 2)
	{
		enemy.acceleration.y = enemy.speed;
		enemy.velocity.y = 0;
	}
	else if (ball.location.y < enemy.location.y + enemy.h / 2)
	{
		enemy.acceleration.y = (-1) * enemy.speed;
		enemy.velocity.y = 0;
	
	}
}




function update()
{		
	ctx.clearRect(0,0,canvas.width,canvas.height);
	enemy_move();
	enemy.update();
	move();
	player.update();
	ball.update();
	player.draw();
	ball.draw();
	enemy.draw();
}
