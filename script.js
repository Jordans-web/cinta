// --- BANK KONTEN (VERSI KEKINIAN) ---
// Fokus revisi berat ada di kategori 'cinta'.

const data = {
    cinta: [
        // Ini adalah bagian yang dirombok total
        "Ketemu kamu tuh kayak nemu playlist Spotify yang 'feel'-nya pas banget. Nggak mau ganti-ganti.",
        "Dunia boleh random dan berisik, tapi sama kamu semuanya terasa tenang. Kamu 'my safe space'.",
        "Aku kira aku butuh 'healing' ke tempat jauh, ternyata aku cuma butuh ngobrol ngalor-ngidul sama kamu.",
        "Definisi 'recharge' energi terbaik: bukan tidur, tapi dengerin kamu cerita soal harimu, sekecil apapun itu.",
        "Aku suka versi diriku pas lagi bareng kamu. Kamu bikin aku jadi lebih baik, tanpa maksa.",
        "Di antara jutaan scroll di media sosial, senyum kamulah satu-satunya konten yang bikin aku berhenti lama.",
        "Kita mungkin nggak sempurna, tapi 'vibe' kita berdua itu 'satu frekuensi'. Dan itu yang paling penting.",
        "POV: Aku nemu partner yang nggak cuma 'sayang', tapi juga 'nyambung' diajak ngomongin apa aja, dari konspirasi sampai masa depan.",
        "Bukan cuma soal 'bucin', tapi soal 'validasi'. Makasih udah selalu bikin aku merasa cukup dan didengar.",
        "Cintaku mungkin nggak kayak di film-film, tapi aku janji jadi 'support system' nomor satu kamu, di saat sukses atau pas lagi 'insecure'.",
        "Kamu adalah notifikasi favorit yang selalu aku tunggu setiap hari.",
        "Jujur, selera humorku yang aneh ini cuma nyambung sama kamu."
    ],
    puisi: [
        // (Saya biarkan sama, tapi Anda bisa tambahkan/ubah jika mau)
        "Malam boleh kelam,\ntapi senyummu,\nadalah lampu paling terang\ndi kamarku.",
        "Di kedai kopi ini,\naku memesan rindu,\nyang disajikan hangat\nbersama bayangmu.",
        "Senja di matamu,\nlebih indah dari lukisan manapun.\nTempatku pulang,\ntempatku berlabuh.",
        "Kau adalah sajak,\nyang tak pernah selesai kutulis.\nSelalu ada bait baru,\nsetiap kali kupandang.",
        "Matamu: dua samudra,\ntempat aku sengaja\ntenggelam\ntanpa perlu diselamatkan.",
        "Kita adalah dua not,\nyang baru terdengar indah,\nsaat dimainkan bersama."
    ],
    pantun: [
        // (Saya biarkan sama)
        "Jalan-jalan ke kota Paris,\nLihat gedung berbaris-baris.\nBiar mati di ujung keris,\nAsal dapat dinda yang manis.",
        "Ikan hiu berenang di lautan,\nI love you, ayo kita ke pelaminan.",
        "Beli alpukat di pasar Cikini,\nAku terpikat senyumanmu hari ini.",
        "Ada tupai di atas batu,\nMerindukanmu setiap waktu.",
        "Dua tiga kucing berlari,\nManis sekali si dia ini.",
        "Langit biru banyak awannya,\nCintaku tulus cuma buat dia."
    ],
    gombal: [
        // (Saya biarkan sama)
        "Kamu tahu bedanya kamu sama modem? Kalau modem terkoneksi ke internet, kalau kamu terkoneksi ke hatiku.",
        "Bapak kamu dulu pasti astronaut ya? Soalnya aku lihat banyak bintang di matamu.",
        "Aku rela jadi kopi, asalkan kamu yang menyeduhnya setiap pagi. Nggak perlu gula, soalnya kamu udah manis.",
        "Kalau aku jadi satpam, aku nggak akan jaga gerbang. Aku akan jaga hati kamu selamanya.",
        "Kamu itu kayak Google. Semua yang aku cari selama ini, ada di kamu.",
        "Kenapa menara Pisa miring? Kayaknya sih gara-gara terlalu lama menahan rindu lihat senyum kamu.",
        "Alfabet itu dimulai dari A-B-C. Angka dimulai dari 1-2-3. Tapi cinta itu dimulai dari Aku dan Kamu."
    ]
};

// --- LOGIKA APLIKASI ---
// (Bagian ini sama sekali tidak berubah)

// 1. Ambil semua elemen yang kita butuhkan
const btnCinta = document.getElementById('btnCinta');
const btnPuisi = document.getElementById('btnPuisi');
const btnPantun = document.getElementById('btnPantun');
const btnGombal = document.getElementById('btnGombal');
const resultText = document.getElementById('resultText');

// 2. Pasang 'event listener' (pendengar) di setiap tombol
// Saat tombol diklik, panggil fungsi generateKata dengan kategori yang sesuai
btnCinta.addEventListener('click', () => generateKata('cinta'));
btnPuisi.addEventListener('click', () => generateKata('puisi'));
btnPantun.addEventListener('click', () => generateKata('pantun'));
btnGombal.addEventListener('click', () => generateKata('gombal'));

// 3. Fungsi inti untuk menghasilkan kata-kata
function generateKata(kategori) {
    // Ambil array kata-kata berdasarkan kategori yang diklik
    const bankKata = data[kategori];
    
    // Pilih satu kata secara acak
    const randomIndex = Math.floor(Math.random() * bankKata.length);
    const kataTerpilih = bankKata[randomIndex];

    // Efek 'fade out' dulu biar mulus
    resultText.style.opacity = 0;

    // Tunggu 300 milidetik, baru ganti teks dan 'fade in'
    setTimeout(() => {
        // Cek khusus untuk Puisi: ganti \n (baris baru) menjadi <br> (HTML)
        if (kategori === 'puisi') {
            resultText.innerHTML = kataTerpilih.replace(/\n/g, '<br>');
        } else {
            resultText.textContent = kataTerpilih;
        }

        // Hapus gaya 'italic' dari placeholder
        resultText.style.fontStyle = 'normal';
        
        // Munculkan teksnya (fade in)
        resultText.style.opacity = 1;
    }, 300); // 300ms
}