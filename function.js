// function biasa
function contoh1 () {;
	console.log("Dhandy adalah seorang mahasiswa");
}

// function dengan parameter dan return value
function contoh2 (A, B) {
	return A + B;
}

// function default parameter
// default paramter harus di paling kanan
function contoh3 (gender, name = "Dhandy",) {
	console.log(name + " : " + gender);
}

// Contoh menghentikan looping menggunakan return
function angka (array, searchValue) {
	for (let elements of array) {
		if (elements == searchValue) {
			return true;
		}
	}
	return false
}

const status = angka([1,2,3,4,5], 6);
console.log(status);