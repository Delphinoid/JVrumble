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
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.damage = _damage;
	
	this.keyState = {up:false, down:false, left:false, right:false, lightAtk: false, 
					 heavyAtk:false, smash:false, grab:false, shield:false, taunt:false};  
	
}

player.prototype.update = function(){
	
	if(this.keyState.up){
		this.y -= 2;
	}
	if(this.keyState.down){
		this.y += 2;
	}
	if(this.keyState.left){
		this.x -= 2;
	}
	if(this.keyState.right){
		this.x += 2;
	}
	
	this.character.spr.animate();
	
}

player.prototype.renderPlayer = function(){
	
	this.character.spr.renderSpr(this.x, this.y, this.character.spr.frameWidth, this.character.spr.frameHeight);
	
}