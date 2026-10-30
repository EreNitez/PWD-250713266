function fn_ValForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;

    var pesanError = "";
    var jenisPaket = "";
    var namaPaket = "";
    var angkaUmur;

    var regexEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (nama == "") {
        pesanError += "\n* Kolom nama masih kosong";
    }

    if (email == "") {
        pesanError += "\n* Kolom email belum diisi";
    } else if (!regexEmail.test(email)) {
        pesanError += "\n* Penulisan email tidak sesuai format (gunakan huruf kecil)";
    }

    if (umur == "") {
        pesanError += "\n* Kolom umur belum diisi";
    } else if (isNaN(umur)) {
        pesanError += "\n* Umur harus diisi menggunakan angka";
    } else {
        angkaUmur = Number(umur);

        if (angkaUmur < 17 || angkaUmur > 65) {
            pesanError += "\n* Umur yang diperbolehkan adalah 17 hingga 65 tahun";
        } else if (angkaUmur <= 25) {
            jenisPaket = "Paket Pelajar";
        } else {
            jenisPaket = "Paket Umum";
        }
    }

    if (kategori == "") {
        pesanError += "\n* Silakan pilih kategori member terlebih dahulu";
    }

    if (pesanError != "") {
        alert("Peringatan:\n" + pesanError);
        return false;
    }

    switch (kategori) {
        case "S":
            namaPaket = "Silver";
            break;
        case "G":
            namaPaket = "Gold";
            break;
        case "P":
            namaPaket = "Platinum";
            break;
    }

    alert("Terima kasih " + nama + " ! Anda terdaftar di paket " + namaPaket + " (" + jenisPaket + ").");

    return true;
}