/*

	Dengan menggunakan label, kita bisa melakukan break dan continue 
	terhadap perulangan yang kita inginkan, asalkan pada perulangannya 
	kita gunakan label.


*/


loopi:
	for(let i = 1; i < 10; i++) {
		loopj:
		for (let j = 0; j < 5; j++) {
			if (j > 3) {
				continue loopi;
			}

			console.log(`${i} - ${j}`);
		}
	}