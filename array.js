// Data di dalam Array tidak ada batasannya harus data apa
// Bahkan kita juga bisa memasukkan Array ke dalam Array jika kita mau


const buah = ["mangga", "apel", "anggur"];

// menambah data ke array
buah.push("jeruk");
console.table(buah);

// mendapat panjang array
console.info("Panjang array adalah : " + buah.length);

// mendapat data dari indeks
console.log(buah[3]);

// mengubah data dari indeks
buah[1] = "pisang";
console.table(buah);

