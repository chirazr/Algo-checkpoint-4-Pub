//How Edabit Works

function hello() {

    return "hello edabit.com"

}

// Return the Sum of Two Numbers

function addition(a, b) {
    return (a+b)
	
}

//Matchstick Houses : Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step

function matchHouses(step) {
	if (step > 0) {
	 match = ((step*6) - (step -1));
	return(match)
	}
	else {
		match = 0;
		return (match)
	}
}



//Converting Objects to Arrays
function toArray(obj) {
	return Object.entries(obj);
}


//Convert Hours into Seconds


function howManySeconds(hours) {
	let seconds = (hours * 60) * 60; 
    return seconds
}



// Power Calculator

function circuitPower(a, b) {
	return ( a*b )
}




//area of a triangle


function triArea(base, height) {
	return ( (base * height) / 2)
}


// Convert Yen to USD : Create a function that can turn JPY (Japanese yen) to USD (American dollar).

function yenToUsd(yen) {
		return +(yen/107.5).toFixed(2);

}

// Convert Minutes into Seconds

function convert(minutes) {
	 let seconds = minutes * 60; 
	return seconds
}

//Vowel Sandwich

function isVowelSandwich(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
	if (str.length === 3) {
		return !vowels.includes(str[0]) && vowels.includes(str[1]) && !vowels.includes(str[2]);
	}
	else {
		return false;
	}

//Return the Next Number from the Integer Passed

function addition(num) {
	return ( num+1);
}

//Find the Perimeter of a Rectangle
function findPerimeter(a, b) {
	let perimeter = 2 * (a + b);
        return perimeter;
    }


//Find the Smallest and Biggest Numbers


function minMax(arr) {
	let arr1 = [];
     arr1.push(Math.min(...arr));
     arr1.push(Math.max(...arr));
  return arr1
}

// Convert Age to Days
function calcAge(age) {
	return (age * 365);

}


// Which Function Returns the Larger Number?
//!! 
function whichIsLarger(f, g) {

	if (f > g) {
	  return "f";
	} else if (g > f) {
	  return "g";
	} else return "neither";
  
  }



  // Return the First Element in an Array

function getFirstValue(arr) {
	const first = arr[0];
	return (first);
}


// Left Shift by Powers of Two











	
}
