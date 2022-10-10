const btn = document.querySelector('button');
const card = document.querySelector('.card');
const result = document.querySelector('.result');
const count = document.querySelectorAll('.count');
const choice = document.querySelector('.choice');
let rate = 0;
console.log(count);

count.forEach((element) =>
	element.addEventListener('click', function () {
		rate = element.innerHTML;
		console.log(element.innerHTML);
		rate = parseInt(rate);

		choice.innerHTML = rate + ' ';
	})
);

btn.addEventListener('click', function () {
	card.classList.add('hidden');

	result.classList.remove('hidden');
});
