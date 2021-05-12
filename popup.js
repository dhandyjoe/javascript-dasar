/* 

	Ada 3 Popup :
	a.	Alert -> untuk memberi peringatan berupa popup text di browser
	b. Prompt -> untuk meminta input string dari pengguna browser dalam bentuk popup input text
	c.	Confirm -> untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan

*/

// Example :
// alert("Hati-hati ada virus!");
// prompt("Namamu siapa?");
// confirm("Apakah benar ini kamu?");

alert("Selamat Datang di Aplikasi INI");

const nama = prompt("Masukan nama anda");
confirm(`Apakah benar ini dengan ${nama}`);

alert("Login Berhasil");
