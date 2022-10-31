// Interfaces are similar to aliases except they only apply on objects unlike
// aliases which apply to string, objects and arrays

interface Rectangle {
	height: number,
	width: number
}

//interfaces can also extend each other

interface ColoredRectangle extends Rectangle {
	color: string
}

const coloredRectangle: ColoredRectangle = {
	height: 20,
	width: 10,
	color: "red"
};

console.log(coloredRectangle);

