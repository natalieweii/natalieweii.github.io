// s1 outfit
let s1 = document.getElementById("s1");
/* the process: */
s1.onclick = function() {
	document.getElementById("body").style.display="none";
	for (let outfit=0; outfit < document.getElementsByClassName("outfit").length; outfit++) {
		(document.getElementsByClassName("outfit"))[outfit].style.display="none";
	document.getElementById("o1").style.display="block";
	}

	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};

// s2 outfit
let s2 = document.getElementById("s2");
s2.onclick = function() {
	document.getElementById("body").style.display="none";
	for (let outfit=0; outfit < document.getElementsByClassName("outfit").length; outfit++) {
		(document.getElementsByClassName("outfit"))[outfit].style.display="none";
	document.getElementById("o2").style.display="block";
	}};
/* get #s2 outfit */
/* repeat process */

// s3 outfit
let s3 = document.getElementById("s3");
s3.onclick = function() {
	document.getElementById("body").style.display="none";
	for (let outfit=0; outfit < document.getElementsByClassName("outfit").length; outfit++) {
		(document.getElementsByClassName("outfit"))[outfit].style.display="none";
	document.getElementById("o3").style.display="block";
	}};
/* get #s3 outfit */
/* repeat process */

// s4 outfit
let s4 = document.getElementById("s4");
s4.onclick = function() {
	document.getElementById("body").style.display="none";
	for (let outfit=0; outfit < document.getElementsByClassName("outfit").length; outfit++) {
		(document.getElementsByClassName("outfit"))[outfit].style.display="none";
	document.getElementById("o4").style.display="block";
	}};
/* get #s4 outfit */
/* repeat process */

// s5 outfit
let s5 = document.getElementById("s5");
s5.onclick = function() {
	document.getElementById("body").style.display="none";
	for (let outfit=0; outfit < document.getElementsByClassName("outfit").length; outfit++) {
		(document.getElementsByClassName("outfit"))[outfit].style.display="none";
	document.getElementById("o5").style.display="block";
	}};
/* get #s5 outfit */
/* repeat process */

// strip outfit
let strip = document.getElementById("strip-button");
strip.onclick = function() {
	document.getElementById("body").style.display="block";
	for (let outfit=0; outfit < document.getElementsByClassName("outfit").length; outfit++) {
		(document.getElementsByClassName("outfit"))[outfit].style.display="none";
	/* call the function you created to hide all the outfits */
	/* show #body */
}};