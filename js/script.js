// function calculateCircleArea(radius) {
// 	return Math.PI * Math.pow(radius, 2);
// }

// const radius = prompt("Введіть радіус кола:");
// const area = calculateCircleArea(radius);

// console.log('Площа кола з радіусом' + radius + ' дорівнює: ' + area);



function calculate(a, b, c, operation) {
	if (operation === 'add') {
		 console.log("Сума:", a + b + c);
	} else if (operation === 'subtract') {
		 console.log("Різниця:", a - b - c);
	} else if (operation === 'multiply') {
		 console.log("Добуток чисел:", a * b * c);
	} else if (operation === 'divide') {
		console.log("Ділення:", a / b / c);
	} else {
		 console.log("Невідома операція");
	}
}

calculate(15, 6, 2, 'add');
calculate(15, 6, 2, 'subtract');
calculate(15, 6, 2, 'multiply');
calculate(15, 6, 2, 'divide');
