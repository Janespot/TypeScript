const student: {name: string, year: number, age: number } = {
	name: "June",
	year: 4,
	age: 22
};

console.log(student);

//TypeScript can infer types of properties based on their values
//For optional properties i.e. properties that are not assigned at the moment:

const car: { type: string, mileage?: number } = {
	type: "Toyota"
};
car.mileage = 2000;
console.log(car);

//index signatures are used for objects without a defined list of properties:

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jake = 27;
nameAgeMap.Joan = "Fifty";//Error: type 'string' not assignable to type 'number'

console.log(nameAgeMap);

