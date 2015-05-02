function render(){
	
	/* Clear the canvas before drawing so images don't leave trails on a transparent background */
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	guySpr.render(testPlayer.x, testPlayer.y, guySpr.frameWidth, guySpr.frameHeight);
	
	requestAnimationFrame(function(){render();});
	
}