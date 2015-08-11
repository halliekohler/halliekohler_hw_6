//LOOPS

//for loops

for (var i = 0 ; i < 10; i ++){
	console.log(i)
}

//set a variable:
var colors = ["yellow","green","red"]

for (var i = 0; i < colors.length; i++){
	console.log(colors[i])
}



//while loops

var i = 99;
//this   ^  is where you are starting

while (i >= 0) {
console.log(i + " bottles of beer on the wall, " + i + " bottles of beer...take one down, pass it around ");
i--;
}

//these loops go on until i no longer meets the criteria. i is a number.
// i-- means you are counting down, and i++ means you are counting up


//this is how you add the jQuery library to your html file (looks werid here because this is a .js file)

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
</script>


// The DOM (document object model) is a standard for interacting with and representing objects
// jQuery makes it incredibly easy to select elements in the DOM, which include practically any HTML tag or element

//The format for selecting elements is:
$("<element name, class, id>")

$(document).ready()
//ensures that your code doesn't run until your document fires a ready event

//Eample of code that executes when the document is ready
 $(document).ready(
 	 function(){
    	alert("ready");
  }
);

//Anonymous functions (functions with no name) can:
	//given as an argument to a function
	//returned by a function
	//assigned to a variable

// my example from class:
var x = function(){
	return alert("hello");
	}

//examples from slides:
function(){
  alert("I am anonymous!");
}

var my_anon_func = function(){ 
	alert("Har!"); 
}

//A callback is an anonymous function supplied to another function to be run when that function is done running

var hello = function(){ 
	alert('hello world'); 
}
/* Declare a regular or anonymous function that takes another function as an argument, does something,
then runs that other function */

function greetings(hello){ 
	console.log(3-1); 
	hello(); 
}

// Call the regular function, supplying the initial anonymous function as an argument
greetings(hello);


//my callbac example from class:
var callback = function(){
	alert("hellow world");

}

function runner(anotherTask) {
	console.log(2+2);
	anotherTask();
}


//Use jQuery:

//showing and hiding
$("body").hide();


$("body").show();
$("p").hide(3000);

//animating
$("h1").animate({
	width: "50%",
	opacity: 0.5
}, 3000);

//can only animate CSS attriutes with numbers as their property % must be in " "


//click function
$(".h1").click(function() {
  alert("Hello World!");
});

//fade in, fade out
$("div").fadeOut(1000, function() {
  $("div").fadeIn(1000);
});
//number in purple is the time in milliseconds
