// two views: one for the list, one for the catDisplay,
// each with own render function

// NEVER have model and view talk directly to
// each other

$(document).ready(function() {

  const catPic = document.getElementById('catPic');
  const clickTotal = document.getElementById('clicks');

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

  const octopus = {
    // show the catList

    getCatList: function() {
      let catLists = cats;
      return catLists;
    },

    // show the selectedCat when a cat in the catList is clicked
    showSelectedCat: function(cat) {
      console.log(cat);

      // displays clicked selection
      catName.innerText = cat.name;

      // sets cat's pic
      catPic.setAttribute('src', cat.pic);

      // adds class to pic to identify for click counts
      catPic.setAttribute('class', cat.name)

      // displays current count
      clickTotal.innerText = `${cat.count} Clicks!`;
      return cat;
    },

    // increase count when clicked
    increaseCount: function() {
      catPic.addEventListener('click', function() {
        let kitty = catPic.className;
        let index = cats.findIndex(x => x.name == kitty);
        cats[index].count++;
        console.log(kitty);
        console.log(cats[index].count);
        clickTotal.innerText = `${cats[index].count} Clicks!`;
      });
    },


    init: function() {
      catListView.init();

      // selectedCatView.init();
    }
  };

  const catListView = {
    // show the catList
    init: function() {
      const catList = document.getElementById('catList');
      this.render();
    },

    render: function() {
      // creates list of cats with id's
      octopus.getCatList().forEach(function(cat) {
        let li = document.createElement('li');
        li.innerText = cat.name;
        li.setAttribute('id', cat.name);

        // add event listener to catLists
        li.addEventListener('click', (function() {
          let catName = document.getElementById('catName');

          return function() {
            octopus.showSelectedCat(cat);
          };
        })());

        catList.appendChild(li);
      });

      octopus.increaseCount();
    }
  };

  octopus.init();
}());