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
    } else if (usia <= 30) {
        hasil = "Dewasa";
    } else {
        hasil = "Lansia";
    }

    document.getElementById("hasilUsia").textContent = "Kategori: " + hasil;
}

// INI JS TESTIMONI
const testimoni = [
    {nama: "Alya", pesan: "Ayam geprek 1"},
    {nama: "Budi", pesan: "Seblak Ceker Ekstra Telor 1"},
    {nama: "Candra", pesan: "Enak tuh Americano, 1 dong"},
    {nama: "Doni", pesan: "WOO YA BOLEH"},
    {nama: "Embul", pesan: "Yah gula neh wes"}
]
const wadahTestimoni = document.getElementById("daftarTestimoni");
testimoni.forEach(function(t) {
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