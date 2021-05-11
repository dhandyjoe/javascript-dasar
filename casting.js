/* 
	- parseInt() = string ke bilangan bulat
	- parseFloat = string ke bilangan pecahan
	- Number = string ke bilangan bulat / pecahan
	- Number.toString() = number ke string
*/

const tanggal = "10.4";
console.info(typeof(parseInt(tanggal)));
console.info(parseInt(tanggal));

console.info(typeof(parseFloat(tanggal)));
console.info(parseFloat(tanggal));

console.info(typeof(Number(tanggal))) ;
console.info(Number(tanggal));



const harga = 14000;
console.info(typeof(Number.toString(harga))) ;



