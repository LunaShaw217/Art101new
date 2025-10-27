// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "my legs", "my friends car", "some random car"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "my friends car",
    route: 67,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["Emma"],
};
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[3] + ", " + myCommutes[2] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence); 