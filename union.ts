// union types is used when a value can be more than a single type using the | (OR) operator
function printStatusCode(code: string | number){
	console.log(`My status code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');



//union error - when working with union, know your types to avoid type error e.g

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}


