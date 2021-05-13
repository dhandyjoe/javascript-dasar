/*

	- Pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakukan, \
	  sedangkan di do while loop dilakukan setelah perulangan dilakukan

	- Oleh karena itu dalam do while loop, minimal pasti sekali perulangan 
	  dilakukan walaupun kondisi tidak bernilai true


*/

let tahun = 20;

do {
	console.log("Sekarang dia ulang tahun yang ke - " + tahun);
	tahun++
} while (tahun < 20);