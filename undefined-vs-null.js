/* 

	Perbedaan dari Undefined dan Null
	- Undefined = variable belum ditambahkan value apapun
	- null = variable sudah ditambahkan value nya, hanya saja value nya null

*/

const piring = undefined;

if (piring === undefined) {
	console.log("ini adalah undefined");
} else if (piring === null) {
	console.log("ini adalah null");
} else {
	console.log("ini adalah variable biasa");
}