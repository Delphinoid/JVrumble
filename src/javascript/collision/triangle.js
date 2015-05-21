function triangle(_p1x, _p1y, _p2offsetX, _p2offsetY, _face, _type){
	this.p1x = _p1x;
	this.p1y = _p1y;
	this.p2offsetX = _p2offsetX; // X position of point 2 relative to point 1
	this.p2offsetY = _p2offsetY; // Y position of point 2 relative to point 1
	this.face = _face; // The face of the object to check intersection with (0 = bottom, 1 = top)
	this.type = _type;
}

triangle.prototype.render = function(){
	canvasContext.beginPath();
		canvasContext.strokeStyle = "#FF0000";
		canvasContext.moveTo(this.p1x, this.p1y);
		canvasContext.lineTo(this.p1x + this.p2offsetX, this.p1y + this.p2offsetY);
	canvasContext.stroke();
	
	canvasContext.beginPath();
		canvasContext.lineWidth = 2;
		canvasContext.strokeStyle = "#00FF00";
		canvasContext.rect(this.p1x, this.p1y, this.p2offsetX, this.p2offsetY);
	canvasContext.stroke();
}