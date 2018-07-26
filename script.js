const clickTotal = document.getElementById('clicks');
const catList = document.getElementById('catList');

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

cats.forEach(function(cat) {

  let li = document.createElement('li');


  li.innerText = cat.name;
  li.setAttribute("id", cat.name);

  li.addEventListener('click', (function(selectedCat) {
    let catName = document.getElementById('catName');
    let catPic = document.getElementById('catPic');
    let catCount = 0;
    clickTotal.innerText = `${catCount} Clicks!`;

    return function(selectedCat) {

      const cat1 = document.getElementById('catPic');
      cat1.addEventListener('click', (function(selectedCat) {
        catCount++;
        clickTotal.innerText = `${catCount} Clicks!`;

      }), false);
      catName.innerText = cat.name;
      catPic.setAttribute('src', cat.pic);
      let catCount = 0;

    };

  })(cat));

  catList.appendChild(li);
});