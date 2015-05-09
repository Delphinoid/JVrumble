function boxCollision(box1, box2){
	if(((box1.x - (box1.width / 2)) >= (box2.x - (box2.width / 2)) && (box1.x - (box1.width / 2)) <= (box2.x + (box2.width / 2)) || (box2.x - (box2.width / 2)) >= (box1.x - (box1.width / 2)) && (box2.x - (box2.width / 2)) <= (box1.x + (box1.width / 2))) &&
	   ((box1.y - (box1.height / 2)) >= (box2.y - (box2.height / 2)) && (box1.y - (box1.height / 2)) <= (box2.y + (box2.height / 2)) || (box2.y - (box2.height / 2)) >= (box1.y - (box1.height / 2)) && (box2.y - (box2.height / 2)) <= (box1.y + (box1.height / 2)))){
		return(true);
	}else{
		return(false);
	}
}