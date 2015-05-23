function prop(_name, _x, _y, _frameWidth, _frameHeight, _animations){
	/* Prop object constructor! */
	this.x = _x;
	this.y = _y;
	
	this.spr = new sprite("resources/" + _name + ".png", _frameWidth, _frameHeight, 24, 0, _animations);
}

prop.prototype.renderProp = function(){
	this.spr.renderSpr(this.x, this.y, this.spr.frameWidth, this.spr.frameHeight, this.rotation, 0, 0, 1, 1);
}