function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4){
	
	var numeratorX = (((x1 * y2) - (y1 * x2)) * (x3 - x4)) - ((x1 - x2) * ((x3 * y4) - (y3 * x4)));
	var numeratorY = (((x1 * y2) - (y1 * x2)) * (y3 - y4)) - ((y1 - y2) * ((x3 * y4) - (y3 * x4)));
	var denominator = ((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4));
	
	if(denominator > -0.01 && denominator < 0.01){
		return(false);
	}
	
	var intersectionPointX = numeratorX / denominator;
	var intersectionPointY = numeratorY / denominator;
	
	var rec1minX = Math.min(x1, x2);
	var rec1maxX = Math.max(x1, x2);
	var rec2minX = Math.min(x3, x4);
	var rec2maxX = Math.max(x3, x4);
	
	return(intersectionPointX >= Math.max(rec1minX, rec2minX) && intersectionPointX <= Math.min(rec1maxX, rec2maxX));
	
}