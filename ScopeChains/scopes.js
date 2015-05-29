// Scope 
// function foo () {
// 	var bar;
// }

// Scrope Chains
// function foo () {
// 	var bar;
// 	function zip () {
// 		var quux;
// 	}
// }

// Global Scope & Shadowing
// function foo () {
// 	var bar;
// 	quux = '1';
// 	function zip () {
// 		var quux = '2';
// 	}
// }

// Closures
// function foo () {
// 	var bar;
// 	quux = '1';
// 	return zip;
// 	function zip () {
// 		bar = true;
// 		var quux = '2';
// 	}
// }

// Garbage Collection
function foo () {
	var bar;
	quux = '1';
	return zip;
	function zip () {
		bar = true;
		var quux = '2';
	}
}