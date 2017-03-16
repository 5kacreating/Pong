function Ball(x, y, speed, r)
{
	Object.call(this, x, y, speed);
	this.r = r;

	this.draw = function ()
	{
	ctx.beginPath();
    ctx.arc(this.location.x, this.location.y, this.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
	}

	this.update = function ()
	{
		this.acceleration.normal;
		this.acceleration.mult(this.speed);
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);

		if (this.location.x - this.r >= c_width)
		{
			reset_ball(1);

		}
		if (this.location.x <= 0)
		{
			reset_ball(2);

		}
		if (this.location.y >= c_height - this.r || this.location.y <= 0)
		{
			this.acceleration.y = this.acceleration.y * (-1);
			this.velocity.y = this.velocity.y * (-1);
		}
	}
	
}


