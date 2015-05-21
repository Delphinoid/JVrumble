function rotatedPointX(pX, pY, pivotX, pivotY, rot){

    /* Returns the x position of the point (pX, pY) after being
	rotated "rot" radians around the point (pivotX, pivotY) */
	
    return((Math.cos(rot) * (pX - pivotX)) - (Math.sin(rot) * (pY - pivotY)) + pivotX);
	
}

function rotatedPointY(pX, pY, pivotX, pivotY, rot){

    /* Returns the y position of the point (pX, pY) after being
	rotated "rotation" radians around the point (pivotX, pivotY) */

	return((Math.sin(rot) * (pX - pivotX)) + (Math.cos(rot) * (pY - pivotY)) + pivotY);
	
}

function getProjPoint(pX, pY, axisX, axisY){

    /* Projects the point (pX, pY) onto the axis (axisX, axisY)
	and returns a scalar value describing its position along
	the axis */

    var projection = ((pX * axisX) + (pY * axisY)) / ((axisX * axisX) + (axisY * axisY));
    var projectionX = (projection * axisX * axisX);
	var projectionY = (projection * axisY * axisY);
	
	return(projectionX + projectionY);

}

function SATcollision(rec1X, rec1Y, rec1W, rec1H, rec1PX, rec1PY, rec1R, rec2X, rec2Y, rec2W, rec2H, rec2PX, rec2PY, rec2R){
	
	/* Check collision between two rotated rectangles using SAT */
	
	
	/* Convert rotation unit from degrees to radians */
    rec1R = rec1R / 180 * Math.PI;
    rec2R = rec2R / 180 * Math.PI;

	
	/* Find the positions of each corner after rotation */
    var rec1ULx = rotatedPointX(rec1X, rec1Y, rec1PX, rec1PY, rec1R);
    var rec1ULy = rotatedPointY(rec1X, rec1Y, rec1PX, rec1PY, rec1R);

    var rec1URx = rotatedPointX(rec1X + rec1W, rec1Y, rec1PX, rec1PY, rec1R);
    var rec1URy = rotatedPointY(rec1X + rec1W, rec1Y, rec1PX, rec1PY, rec1R);

    var rec1LLx = rotatedPointX(rec1X, rec1Y + rec1H, rec1PX, rec1PY, rec1R);
    var rec1LLy = rotatedPointY(rec1X, rec1Y + rec1H, rec1PX, rec1PY, rec1R);

    var rec1LRx = rotatedPointX(rec1X + rec1W, rec1Y + rec1H, rec1PX, rec1PY, rec1R);
    var rec1LRy = rotatedPointY(rec1X + rec1W, rec1Y + rec1H, rec1PX, rec1PY, rec1R);

    var rec2ULx = rotatedPointX(rec2X, rec2Y, rec2PX, rec2PY, rec2R);
    var rec2ULy = rotatedPointY(rec2X, rec2Y, rec2PX, rec2PY, rec2R);

    var rec2URx = rotatedPointX(rec2X + rec2W, rec2Y, rec2PX, rec2PY, rec2R);
    var rec2URy = rotatedPointY(rec2X + rec2W, rec2Y, rec2PX, rec2PY, rec2R);

    var rec2LLx = rotatedPointX(rec2X, rec2Y + rec2H, rec2PX, rec2PY, rec2R);
    var rec2LLy = rotatedPointY(rec2X, rec2Y + rec2H, rec2PX, rec2PY, rec2R);

    var rec2LRx = rotatedPointX(rec2X + rec2W, rec2Y + rec2H, rec2PX, rec2PY, rec2R);
    var rec2LRy = rotatedPointY(rec2X + rec2W, rec2Y + rec2H, rec2PX, rec2PY, rec2R);


    /* Calculates an axis for each face of the two rectangles.
	Because the axes of four of the faces will be identical to
	those of the faces they're parallel to, we don't need them */
    var axis1X = rec1URx - rec1ULx;
    var axis1Y = rec1URy - rec1ULy;

    var axis2X = rec1URx - rec1LRx;
    var axis2Y = rec1URy - rec1LRy;

    var axis3X = rec2ULx - rec2LLx;
    var axis3Y = rec2ULy - rec2LLy;

    var axis4X = rec2ULx - rec2URx;
    var axis4Y = rec2ULy - rec2URy;
	
	
    var scalar1;
    var scalar2;
    var scalar3;
    var scalar4;
    var scalar5;
    var scalar6;

	/* Projects all of the vertices of the rectangles onto each
	unique axis and checks if there is a gap between the vertices 
	of rectangle 1 and those of rectangle 2. If there are no gaps
	on any of the four axes, there is collision.*/
    for(d = 0; d < 4; d++){
        switch(d){
			case 0: // axis 1
				scalar1 = getProjPoint(rec1URx, rec1URy, axis1X, axis1Y);
				scalar2 = getProjPoint(rec1ULx, rec1ULy, axis1X, axis1Y);
				scalar3 = getProjPoint(rec2URx, rec2URy, axis1X, axis1Y);
				scalar4 = getProjPoint(rec2ULx, rec2ULy, axis1X, axis1Y);
				scalar5 = getProjPoint(rec2LRx, rec2LRy, axis1X, axis1Y);
				scalar6 = getProjPoint(rec2LLx, rec2LLy, axis1X, axis1Y);
				break;
	
			case 1: // axis 2
				scalar1 = getProjPoint(rec1URx, rec1URy, axis2X, axis2Y);
				scalar2 = getProjPoint(rec1LRx, rec1LRy, axis2X, axis2Y);
				scalar3 = getProjPoint(rec2URx, rec2URy, axis2X, axis2Y);
				scalar4 = getProjPoint(rec2ULx, rec2ULy, axis2X, axis2Y);
				scalar5 = getProjPoint(rec2LRx, rec2LRy, axis2X, axis2Y);
				scalar6 = getProjPoint(rec2LLx, rec2LLy, axis2X, axis2Y);
				break;
	
			case 2: // axis 3
				scalar1 = getProjPoint(rec2ULx, rec2ULy, axis3X, axis3Y);
				scalar2 = getProjPoint(rec2LLx, rec2LLy, axis3X, axis3Y);
				scalar3 = getProjPoint(rec1URx, rec1URy, axis3X, axis3Y);
				scalar4 = getProjPoint(rec1ULx, rec1ULy, axis3X, axis3Y);
				scalar5 = getProjPoint(rec1LRx, rec1LRy, axis3X, axis3Y);
				scalar6 = getProjPoint(rec1LLx, rec1LLy, axis3X, axis3Y);
				break;
	
			case 3: // axis 4
				scalar1 = getProjPoint(rec2ULx, rec2ULy, axis4X, axis4Y);
				scalar2 = getProjPoint(rec2URx, rec2URy, axis4X, axis4Y);
				scalar3 = getProjPoint(rec1URx, rec1URy, axis4X, axis4Y);
				scalar4 = getProjPoint(rec1ULx, rec1ULy, axis4X, axis4Y);
				scalar5 = getProjPoint(rec1LRx, rec1LRy, axis4X, axis4Y);
				scalar6 = getProjPoint(rec1LLx, rec1LLy, axis4X, axis4Y);
				break;
        }

        var recMinA = Math.min(scalar1, scalar2);
        var recMaxA = Math.max(scalar1, scalar2);

        var recMinB = Math.min(scalar3, scalar4) < Math.min(scalar5, scalar6) ? Math.min(scalar3, scalar4) : Math.min(scalar5, scalar6);
        var recMaxB = Math.max(scalar3, scalar4) > Math.max(scalar5, scalar6) ? Math.max(scalar3, scalar4) : Math.max(scalar5, scalar6);
		
        if(recMinB <= recMaxA && recMaxB >= recMinA){
            if(d == 3){
                return true;
            }
        }else{
            return false;
        }
		
    }

    return false;

}