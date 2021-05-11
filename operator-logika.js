const nilai = 80;
const absen = 100;

const lulusNilai = nilai > 70;
const lulusAbsen = absen > 90;

const status = lulusNilai && lulusAbsen;
console.log("Status kamu adalah : " + status);