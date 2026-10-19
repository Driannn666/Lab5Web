
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Tiyo.");
}

function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log(
        "Pembagian:",
        b !== 0 ? a / b : "Tidak dapat dibagi nol"
    );
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
    inputNilai === null ||
    inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) ||
    nilaiMahasiswa < 0 ||
    nilaiMahasiswa > 100
) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
    case "1":
        alert("Bilangan satu");
        break;
    case "2":
        alert("Bilangan dua");
        break;
    case "3":
        alert("Bilangan tiga");
        break;
    case "4":
        alert("Bilangan empat");
        break;
    case "5":
        alert("Bilangan lima");
        break;
    default:
        alert("Pilihan tidak tersedia");
}

function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function hitungNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilNilai");

    const nilai = [inputTugas, inputUTS, inputUAS].map(Number);

    if (
        [inputTugas, inputUTS, inputUAS].some(v => v.trim() === "") ||
        nilai.some(v => !Number.isFinite(v) || v < 0 || v > 100)
    ) {
        hasil.textContent =
            "Semua nilai harus diisi dengan angka 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(...nilai);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;
}

const a = Number(prompt("Masukkan nilai pertama:"));
const b = Number(prompt("Masukkan nilai kedua:"));

console.log("Jumlah:", a + b);
console.log("Selisih:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}
  
function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log(cekGenap(8)); // true
console.log(cekGenap(7)); // false
  
function toggleTeks() {
    const teks = document.getElementById("teksTambahan");

    teks.hidden = !teks.hidden;
}
  
const nama = prompt("Masukkan nama:");
const inputnilai = prompt("Masukkan nilai:");
const nilai = Number(inputNilai);

if (
    nama === null ||
    nama.trim() === "" ||
    inputNilai === null ||
    inputNilai.trim() === "" ||
    !Number.isFinite(nilai) ||
    nilai < 0 ||
    nilai > 100
) {
    alert("Nama atau nilai tidak valid.");
} else {
    alert("Nama: " + nama + ", nilai: " + nilai);
}
