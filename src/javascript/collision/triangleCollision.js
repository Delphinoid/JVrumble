function pointInTriangle(pX, pY, x1, y1, x2, y2, x3, y3){
	
	var crossProduct1 = (((pX - x2) * (y1 - y2)) - ((x1 - x2) * (pY - y2))) < 0.0;
	var crossProduct2 = (((pX - x3) * (y2 - y3)) - ((x2 - x3) * (pY - y3))) < 0.0;
	var crossProduct3 = (((pX - x1) * (y3 - y1)) - ((x3 - x1) * (pY - y1))) < 0.0;
	
	return((crossProduct1 == crossProduct2) && (crossProduct2 == crossProduct3));
	
}