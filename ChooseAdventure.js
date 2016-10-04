
var path = prompt('There is a rabid mutant Mike Sweeney on the loose and is chasing you down an intersection...you take a path....Left or Right');
var score = function() {
} ;

if (path.toLowerCase() == 'left') {
	var left = prompt("You take the path left into a Sears to which you have a choice of hiding in a Washer, Refigerator, or the employee lounge...Which do you Choose?");

	left = left.toLowerCase();

	if (left == 'washer') {
		 alert("You hid in a nice washing machine, Mike Sweeney approaches spewing radioactive sludge everywhere. He spots you in the washing machine and turns it on... as you spin you slowly drown to death. :/")
	}

	if (left == 'refigerator' || left == 'fridge') {
		confirm("You go for the fridge and slowly close the door. You hear rustling and tumbling...and then it gets quiet...do you want to check outside the fridge and make a run for it?")
		if (true)
			alert("You quietly open the fridge door and run as fast you can to the outside to which you find a seering sludge pile that you fall into burning you into a crisp")
			else  {
				alert("You stay in there for an extra 5 minutes and then manage to escape outside. You win!")
			
		}
	}

	if (left == 'employee lounge' || left == 'lounge') {
		confirm("You see the employee lounge and you rush and close the door behind you. You see four employees named Tim, Jason, Carrie, and Ryan....they say to only stop Sweeney is to make two human sacrifices...Are you going to do it?")
		if (true) {
			var name = prompt("Wow you are a moral monster if you made this choice....who would you choose? Tim, Carrie, Jason, or Ryan.")
			if (name == 'Carrie' || name == 'carrie' || name == 'Ryan' || name == 'ryan') {
				alert("You sent poor Carrie and Ryan out to Sweeney to get eaten. Lucky for them Sweeney is allergic to veal to which Ryan was carrying around in his pocket his friend made him on Master Chef. So Sweeney dissolved into a puddle after he chucked it at him and now there is peace and you are safe!")
			} else { 
				alert("You send Tim and Jason out there, Sweeney charges and spews radioactive sludge and they melt to just bones. Then he comes for you! And you suffer the same fate!")

			}
		}
	}

} else {
	var right = confirm("You take the path right into a forest to which you encounter the 10,000 foot Gabe to which he says I will help you defeat Sweeney do you accept his help?")
	if (right == true) {
		alert("You humbly accepted Gabe's help, he nods and charges towards Sweeney. Grabbing him with his giant hands and crushing him to death.")

	} else { 
		var joke = prompt("You didn't accept his help...Uh oh.....you ticked off Gabe, he says that I have a choice of answering him this one question or I'll get stomped on....What did the traffic light say to the car? Choices: Dont look I am changing, That's Mike's joke")
		if (joke.toLowerCase == 'Dont look Im changing')
			alert("You utter the answer, Gabe laughs in hysteria. Mike Sweeney comes charging saying he stole his joke and they start to fight and a battle ensues and you are in the cross fire to which you utterly get destroyed!")
		else {
			alert("You call out Gabe on his plagarism and Mike slowly creeping behind you. He hears you defending him. To which he protects you from the 10,000 foot Gabe and you escape as fast as possible into the woods.")
		}
	}
}



