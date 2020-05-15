let endpoint = "beers";
const fixCORS = `https://cors-anywhere.herokuapp.com/`;
const APIKEY = `267e0b1478baa842b500f2a4b17f73c5`;
// let link = `${fixCORS}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${APIKEY}`;
const link = "./data.json";

$.ajax({
  type: "GET",
  url: link,
  dataType: "json",
}).then(
  (data) => {
    // console.log(data);
    const dataArr = data.data;
    // data arrays
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
        // push data to organized arrays
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

      // hide current img/info
      $(".carousel-img").children().css("display", "none");
      $(".beer-info").css("display", "none");

      if (currentIndex < numOfImgs) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      $("<img>").attr("src", images[currentIndex]).prependTo(".carousel-img");

      $('<h2 class="beer-name beer-info">')
        .text(name[currentIndex])
        .appendTo("#carousel-info");

      $('<h3 class="beer-style beer-info">')
        .text(style[currentIndex])
        .appendTo("#carousel-info");

      $('<h3 class="beer-abv beer-info">')
        .text(abv[currentIndex] + "% ABV")
        .appendTo("#carousel-info");

      $('<p class="beer-desc beer-info">')
        .text(desc[currentIndex])
        .appendTo("#carousel-info");
    });

    // previous button functionality
    $(".previous-btn").click(function (e) {
      e.preventDefault();

      // hide current img/info
      $(".carousel-img").children().css("display", "none");
      $(".beer-info").css("display", "none");

      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = numOfImgs;
      }
      $("<img>").attr("src", images[currentIndex]).prependTo(".carousel-img");

      $('<h2 class="beer-name beer-info">')
        .text(name[currentIndex])
        .appendTo("#carousel-info");

      $('<h3 class="beer-style beer-info">')
        .text(style[currentIndex])
        .appendTo("#carousel-info");

      $('<h3 class="beer-abv beer-info">')
        .text(abv[currentIndex] + "% ABV")
        .appendTo("#carousel-info");

      $('<p class="beer-desc beer-info">')
        .text(desc[currentIndex])
        .appendTo("#carousel-info");
    });
  },
  (err) => {
    console.log("Error", err);
  }
);
