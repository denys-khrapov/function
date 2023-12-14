function calculateCircleArea(radius) {
	return Math.PI * Math.pow(radius, 2);
 }
 
 const radius = prompt("Введіть радіус кола:");
 const area = calculateCircleArea(radius);
 
 console.log('Площа кола з радіусом' + radius + ' дорівнює: ' + area);
 

 