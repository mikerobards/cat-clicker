const clickTotal = document.getElementById('clicks');
const catList = document.getElementById('catList');

// cats object array
const cats = [{
    name: "Buddy",
    pic: "assets/Black_barn_cat_-_Public_Domain.jpg",
    count: 0
  },
  {
    name: "Mimi",
    pic: "assets/cat-face.jpg",
    count: 0
  },
  {
    name: "Nelson",
    pic: "assets/cat3.jpg",
    count: 0
  },
  {
    name: "Cosmo",
    pic: "assets/cat4.jpg",
    count: 0
  },
  {
    name: "Cloudy",
    pic: "assets/cat5.jpg",
    count: 0
  }
];

// forEach loop creating cat list
// cats.forEach(function(cat) {

for (let i = 0; i < cats.length; i++) {
  let cat = cats[i];
  // creates list of cats with id's
  let li = document.createElement('li');
  li.innerText = cat.name;
  li.setAttribute("id", cat.name);

  // clicking a name on the list displays cat name, pic and # clicks
  li.addEventListener('click', (function(kitty) {
    let catName = document.getElementById('catName');
    let catPic = document.getElementById('catPic');
    console.log(kitty);
    return function() {

      catPic.addEventListener('click', function() {
        console.log(cat);
        cat.count++;
        // count++;
        console.log(cat.count);
      }, false);


      // displays clicked selection
      catName.innerText = cat.name;
      catPic.setAttribute('src', cat.pic);
      clickTotal.innerText = `${cat.count} Clicks!`;
    };

  })());


  catList.appendChild(li);
};