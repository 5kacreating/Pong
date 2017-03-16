function Player(x, y, speed, color, w, h)
{
	Object.call(this, x, y, speed);

	this.color = color;
	this.w = w;
	this.h = h;

	this.draw = function()
	{
		
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.rect(this.location.x, this.location.y-this.h/2, this.w, this.h);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

	}

	this.update = function()
	{
		this.velocity.add(this.acceleration);
		this.velocity.mult(resistance);
		this.location.add(this.velocity);
	}

	this.collision = function()
	{
		if (this.location.x <= (ball.location.x + (2 * ball.r))  && this.location.x + this.w  >= ball.location.x &&
		this.location.y - this.h/2 <= (ball.location.y + (2 * ball.r)) && this.location.y + this.h / 2 >= ball.location.y) {

			ball.acceleration.x *= -1;
			ball.velocity.x *= -1;	
		


			}

	}

}


