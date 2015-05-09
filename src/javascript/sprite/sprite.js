function sprite(_src, _frameWidth, _frameHeight, _animationFps, _currentAnim, _animations){
	
	/* Sprite object constructor */
	this.image = new Image();
	this.image.src = _src;
	
	this.frameWidth = _frameWidth;
	this.frameHeight = _frameHeight;
	
	this.speedModifier = _animationFps / fps;
	this.currentFrame = 0;
	this.frameProgress = 0;
	this.currentAnim = _currentAnim;
	
	/* sprite.animations is an array of integers. Each animation contains
	two integers: one for the first frame and one for the last frame. */
	this.animations = _animations;
	
}

sprite.prototype.animate = function(){
	
	/* Only animate if the current animation is valid */
	if(this.animations[(this.currentAnim * 2) + 1] > this.animations[this.currentAnim * 2]){
		
		/*
		 *	Increase frameProgress by animationFps / actualFps. Once frameProgress is
		 *	greater than 1, increase currentFrame by 1. Reset the animation
		 *	when currentFrame = the last frame of the animation + 1.
		 *	This allows you to run animations at any speed you want, regardless
		 *	of the actual fps.
		 */
		this.frameProgress += this.speedModifier;
			
		if(this.currentFrame >= this.animations[this.currentAnim * 2] && this.currentFrame <= this.animations[(this.currentAnim * 2) + 1]){
			
			if(this. frameProgress >= 1){
				this.currentFrame += 1;
				
				/*
				 *	If we simply reset frameProgress to 0, the animation would actually
				 *	not run at the correct speed. We can't just decrease it by 1 either,
				 *	because if the animation fps is greater than the game fps, frameProgress 
				 *	would end up increasing indefinitely. 
				 */
				this.frameProgress -= Math.floor(this.frameProgress);
			}
			
			if(this.currentFrame >= this.animations[(this.currentAnim * 2) + 1] + 1){
				this.currentFrame = this.animations[this.currentAnim * 2];
			}
			
		}else{
		
			this.currentFrame = this.animations[this.currentAnim * 2];
			
		}
		
	}else{
		
		this.currentFrame = this.animations[this.currentAnim * 2];
		
	}
	
}

sprite.prototype.renderSpr = function(_x, _y, _width, _height, _rotation, _xFlip, _yFlip){
	
	/* Transform the canvas, and thus the sprite */
	canvasContext.save();
	canvasContext.translate(_x, _y);
	canvasContext.rotate(_rotation * Math.PI / 180);
	canvasContext.scale(_xFlip, _yFlip);
	
	/* Gets frames from left to right, top to bottom */
	canvasContext.drawImage(this.image,
							(this.frameWidth * this.currentFrame) % this.image.width,
							Math.floor((this.frameHeight * this.currentFrame) / this.image.height),
							this.frameWidth, this.frameHeight,
							-(_width / 2) , -(_height / 2), _width, _height);
	
	/* Undo the canvas transformations so they do not affect anything else */
	canvasContext.restore();
}