type carYear = number;
type carType = string;
type carModel = string;
type car = {
	year: carYear,
	type: carType,
	model: carModel
};

const CarYear: carYear = 2001
const CarType: carType = "Toyota"
const CarModel: carModel = "Corolla"
const Car: car = {
	year: CarYear,
	type: CarType,
	model: CarModel
};

console.log(Car);

