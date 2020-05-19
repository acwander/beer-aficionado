let endpoint = "beers";
const fixCORS = `https://cors-anywhere.herokuapp.com/`;
const APIKEY = `267e0b1478baa842b500f2a4b17f73c5`;
let link = `${fixCORS}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${APIKEY}`;

// use this link during production to keep API calls minimal and avoid errors
// const link = "/data.json";

// cycle banner images every 5 seconds
const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
let currentImage = images[0];
setInterval(() => {
  if (images[0] == currentImage) {
    $(".banner-img").attr("src", `/images/${images[1]}`);
    currentImage = images[1];
  } else if (images[1] == currentImage) {
    $(".banner-img").attr("src", `/images/${images[2]}`);
    currentImage = images[2];
  } else {
    $(".banner-img").attr("src", `/images/${images[0]}`);
    currentImage = images[0];
  }
}, 5000);

// toggle info paragraphs
$(".how-title").click(function (e) {
  e.preventDefault();
  $(e.currentTarget)
    .next()
    .toggle(() => {
      $("e.currentTarget").css("display", "inline-block");
    });
});

$.ajax({
  type: "GET",
  url: link,
  dataType: "json",
}).then(
  (data) => {
    // functions
    const cycle = () => {
      // assign and append image
      $("<img>").attr("src", images[currentIndex]).prependTo(".carousel-img");
      // assign and append name
      $('<h2 class="beer-name beer-info">')
        .text(name[currentIndex])
        .appendTo("#carousel-info");
      // assign and append style
      $('<h3 class="beer-style beer-info">')
        .text(style[currentIndex])
        .appendTo("#carousel-info");
      // assign and append abv
      $('<h3 class="beer-abv beer-info">')
        .text(abv[currentIndex] + "% ABV")
        .appendTo("#carousel-info");
      // assign and append description
      $('<p class="beer-desc beer-info">')
        .text(desc[currentIndex])
        .appendTo("#carousel-info");
    };

    const hide = () => {
      // hide image
      $(".carousel-img").children().css("display", "none");
      // hide all information (name, style, abv, description)
      $(".beer-info").css("display", "none");
    };

    // arrays
    const dataArr = data.data;
    const name = [];
    const style = [];
    const abv = [];
    const desc = [];
    const images = [];

    for (const key of dataArr) {
      // only pull info of beers that is defined
      if (
        key.nameDisplay !== undefined &&
        key.abv !== undefined &&
        key.description !== undefined &&
        key.labels !== undefined
      ) {
        // push data to assigned array
        name.push(key.nameDisplay);
        style.push(key.style.shortName);
        abv.push(key.abv);
        desc.push(key.description);
        images.push(key.labels.large);
      }
    }

    let currentIndex = 0;
    const numOfImgs = images.length - 1;

    // next button functionality
    $(".next-btn").click(function (e) {
      e.preventDefault();
      hide();
      if (currentIndex < numOfImgs) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      cycle();
    });

    // previous button functionality
    $(".previous-btn").click(function (e) {
      e.preventDefault();
      hide();
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = numOfImgs;
      }
      cycle();
    });
  },
  (err) => {
    console.log("Error", err);
  }
);
