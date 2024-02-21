alert(
    "Selamat Datang di Aplikasi Tiket! \nSilakan Masukkan Data Anda"
);

const nama = prompt("Masukkan Nama");
const umur = prompt("Masukkan Umur");

if (umur > 13) {
    const studio = prompt("Pilih Studio (A, B, atau C)");

    if (studio === "A") {
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
    } else if (studio === "B") {
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
    } else if (studio === "C") {
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
    } else {
        alert("Studio yang Anda pilih tidak tersedia.");
    }
} else {
    alert("Anda tidak boleh masuk studio karena umur Anda harus diatas 13 tahun.");
}