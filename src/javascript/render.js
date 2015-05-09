function render(){
	
	/* Clear the canvas before drawing so images don't leave trails on a transparent background */
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	background.renderProp();
	testPlayer.renderPlayer();
	
	requestAnimationFrame(function(){render();});
	
}