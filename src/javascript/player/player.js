function player(_name, _character, _skin, _x, _y, _damage){
	
	/* Player object constructor */
	this.name = _name;
	
	switch(_character){
		case 1:
			//this.character = new nedron(_skin);
			break;
		case 2:
			//this.character = new mrwhite(_skin);
			break;
		case 3:
			//this.character = new mrblack(_skin);
			break;
		default:
			this.character = charGuy;
			this.spr = new sprite("resources/player/characters/guy" + _skin + ".png", 200, 170, 24, 0, [0, 13]);
			break;
	}
	
	this.x = _x;
	this.y = _y;
	this.rotation = 0;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.xFlip = 1;
	this.damage = _damage;
	
	this.keyState = {up:false, down:false, left:false, right:false, lightAtk: false, 
					 heavyAtk:false, smash:false, grab:false, shield:false, taunt:false};
		
}

player.prototype.update = function(){
	
	if(this.keyState.up){
		this.ySpeed = -2;
	}else if(this.keyState.down){
		this.ySpeed = 2;
	}else{
		this.ySpeed = 0;
	}
	if(this.keyState.left){
		this.xSpeed = -2;
	}else if(this.keyState.right){
		this.xSpeed = 2;
	}else{
		this.xSpeed = 0;
	}
	
	this.x += this.xSpeed;
	this.y += this.ySpeed;
	
	this.spr.animate();
	
}

player.prototype.renderPlayer = function(){
	
	/* If the player is moving left, flip his X
	   If he is moving right, do not flip his X */
	if(this.xSpeed < 0){
		this.xFlip = -1;
	}else if(this.xSpeed > 0){
		this.xFlip = 1;
	}
	
	this.spr.renderSpr(this.x, this.y, this.spr.frameWidth, this.spr.frameHeight, this.rotation, this.xFlip, 1);
	
}