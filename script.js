const clickTotal = document.getElementById('clicks');
let catName = document.getElementById('catName');
const firstCat = "Buddy";


// const cat = document.getElementById('catPic');
// let catCount = 0;
// cat.addEventListener('click', () => {
//   catCount++;
//   clickTotal.innerText = `${catCount} Clicks!`;
// }, false);

catName.innerText = firstCat;

// const cat2 = document.getElementById('catPic2');
// let cat2count = 0;
// cat2.addEventListener('click', () => {
// 	cat2count++;
// 	clickTotal2.innerText = `${cat2count} Clicks!`;
// }, false);
//
// catName2.innerText = secondCat;

const cats = [{
    name: "Buddy",
    pic: "assets/Black_barn_cat_-_Public_Domain.jpg"
  },
  {
    name: "Mimi",
    pic: "assets/cat-face.jpg"
  },
  {
    name: "Nelson",
    pic: "assets/cat3.jpg"
  },
  {
    name: "Cosmo",
    pic: "assets/cat4.jpg"
  },
  {
    name: "Cloudy",
    pic: "assets/cat5.jpg"
  }
];

const catList = document.getElementById('catList');


cats.forEach(function(cat) {

  let li = document.createElement('li');


  li.innerText = cat.name;
  li.setAttribute("id", cat.name);





  li.addEventListener('click', (function(selectedCat) {
    let catName = document.getElementById('catName');
    let catPic = document.getElementById('catPic');
    // display cat name and pic
    catName.innerText = cat.name;

    catPic.setAttribute('src', cat.pic);

    return function() {

      let selectedCat = document.getElementById(cat.name);
      let catCount = 0;
      selectedCat.addEventListener('click', () => {
        catCount++;
        clickTotal.innerText = `${catCount} Clicks!`;
      }, false);

      catName.innerText = cat.name;
    };
  })(cat));

  catList.appendChild(li);

});