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
    // functions
    const cycle = () => {
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
    };

    const hide = () => {
      $(".carousel-img").children().css("display", "none");
      $(".beer-info").css("display", "none");
    };

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

    // // auto cycle
    // setInterval(() => {
    //   hide();
    //   if (currentIndex < numOfImgs) {
    //     currentIndex++;
    //   } else {
    //     currentIndex = 0;
    //   }
    //   cycle();
    // }, 5000);
  },
  (err) => {
    console.log("Error", err);
  }
);
