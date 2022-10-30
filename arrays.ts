const names: string[] = [];
names.push("Jane");// no error
names.push(3); // error: type"number"
console.log(names);

//to avoid arrays from being changed use "readonly" keyword"


const names: readonly string[] = ["Jane"];
names.push("June");//error at the string is readonly
console.log(names);




