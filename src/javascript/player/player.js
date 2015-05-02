function player(_name, _character, _skin, _x, _y, _damage){
	
	/* Player object constructor */
	this.name = _name;
	this.character = _character;
	this.skin = _skin;
	
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

}