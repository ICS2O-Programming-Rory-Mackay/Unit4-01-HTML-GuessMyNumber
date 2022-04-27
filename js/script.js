// Copyright 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays if the user correctly guesses a random number
 */
function displayMessage () {
  const MAX = 6;
  const MIN = 1;
  
  // initialize variables
	let random = Math.floor((Math.random() * MAX) + MIN);
	
	// get user input
	let userGuess = parseInt(document.getElementById('user-guess').value)

  	// if number is correct display "You got it!"
	if (userGuess == random) {
		document.getElementById("message").innerHTML = "You got it!"
	} 
	// otherwise display "Your number was incorrect."	
	else {
		document.getElementById("message").innerHTML = "Your number was incorrect. It was " + random + "."
	}
} 