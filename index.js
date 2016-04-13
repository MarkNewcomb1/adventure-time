var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid", 
    "dachshund"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace",
    "wet string"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to",
    "did some light tax accounting for"
];

var heroGender = Math.random() > 0.5 ? "hero" : "heroine";
var button = document.getElementById("new_adventure");


/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/

function randomize (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generateStory () {
    var chosenMonster = randomize(monsters);
    var chosenWeapon = randomize(weapons);
    var chosenAction = randomize(actions);

    var output = "Armed with only their " + chosenWeapon + " our " + heroGender + " " +
        chosenAction + " the evil " + chosenMonster + "!";

    document.getElementById("adventure").innerText = output;
}



button.onclick = generateStory;

/*

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/