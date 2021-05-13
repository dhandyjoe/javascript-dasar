/*

	Nullist coalescing operator (??) adalah operator mirip dengan 
	ternary operator, yang membedakan adalah pada kondisi, 
	jika bernilai null atau undefined, baru value default nya diambil

	keyword -> ??

*/

let parameter;

let value = parameter ?? "Nilai Default";
console.log(value)