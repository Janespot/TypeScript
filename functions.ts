function getTime(): number {
	return new Date().getTime();
}

console.log(getTime());

//void type used when a function doesn't return any value

function printHello(): void {
	console.log("Hello!");
}

printHello();

//parameters

function multiply(a: number, b: number){
	return a * b;
}

console.log(multiply(2,5))


