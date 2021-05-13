// sama dengan if else namun lebih sederhana
// Kondisi di switch statement hanya untuk perbandingan ==

const grade = "E";

switch (grade) {
	case "A" :
		console.log("Sempurna");
		break;
	case "B" :
		console.log("Baik");
		break;
	case "C" :
		console.log("Cukup");
		break;
	case "D" :
		console.log("Ulang");
		break;
	default :
		console.log("Tidak lulus");
}