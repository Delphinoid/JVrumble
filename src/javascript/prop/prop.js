function prop(_name, _x, _y, _rotation, _frameWidth, _frameHeight, _animations){
	/* Prop object constructor! */
	this.x = _x;
	this.y = _y;
	this.rotation = _rotation;
	
	this.spr = new sprite("resources/" + _name + ".png", _frameWidth, _frameHeight, 24, 0, _animations);
}

prop.prototype.renderProp = function(){
	this.spr.renderSpr(this.x + (this.spr.frameWidth / 2), this.y + (this.spr.frameHeight / 2),
					   this.spr.frameWidth, this.spr.frameHeight,
					   this.rotation, 1, 1);
}