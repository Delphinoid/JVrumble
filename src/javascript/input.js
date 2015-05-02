function input(event){
	
	/* Implement custom keyCodes later */
	switch(event.type){
		case "keydown":
			switch(event.keyCode){
				case 38:
					testPlayer.keyState.up = true;
					break;
				case 40:
					testPlayer.keyState.down = true;
					break;
				case 37:
					testPlayer.keyState.left = true;
					break;
				case 39:
					testPlayer.keyState.right = true;
					break;
			}
			break;
		
		case "keyup":
			switch(event.keyCode){
				case 38:
					testPlayer.keyState.up = false;
					break;
				case 40:
					testPlayer.keyState.down = false;
					break;
				case 37:
					testPlayer.keyState.left = false;
					break;
				case 39:
					testPlayer.keyState.right = false;
					break;
			}
			break;
	}
}