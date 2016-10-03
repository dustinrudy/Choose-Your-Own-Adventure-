
var path = prompt('There is a rabid mutant Mike Sweeney on the loose and is chasing you down an intersection...you take a path....Left or Right');

if (path.toLowerCase() == 'left') {
	var left = prompt("You take the path left into a Sears to which you have a choice of hiding in a Washer, Refigerator, or the employee lounge...Which do you Choose?");

	left = left.toLowerCase();

	if (left == 'washer') {
		 alert("You hid in a nice washing machine, Mike Sweeney approaches spewing radioactive sludge everywhere. He spots you in the washing machine and turns it on... as you spin you slowly drown to death. :/")
	}

	if (left == 'refigerator' || left == 'fridge') {
		confirm("You go for the fridge and slowly close the door. You hear rustling and tumbling...and then it gets quiet...do you want to check outside the fridge and make a run for it?")
	}

	if (left == 'employee lounge' || left == 'lounge') {
		confirm("You see the employee lounge and you rush and close the door behind you. You see four employees named Tim, Jason, Carrie, and Ryan....they say to only stop Sweeney is to make two human sacrifices...Are you going to do it?")
		if (true) {
			prompt("Wow you are a moral monster if you made this choice....who would you choose? Tim, Carrie, Jason, or Ryan.")
			if (true == 'Carrie' || true == 'carrie' && true == 'Ryan' || true == 'ryan')
				alert("You sent poor Carrie and Ryan out to Sweeney to get eaten. Lucky for them Sweeney is allergic to veal to which Ryan was carrying around in his pocket. So Sweeney dissolved into a puddle and you are safe!")
		}
	}

} else {
	var right = confirm("You take the path right into a forest to which you encounter the 10,000 foot Gabe to which he says I will help you defeat Sweeney do you accept his help?")
	if (right == true) {
		alert("You humbly accepted Gabe's help, he nods and charges towards Sweeney. Grabbing him with his giant hands and crushing him to death.")

	} else {

	}
}



