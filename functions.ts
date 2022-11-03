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

//optional parameters

function add(a: number, b: number, c?: number){
	return a + b + (c || 0);
}

console.log(add(2,5))

//DEFAULT PARAMETERS

function pow(value: number, exponent: number = 10){   //here, 10 is the default parameter
	return value ** exponent;
}

console.log(pow(10));

//NAMED PARAMETERS

function divide({ dividend, divisor }: { dividend: number, divisor: number }){
	return dividend / divisor;
}

console.log(divide({dividend: 10, divisor: 2}));

//REST PARAMETERS

function add(a: number, b: number, ...rest: number[]){
	return a + b + c + rest.reduce((p, c)) => p + c, 0);
}

console.log(add(10, 10, 10, 10, 10));


