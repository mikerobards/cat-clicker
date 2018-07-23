const clickTotal1 = document.getElementById('clicks1');
const clickTotal2 = document.getElementById('clicks2');
let catName1 = document.getElementById('catName1');
let catName2 = document.getElementById('catName2');
const firstCat = "Buddy";
const secondCat = "Curtis";


const cat1 = document.getElementById('catPic1');
let cat1count = 0;
cat1.addEventListener('click', () => {
	cat1count++;
	clickTotal1.innerText = `${cat1count} Clicks!`;
}, false);

catName1.innerText = firstCat;

const cat2 = document.getElementById('catPic2');
let cat2count = 0;
cat2.addEventListener('click', () => {
	cat2count++;
	clickTotal2.innerText = `${cat2count} Clicks!`;
}, false);

catName2.innerText = secondCat;