// global consts
const clickTotal = document.getElementById('clicks');
const catList = document.getElementById('catList');
const catPic = document.getElementById('catPic');


// cats object array
const cats = [{
    name: "Buddy",
    pic: "assets/buddy.jpg",
    count: 0
  },
  {
    name: "Mimi",
    pic: "assets/mimi.jpg",
    count: 0
  },
  {
    name: "Nelson",
    pic: "assets/nelson.jpg",
    count: 0
  },
  {
    name: "Cosmo",
    pic: "assets/cosmo.jpg",
    count: 0
  },
  {
    name: "Cloudy",
    pic: "assets/cloudy.jpg",
    count: 0
  },
  {
    name: "Cesar",
    pic: "assets/cesar.jpg",
    count: 0
  }
];

// forEach loop creating cat list
cats.forEach(function(cat) {

  // creates list of cats with id's
  let li = document.createElement('li');
  li.innerText = cat.name;
  li.setAttribute('id', cat.name);

  // clicking a name on the list displays cat name, pic and # clicks
  li.addEventListener('click', (function() {
    let catName = document.getElementById('catName');

    return function() {
      // displays clicked selection
      catName.innerText = cat.name;
      // sets cat's pic
      catPic.setAttribute('src', cat.pic);

      // adds class to pic to identify for click counts
      catPic.setAttribute('class', cat.name)
      // displays current count
      clickTotal.innerText = `${cat.count} Clicks!`;
    };
  })());
  catList.appendChild(li);
});

// adds counts per click to each cat object!
catPic.addEventListener('click', function() {
  let kitty = catPic.className;
  let index = cats.findIndex(x => x.name == kitty);
  cats[index].count++;
  console.log(kitty);
  console.log(cats[index].count);
  clickTotal.innerText = `${cats[index].count} Clicks!`;
});