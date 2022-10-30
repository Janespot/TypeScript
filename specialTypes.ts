//special type "any"

let u: any = true;
u = "string";
console.log(Math.round(u));

//"any"should be avoided at all cost
//
//special type "unknown" is like "any" but better than "any"

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
