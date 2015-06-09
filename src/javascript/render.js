function render(){
	
	/* Clear the canvas before drawing so images don't leave trails on a transparent background */
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	background.renderProp();
	testPlayer.renderPlayer();
	
	for(i = 0; i < rectangleGround.length; i++){
		rectangleGround[i].render();
	}
	for(i = 0; i < triangleGround.length; i++){
		triangleGround[i].render();
	}
	
	requestAnimationFrame(function(){render();});
	
}