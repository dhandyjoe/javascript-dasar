/*

	Pada tipe data object, kita sudah membahas tentang property di object
	Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
	Cara pembuatannya pun sama dengan function sebagai value
	Function di object kadang disebut juga sebagai Object Method

*/

const person = {
	firstName: "Dhandy",
	lastName: "Joe",
	sayHello: function (name) {
		console.log("Halo, Dhandy");
	}
};

person.sayHello();
