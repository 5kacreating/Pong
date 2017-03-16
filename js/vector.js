function Vector(x,y)
{
	this.x = x;
	this.y = y;
	

	this.normal = function ()
	{
		var l = this.length();
		this.x /= l;
		this.y /= l;
	}

	this.add = function(v)
	{	
		this.x += v.x;
		this.y += v.y;
	}

	this.mult = function(k)
	{
		this.x *= k;
		this.y *= k;
	}

	this.length = function()
	{
		return (Math.sqrt(this.x*this.x + this.y*this.y));
	}
}