/*

	Recursive function adalah kemampuan 
	function memanggil function dirinya sendiri


*/

function rekursif (number) {
	if (number == 0) {
		return 1;
	}

	return number * rekursif(number - 1);
}

const hasil = rekursif(9);
console.log(hasil);