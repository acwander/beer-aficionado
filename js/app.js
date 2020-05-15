let endpoint = "beers";

// TODO: get userInput
// the two bars set the default value
// let userInput = $('input[type="text"]').val() || 10;

// Getting an error prior to adding cors-anywhere to GET the data
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
const fixCors = `https://cors-anywhere.herokuapp.com/`;
// const link = "";
let link = `${fixCors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=267e0b1478baa842b500f2a4b17f73c5`;

$.ajax({
  type: "GET",
  url: link,
  dataType: "json",
}).then(
  (data) => {
    // console.log(data);
    const dataArr = data.data;
    for (const key of dataArr) {
      // only pull info of beers that is defined
      if (
        key.nameDisplay !== undefined &&
        key.abv !== undefined &&
        key.description !== undefined &&
        key.labels !== undefined
      ) {
        console.log(key.nameDisplay);
        console.log(key.abv);
        console.log(key.description);
        console.log(key.labels.large);
      }
    }
  },
  (err) => {
    console.log("Error", err);
  }
);
