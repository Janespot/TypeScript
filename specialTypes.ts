//special type "any"

let u: any = true;
u = "string";
console.log(Math.round(u));

//"any"should be avoided at all cost
//
//special type "unknown" is like "any" but better than "any"
//it's ised when we don't know the type of data being typed

let w: unknown = 1;
w = "string";

w = {
	runANonExistentMethod: () => {
		console.log("I think therefore I am");
	}
} as { runANonExistentMethod: () => void }

if(typeof w === 'object' && w !== null) {
	(w as { runANonExistentMethod: Function }).runANonExistentMethod();
}


//special type "never" - always throws an error when defined
//it's rarely used by itself, it's primarily used in advanced generics


let k: never = true;//Error: Type 'boolean' is not assignable to type 'never'


//special types "undefined" and "null" are types that refer to js primitives "undefined and null respectively
//they don't have much use unless strictNullChecks is enabled in the tsconfig.json file



let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);
