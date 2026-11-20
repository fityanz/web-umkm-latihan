function clearData() {
    document.getElementById("formKontak").reset();
    document.getElementById("pesanForm").textContent = "";
}

function kirimPesan(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let noHp = document.getElementById("noHp").value.trim();
    let pesan = document.getElementById("pesan").value.trim();
    let pesanForm = document.getElementById("pesanForm");

    if (nama === "" || email === "" || noHp === "" || pesan === "") {
        pesanForm.textContent = "Mohon lengkapi Nama, Email, Nomor HP, dan Pesan dulu.";
        pesanForm.style.color = "#b00020";
        pesanForm.style.backgroundColor = "#fdecea";
        pesanForm.style.borderColor = "#f5c6cb";
        return;
    }

    pesanForm.textContent = "Pesan berhasil dikirim! Terima kasih, tim Didesain In akan segera menghubungi Anda.";
    pesanForm.style.color = "#1a7a2e";
    pesanForm.style.backgroundColor = "#e6f4ea";
    pesanForm.style.borderColor = "#a3d9a5";
}