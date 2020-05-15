let endpoint = "beers";

// $.ajax({
//   // Getting an error prior to this solution to pull the data from the API
//   // https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
//   url:
//     "https://cors-anywhere.herokuapp.com/" +
//     "https://sandbox-api.brewerydb.com/v2/" +
//     endpoint +
//     "/?key=267e0b1478baa842b500f2a4b17f73c5",
// }).then(
//   (data) => {
//     // console.log(data);
//     const dataArr = data.data;
//     for (const key of dataArr) {
//       // only pull info of beers that is defined
//       if (
//         key.nameDisplay !== undefined &&
//         key.abv !== undefined &&
//         key.description !== undefined &&
//         key.labels !== undefined
//       ) {
//         console.log(key.nameDisplay);
//         console.log(key.abv);
//         console.log(key.description);
//         console.log(key.labels.large);
//       }
//     }
//   },
//   (error) => {
//     console.log("Error", error);
//   }
// );
