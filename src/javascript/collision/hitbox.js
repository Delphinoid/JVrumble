function hitbox(_x, _y, _width, _height, _type){
	this.x = _x;
	this.y = _y;
	this.width = _width;
	this.height = _height;
	this.type = _type;
}

hitbox.prototype.render = function(){
	canvasContext.beginPath();
	canvasContext.lineWidth = 2;
	canvasContext.strokeStyle = "red";
	canvasContext.rect((this.x - (this.width / 2)), (this.y - (this.height / 2)), this.width, this.height);
	canvasContext.stroke();
}