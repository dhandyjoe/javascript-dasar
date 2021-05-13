/*

	For In merupakan perulangan for yang digunakan 
	untuk mengiterasi seluruh data property di object atau index di array

	Melakukan iterasi terhadap index	
*/

const nama = ["Dhandy", "Jenny", "Bona", "Putri", "Putra"];

for (const name in nama) {
	console.log("Nama saya adalah : " + name);
}