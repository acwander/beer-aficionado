let endpoint = "beers";
const fixCors = `https://cors-anywhere.herokuapp.com/`;
const APIKEY = `267e0b1478baa842b500f2a4b17f73c5`;
// let link = `${fixCors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${APIKEY}`;
const link = "./data.json";

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
        console.log(key.style.shortName);
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
