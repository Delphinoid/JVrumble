function render(){
	
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	guySpr.render(testPlayer.x, testPlayer.y, guySpr.frameWidth, guySpr.frameHeight);
	
}