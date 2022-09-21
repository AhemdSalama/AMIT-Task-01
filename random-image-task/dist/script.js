const images = [
	'https://via.placeholder.com/300.png/000/fff', // 0
	'https://via.placeholder.com/300.png/111/fff', // 1
	'https://via.placeholder.com/300.png/222/fff', // 2
	'https://via.placeholder.com/300.png/333/fff', // 3
	'https://via.placeholder.com/300.png/444/fff', // 4
	'https://via.placeholder.com/300.png/555/fff', // 5
	'https://via.placeholder.com/300.png/666/fff', // 6
	'https://via.placeholder.com/300.png/777/fff', // 7
	'https://via.placeholder.com/300.png/888/fff', // 8
	'https://via.placeholder.com/300.png/999/fff', // 9
];

// images[7]

// Make this number a random number within array items (length)
let randomNumber = Math.floor(Math.random() * (images.length-1));
console.log(randomNumber)
document.getElementById('image').src = images[randomNumber];