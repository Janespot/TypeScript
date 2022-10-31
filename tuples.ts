// This is a typed array that has pre-defined length and types
// for each index


let myTuple: [number, boolean, string];
myTuple = [7, true, 'Janespot'];

console.log(myTuple);

//It's a good practise to make tuples readonly


const myReadonlyTuple: readonly [number, boolean, string] = [6, false, 'Hello'];
myReadonlyTuple.push('Janespot');//gives an error as this tuple is readonly
