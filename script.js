var database = [
     {
     	username: "ANY",
     	password: "seceret"
     }
];

var newsFeed = [
{
	username: "son",
	timeline: "So tired from all learning"
},

{
	username: "akshay",
	timeline: "aksahy is so smart"
}

];
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(user,pass) {
	if(user === database[0].username &&
	  pass === datsbase[0].password){
		console.log(newsFeed);
	} else {
		alert("Sorry,wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);