// GANTI TAUTAN DI BAWAH INI DENGAN TAUTAN MILIK POKASAH TEA.
const LINKS = {
  video: "https://youtu.be/3PQFhSm7Jo0?si=5lX5vCFBEjWyYEkv",
  email: "mailto:pokasahtea@gmail.com",
  whatsapp: "https://wa.me/6281358742023", // kode negara, tanpa tanda +
  instagram: "https://www.instagram.com/pokasahtea/"
};

document.getElementById("videoLink").href = LINKS.video;
document.getElementById("emailLink").href = LINKS.email;
document.getElementById("whatsappLink").href = LINKS.whatsapp;
document.getElementById("instagramLink").href = LINKS.instagram;

// ===== DAUN BERHAMBURAN =====
// Ubah JUMLAH_DAUN untuk menambah/mengurangi daun (0 = tanpa daun jatuh).
const JUMLAH_DAUN = 14;
const layer = document.getElementById("leafFall");
const rand = (a, b) => a + Math.random() * (b - a);

for (let i = 0; i < JUMLAH_DAUN; i++) {
  const leaf = document.createElement("div");
  leaf.className = "falling";
  leaf.style.setProperty("--x", rand(0, 95) + "%");
  leaf.style.setProperty("--s", rand(18, 38) + "px");
  leaf.style.setProperty("--d", rand(9, 17) + "s");
  leaf.style.setProperty("--delay", -rand(0, 17) + "s");
  leaf.style.setProperty("--dx", rand(-90, 90) + "px");
  leaf.style.setProperty("--rot", rand(-540, 540) + "deg");
  leaf.style.setProperty("--f", rand(1.2, 2.6) + "s");
  leaf.innerHTML = '<svg viewBox="0 0 100 60"><use href="#leaf"/></svg>';
  layer.appendChild(leaf);
}
