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
    // display cat name and pic
    catName.innerText = cat.name;



    return function() {

      let selectedCat = document.getElementById(cat.name);
      let catCount = 0;
      selectedCat.addEventListener('click', () => {
        catCount++;
        clickTotal.innerText = `${catCount} Clicks!`;
      });

      catName.innerText = cat.name;
      catPic.setAttribute('src', cat.pic);
      console.log(catName);
      console.log(catPic);

    };
  })(cat));

  catList.appendChild(li);

});