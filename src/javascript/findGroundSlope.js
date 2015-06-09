function slopeGroundCollision(pX, pY){
	
	/* Uses separate collision function to only check for collision
	with the nearby pieces of the stage */
	
	// Replace rectangleGround with player.recGrndCheck
	for(r = 0; r < rectangleGround.length; r++){
		if(pointInRectangle(pX, pY,
							rectangleGround[r].x, rectangleGround[r].y,
							rectangleGround[r].width, rectangleGround[r].height)){
			return(true);
		}
	}
	
	// Replace triangleGround with player.triGrndCheck
	for(r = 0; r < triangleGround.length; r++){
		if(pointInTriangle(pX, pY,
						   triangleGround[r].p1x, triangleGround[r].p1y,
						   triangleGround[r].p2x, triangleGround[r].p2y,
						   triangleGround[r].p3x, triangleGround[r].p3y)){
			return(true);
		}
	}
	
	return(false);
	
}

function findGroundSlope(p1x, p1y, p2x, p2y, pivotX, pivotY, rotation){
	
	var rotRadians = rotation / 180 * Math.PI;
	
	var LLpointOffsetX = pivotX - p1x; 
	var LRpointOffsetX = p2x - pivotX;
	
	var LLcornerX = rotatedPointX(p1x, p1y, pivotX, pivotY, rotRadians);
	var LLcornerY = rotatedPointY(p1x, p1y, pivotX, pivotY, rotRadians);
	
	var LRcornerX = rotatedPointX(p2x, p2y, pivotX, pivotY, rotRadians);
	var LRcornerY = rotatedPointY(p2x, p2y, pivotX, pivotY, rotRadians);
	
	
	if(slopeGroundCollision(LLcornerX, LLcornerY)){
		
		/* If the lower left corner is inside the ground, rotate
		it clockwise around the player's rotation point until
		it reaches the ground's surface. */
	
		for(d = 0; d < 360; d++){
			
			if(!slopeGroundCollision(pivotX - Math.cos((rotation + d) * Math.PI / 180) * LLpointOffsetX,
									 pivotY - Math.sin((rotation + d) * Math.PI / 180) * LLpointOffsetX)){
				
				LLcornerX = pivotX - Math.cos((rotation + d) * Math.PI / 180) * LLpointOffsetX;
				LLcornerY = pivotY - Math.sin((rotation + d) * Math.PI / 180) * LLpointOffsetX;
				
				d = 360;
				
			}
			
		}
		
	}else{
		
		/* Otherwise, if the lower left corner is not inside the
		ground, rotate it counter-clockwise around the player's
		rotation point until it reaches the ground's surface.
		Add one degree of rotation at the end so the point is
		above the ground and not inside it. */
		
		for(d = 0; d < 360; d++){
			
			if(slopeGroundCollision(pivotX - Math.cos((rotation - d) * Math.PI / 180) * LLpointOffsetX,
									pivotY - Math.sin((rotation - d) * Math.PI / 180) * LLpointOffsetX)){
				
				LLcornerX = pivotX - Math.cos((rotation - d + 1) * Math.PI / 180) * LLpointOffsetX;
				LLcornerY = pivotY - Math.sin((rotation - d + 1) * Math.PI / 180) * LLpointOffsetX;
				
				d = 360;
				
			}
			
		}
		
	}
		
	if(slopeGroundCollision(LRcornerX, LRcornerY)){
		
		/* If the lower right corner is inside the ground, rotate
		it counter-clockwise around the player's rotation point
		until it reaches the ground's surface. Remove 180 degrees
		of rotation so it starts rotating in the same place as
		the actual corner. */
	
		for(d = 0; d < 360; d++){
			
			if(!slopeGroundCollision(pivotX - Math.cos((rotation - d - 180) * Math.PI / 180) * LRpointOffsetX,
									 pivotY - Math.sin((rotation - d - 180) * Math.PI / 180) * LRpointOffsetX)){
				
				LRcornerX = pivotX - Math.cos((rotation - d - 180) * Math.PI / 180) * LRpointOffsetX;
				LRcornerY = pivotY - Math.sin((rotation - d - 180) * Math.PI / 180) * LRpointOffsetX;
				
				d = 360;
				
			}
			
		}
		
	}else{
		
		/* Otherwise, if the lower right corner is not inside the
		ground, rotate it clockwise around the player's rotation
		point until it reaches the ground's surface. Remove 180
		degrees of rotation so it starts rotating in the same
		place as the actual corner, and subtract another degree
		of rotation so at the end the point is above the ground
		and not inside it. */
		
		for(d = 0; d < 360; d++){
			
			if(slopeGroundCollision(pivotX - Math.cos((rotation + d - 180) * Math.PI / 180) * LRpointOffsetX,
									pivotY - Math.sin((rotation + d - 180) * Math.PI / 180) * LRpointOffsetX)){
				
				LRcornerX = pivotX - Math.cos((rotation + d - 181) * Math.PI / 180) * LRpointOffsetX;
				LRcornerY = pivotY - Math.sin((rotation + d - 181) * Math.PI / 180) * LRpointOffsetX;
				
				d = 360;
				
			}
			
		}
		
	}
	
	
	return(Math.atan2(LLcornerY - LRcornerY, LLcornerX - LRcornerX) * (180 / Math.PI) - 180);
}