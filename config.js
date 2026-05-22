/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Intan Sayangku",
  photo: "https://www.image2url.com/r2/default/images/1779473127131-38e3ce85-4a30-4fee-b496-895efc469c72.jpeg",
  music: "./music/hbd.mpeg",

  // ── Theme Colors ──────────────────────────────────────────────
  colors: {
    primary: "#f472b6",
    accent: "#60a5fa",
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
    },
    light: {
      background: "#fafaf9",
      text: "#1e293b",
    },
  },

  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  sections: [
    {
      type: "greeting",
      title: "Halo sayang,",
      subtitle: "Ada sesuatu yang spesial buat kamu nih!",
    },
    {
      type: "countdown",
      from: 3,
      goText: "🎉",
    },
    {
      type: "announcement",
      text: "Selamat Ulang Tahun ke-21 Sayang!! :D",
    },
    {
      type: "chatbox",
      message:
        "Selamat ulang tahun yaa Sayang!! Semoga di umur yang baru ini kamu semakin bahagia, sehat selalu, dan semua hal baik selalu menyertai kamu!",
      buttonText: "Kirim",
    },
    {
      type: "ideas",
      lines: [
        "Awalnya aku bingung mau ngasih apa.",
        "Sempat kepikiran buat ngasih kado biasa.",
        "Tapi akhirnya aku sadar, aku pengen buat sesuatu yang <strong>spesial</strong>.",
        "Karena...",
        "Kamu itu sangat Spesial <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "Semakin banyak kamu bersyukur, semakin banyak hal indah yang akan datang di hidup kamu.",
      author: "Intan & Apip",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday, Cintaku!",
      wishText: "Terima kasih sudah selalu ada. I love you! ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Nah, sekarang kasih tau aku ya gimana perasaan kamu lihat ini.",
      replayText: "Atau klik di sini kalau kamu mau lihat dari awal lagi.",
    },
  ],
};
