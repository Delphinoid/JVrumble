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
			this.character = new guy(_skin);
			break;
	}
	
	this.x = _x;
	this.y = _y;
	this.rotation = 0;
	
	this.recGrndCollision = false;
	this.recWallCollision = false;
	this.triGrndCollision = false;
	this.triWallCollision = false;
	this.checkSlope = true;
	
	this.moveX = 0;
	this.moveY = 0;
	this.fallX = 0;
	this.fallY = 0;
	this.damage = _damage;
	
	this.xFlip = 1;
	this.yFlip = 1;
	this.pivotX = this.character.spr.frameWidth / 2; // Have the player rotate around its bottom-middle point
	this.pivotY = this.character.spr.frameHeight;
	
	this.keyState = {up:false, down:false, left:false, right:false, lightAtk: false, 
					 heavyAtk:false, smash:false, grab:false, shield:false, taunt:false};
	
}

player.prototype.update = function(){

	if(!this.recGrndCollision){
		if(this.rotation != 0){
			this.fallX += Math.cos((this.rotation + 90) * Math.PI / 180) * 3;
			this.fallY += Math.sin((this.rotation + 90) * Math.PI / 180) * 3;
		}else{
			this.fallY += 3;
		}
	}
	
	if(this.keyState.left){
		if(this.rotation != 0){
			this.moveX -= Math.cos(this.rotation * Math.PI / 180) * 3;
			this.moveY -= Math.sin(this.rotation * Math.PI / 180) * 3;
		}else{
			this.moveX -= 3;
		}
	}
	
	if(this.keyState.right){
		if(this.rotation != 0){
			this.moveX += Math.cos(this.rotation * Math.PI / 180) * 3;
			this.moveY += Math.sin(this.rotation * Math.PI / 180) * 3;
		}else{
			this.moveX += 3;
		}
	}
	
	
	checkStageCollision(this);
	
	if(this.recGrndCollision || this.triGrndCollision){
		this.fallX = 0;
		this.fallY = 0;
	}
	if(this.recWallCollision || this.triWallCollision){
		this.moveX = 0;
		this.moveY = 0;
	}
	this.x += this.moveX + this.fallX;
	this.y += this.moveY + this.fallY;
	this.moveX = 0;
	this.moveY = 0;
	this.fallX = 0;
	this.fallY = 0;
	
	if(this.checkSlope){
		this.rotation = findGroundSlope(this.x - (this.character.spr.frameWidth / 2), this.y,
										this.x + (this.character.spr.frameWidth / 2), this.y,
										this.x, this.y, this.rotation);
		//this.checkSlope = false;
	}else{
		this.rotation = 0;
	}
	
	
	this.character.spr.animate();
	
}

player.prototype.renderPlayer = function(){
	
	/* If the player is moving left, flip his X
	If he is moving right, do not flip his X */
	if(this.xSpeed < 0){
		this.xFlip = -1;
	}else if(this.xSpeed > 0){
		this.xFlip = 1;
	}
	
	this.character.spr.renderSpr(this.x, this.y,
								 this.character.spr.frameWidth, this.character.spr.frameHeight,
								 this.rotation, this.pivotX, this.pivotY, this.xFlip, this.yFlip);
	
}