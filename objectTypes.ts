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
