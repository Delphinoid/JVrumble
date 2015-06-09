function triangle(_p1x, _p1y, _p2x, _p2y, _p3x, _p3y, _type){

	this.x = Math.min(_p1x, _p2x, _p3x);
	this.y = Math.min(_p1y, _p2y, _p3y);
	this.width = Math.max(_p1x, _p2x, _p3x) - this.x;
	this.height = Math.max(_p1y, _p2y, _p3y) - this.y;
	
	this.p1x = _p1x;
	this.p1y = _p1y;
	this.p2x = _p2x;
	this.p2y = _p2y;
	this.p3x = _p3x;
	this.p3y = _p3y;
	
	this.type = _type;
	
}

triangle.prototype.render = function(){
	canvasContext.beginPath();
		canvasContext.strokeStyle = "#FF0000";
		canvasContext.moveTo(this.p1x, this.p1y);
		canvasContext.lineTo(this.p2x, this.p2y);
	canvasContext.stroke();
	
	canvasContext.beginPath();
		canvasContext.lineWidth = 2;
		canvasContext.strokeStyle = "#00FF00";
		canvasContext.rect(this.x, this.y, this.width, this.height);
	canvasContext.stroke();
}