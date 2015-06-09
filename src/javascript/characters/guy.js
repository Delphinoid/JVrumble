function guy(_skin){
	
	/* Test character */
	this.spr = new sprite("resources/player/characters/guy" + _skin + ".png",
						  200, 170, 24, 0, [0, 13]);
	
	this.walkSpeed = 10;
	this.runSpeed = 20;
	this.fallSpeed = 20;
	this.jumpHeight = 20;
	this.damageMulti = 1.5;
	
}

guy.prototype.lightAtkLeft = function(){
	
	// Do something
	
}