/*function getSurroundingStagePieces(player){
	
	/* This function checks for all pieces of the stage
	that are close to the player and pushes them into
	respective arrays, to make collision checks faster *
	
	/* Check hitbox tries to account for rotation by making
	both the width and height Math.max(width, height) * 2. *
	playerWH = Math.max(player.width, player.height);
	playerX = player.x - playerWH;
	playerY = player.y - playerWH;
	playerWH *= 2;
	
	
	// It's probably faster to check every piece of rectangle ground
	recGrndCheck = rectangleGround;
	
	// Nearby rectangle walls
	for(d = 0; d < rectangleWalls.length; d++){
		
		if(AABBcollision(playerX, playerY, playerWH, playerWH,
						 rectangleWalls[d].x, rectangleWalls[d].y,
						 rectangleWalls[d].width, rectangleWalls[d].height)){
			
			player.recWallCheck.push(rectangleWalls[d]);
			
		}
		
	}
	
	
	// Nearby triangle ground
	for(d = 0; d < triangleGround.length; d++){
		
		if(AABBcollision(playerX, playerY, playerWH, playerWH,
						 triangleGround[d].x, triangleGround[d].y,
						 triangleGround[d].width, triangleGround[d].height)){
			
			player.triGrndCheck.push(triangleGround[d]);
			player.checkSlope = true;
			
		}
		
	}
	
	// Nearby triangle walls
	for(d = 0; d < triangleWalls.length; d++){
		
		if(AABBcollision(playerX, playerY, playerWH, playerWH,
						 triangleWalls[d].x, triangleWalls[d].y,
						 triangleWalls[d].width, triangleWalls[d].height)){
			
			player.triWallCheck.push(triangleWalls[d]);
			
		}
		
	}
	
}*/

function checkStageCollision(player){
	
	/* For now, we always check for collision with every piece of the stage.
	This may be changed in the future. */
	//getSurroundingStagePieces(player);
	
	
	// Check for collision between the player and the rectangle ground
	player.recGrndCollision = false;
	for(d = 0; d < rectangleGround.length; d++){
		
		if(pointInRectangle(player.x + player.fallX, player.y + player.fallY,
							rectangleGround[d].x, rectangleGround[d].y,
							rectangleGround[d].width, rectangleGround[d].height)){
			
			/* Set the player's position to the exact point of
			collision so it doesn't float above or inside the
			ground */
			player.y += rectangleGround[d].y - player.y;
			
			player.recGrndCollision = true;
			d = rectangleGround.length;
			
		}
		
	}
	
	
	/* Check for collision between the player and the triangle ground */
	player.triGrndCollision = false;
	for(d = 0; d < triangleGround.length; d++){
		
		if(pointInTriangle(player.x + player.fallX, player.y + player.fallY,
						   triangleGround[d].p1x, triangleGround[d].p1y,
						   triangleGround[d].p2x, triangleGround[d].p2y,
						   triangleGround[d].p3x, triangleGround[d].p3y)){
			
			/* Set the player's position to the exact point of collision
			so it doesn't float above or below the ground */
			player.y = lineIntersectionPointY(player.x, player.y - 1,
											  player.x, player.y + 1,
											  triangleGround[d].p1x, triangleGround[d].p1y,
											  triangleGround[d].p2x, triangleGround[d].p2y);
			player.triGrndCollision = true;
			d = triangleGround.length;
			
		}
		
	}

}