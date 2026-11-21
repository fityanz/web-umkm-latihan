// INI JS CEK USIA
function cekUsia() {
    let usia = parseInt(document.getElementById("usia").value);

    if (isNaN(usia)) {
        document.getElementById("hasilUsia").textContent = "Masukkan usia dulu.";
        return;
    }

    if (usia < 0) {
        document.getElementById("hasilUsia").textContent = "Kocak.";
        return;
    }

    if (usia > 100) {
        document.getElementById("hasilUsia").textContent = "Usia maksimal 100 tahun.";
        return;
    }
    let hasil = "";

    if (usia < 13) {
        hasil = "Anak - Anak";
    } else if (usia <= 17) {
        hasil = "Remaja";
    } else if (usia <= 60) {
        hasil = "Dewasa";
    } else {
        hasil = "Lansia";
    }

    document.getElementById("hasilUsia").textContent = "Kategori: " + hasil;
}

// INI JS TESTIMONI
const testimoni = [
    { nama: "Alya", pesan: "Desain logonya bagus, sesuai yang aku mau." },
    { nama: "Budi", pesan: "Pengerjaannya cepat, hasilnya rapi." },
    { nama: "Candra", pesan: "Poster buat promosi jualanku jadi lebih menarik." },
    { nama: "Doni", pesan: "Adminnya ramah, revisinya juga cepat." },
    { nama: "Embul", pesan: "Harga bersahabat buat UMKM kecil seperti aku." }
]
const wadahTestimoni = document.getElementById("daftarTestimoni");
testimoni.forEach(function (t) {
    wadahTestimoni.innerHTML += `<p>"${t.pesan}"<br><strong>- ${t.nama}</strong></p>`;
})

// HITUNG TOTAL HARGA
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

function tampilkanTotal(event) {
    event.preventDefault();

    let harga = parseInt(document.getElementById("layanan").value);
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let total = hitungTotal(harga, jumlah);

    document.getElementById("hasilTotal").textContent = "Total: Rp" + total.toLocaleString("id-ID")

}