
var person = {
    firstName:"Young",
    lastName: "Elefiku",
    myAge: 23,
    myColor:"Blue",
    fullName:function(){
        return "My name is " + this.firstName + " and am " + this.myAge + "years old";
    }
};

// object constructor
function Person(firstName, lastName, myAge, myColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.myAge = myAge;
    this.myColor = myColor;
}

// class Cars{
//     constructor(carName, carModel, gearType, carColor){
//         this.name = carName,
//         this.model = carModel,
//         this.gear = gearType,
//         this.color = carColor
//     }
// }

// class subCars extends Cars{
    
// }

var venza = new Cars("Venza", "2021", "Auto", "cyan");
var range = new Cars("Range", "2021", "Auto", "pink");
var lexus = new Cars("Lexus", "2021", "Auto", "lightgrey");



var young = new Person("Young", "Elefiku", 23, "blue");
var ken = new Person("Ken", "Turkey", 33, "black");
var emmy = new Person("Emmy", "Job", 34, "red");
var uche = new Person("Uche", "9ja", 35, "pink");
var hamp = new Person("Hamp", "Togo", 19, "yellow");