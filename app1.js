// two views: one for the list, one for the catDisplay,
// each with own render function

// NEVER have model and view talk directly to
// each other

$(document).ready(function() {

  const catPic = document.getElementById('catPic');
  const clickTotal = document.getElementById('clicks');


  // MODEL
  // cats object array
  const model = {
    currentCat: null,
    cats: [{
        name: "Buddy",
        img: "assets/buddy.jpg",
        alt: "a cat",
        count: 0
      },
      {
        name: "Mimi",
        img: "assets/mimi.jpg",
        alt: "a cat",
        count: 0
      },
      {
        name: "Nelson",
        img: "assets/nelson.jpg",
        alt: "a cat",
        count: 0
      },
      {
        name: "Cosmo",
        img: "assets/cosmo.jpg",
        alt: "a cat",
        count: 0
      },
      {
        name: "Cloudy",
        img: "assets/cloudy.jpg",
        alt: "a cat",
        count: 0
      },
      {
        name: "Cesar",
        img: "assets/cesar.jpg",
        alt: "black cat",
        count: 0
      }
    ]
  };

  // OCTOPUS

  const octopus = {

    // starts the entire application
    init: function() {
      // sets the current cat to the first  one in the list
      model.currentCat = model.cats[0];

      // initialize the views
      catListView.init();
      catDisplayView.init();
    },

    // show the catList ORIGINAL CODE

    // getCatList: function() {
    //   let catLists = cats;
    //   return catLists;
    // },


    // the view will call these functions in order to get the current cats
    // or the cat list in order to render
    getCurrentCat: function() {
      return model.currentCat;
    },

    getCats: function() {
      return model.cats;
    },


    // show the selectedCat when a cat in the catList is clicked
    // ORIGINAL CODE
    // showSelectedCat: function(cat) {
    //   console.log(cat);
    //
    //   // displays clicked selection
    //   catName.innerText = cat.name;
    //
    //   // sets cat'simg
    //   catPic.setAttribute('src', cat - img);
    //
    //   // adds class toimg to identify for click counts
    //   catPic.setAttribute('class', cat.name)
    //
    //   // displays current count
    //   clickTotal.innerText = `${cat.count} Clicks!`;
    //   return cat;
    // },

    // sets the selected cat to the object passed in?
    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },

    // increases the count for the currently selected cat
    increaseCount: function() {
      model.currentCat.count++;
      catDisplayView.render();
    }

    // // increase count when clicked ORIGINAL CODE
    // increaseCount: function() {
    //   catPic.addEventListener('click', function() {
    //     let kitty = catPic.className;
    //     let index = cats.findIndex(x => x.name == kitty);
    //     cats[index].count++;
    //     console.log(kitty);
    //     console.log(cats[index].count);
    //     clickTotal.innerText = `${cats[index].count} Clicks!`;
    //   });
    // },

    // ORIGINAL CODE
    // had the init function at the bottom of the object.
    // meh, doesn't matter where
    // init: function() {
    //   catListView.init();
    //
    //   // selectedCatView.init();
    // }
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