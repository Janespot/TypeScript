enum cardinalDirections {
	North,//starts with 0 which is default value when not assigned
	East,
	South,
	West
};

let currentDirection = cardinalDirections.North;

console.log(currentDirection);


//we can initializethe first value if we don't want it to start from 0:
enum cardinalDirections {
	North = 1,
	East,
	South,
	West
};
console.log(cardinalDirections.North);//1

console.log(cardinalDirections.West);//4

//we can also set each value in different order which will therefore not be increamented as there is no order e.g.

enum statusCode {
	NotFound = 404,
	Success = 200,
	Accepted = 202,
	BadRequest = 400
};

console.log(statusCode.NotFound);//404

console.log(statusCode.Success);//200

