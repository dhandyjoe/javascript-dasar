function outer () {

	function inner() {
		console.log("Ini adalah function inner")
	}

	inner();
	inner();
}

outer();