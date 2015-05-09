function render(){
	
	/* Clear the canvas before drawing so images don't leave trails on a transparent background */
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	background.renderProp();
	testPlayer.renderPlayer();
	
	for(i = 0; i < mapCollision1.length; i++){
		mapCollision1[i].render();
	}
	
	requestAnimationFrame(function(){render();});
	
}