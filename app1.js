// two views: one for the list, one for the catDisplay,
// each with own render function

// NEVER have model and view talk directly to
// each other

$(document).ready(function() {
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
        catList.appendChild(li);
      });
    }
  };

  const selectedCatView = {
    // show selectedCat
    init: function() {

      this.render();
    },

    render: function() {

    }
  };

  octopus.init();
}());