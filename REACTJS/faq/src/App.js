import "./App.css";
import Accordion from "./components/Accordion";

const faqs = [
  {
    question: "Berapa kali seminggu sebaiknya saya latihan angkat besi?",
    answer:
      "Untuk pemula, 3–4 kali seminggu sudah cukup. Fokus pada gerakan dasar dengan jeda istirahat yang cukup agar otot bisa pulih.",
  },
  {
    question: "Apakah saya perlu suplemen untuk hasil maksimal?",
    answer:
      "Tidak wajib. Nutrisi dari makanan utama lebih penting. Suplemen hanya pelengkap jika kebutuhan gizi harian sulit terpenuhi.",
  },
  {
    question: "Berapa lama biasanya terlihat hasil dari gym?",
    answer:
      "Dengan pola latihan konsisten dan pola makan teratur, hasil bisa mulai terlihat dalam 8–12 minggu.",
  },
  {
    question: "Apa perbedaan latihan beban dan kardio?",
    answer:
      "Latihan beban fokus membangun massa otot dan kekuatan, sedangkan kardio lebih menekankan pada daya tahan jantung dan pembakaran kalori.",
  },
  {
    question: "Apakah angkat beban bisa membuat badan jadi besar secara cepat?",
    answer:
      "Tidak. Perubahan tubuh tergantung faktor genetik, nutrisi, dan konsistensi latihan. Proses pembentukan massa otot membutuhkan waktu.",
  },
  {
    question: "Latihan mana yang paling efektif untuk pemula?",
    answer:
      "Gerakan compound seperti squat, deadlift, bench press, dan pull-up sangat efektif karena melibatkan banyak otot sekaligus.",
  },
  {
    question: "Apa pentingnya pemanasan sebelum latihan?",
    answer:
      "Pemanasan membantu meningkatkan sirkulasi darah, mengurangi risiko cedera, dan mempersiapkan otot serta sendi untuk beban latihan.",
  },
  {
    question: "Berapa lama waktu istirahat ideal antar set?",
    answer:
      "Untuk hipertrofi otot, 60–90 detik istirahat cukup. Untuk kekuatan maksimal, bisa 2–3 menit tergantung intensitas latihan.",
  },
  {
    question: "Apakah wanita boleh angkat beban berat?",
    answer:
      "Tentu saja! Angkat beban tidak otomatis membuat badan besar seperti pria. Justru bisa membantu mengencangkan otot dan meningkatkan metabolisme.",
  },
  {
    question: "Bagaimana cara mengatur pola makan saat nge-gym?",
    answer:
      "Pastikan konsumsi protein cukup (1.6–2.2g/kg berat badan), karbohidrat kompleks untuk energi, lemak sehat, serta air putih yang cukup setiap hari.",
  },
];

function App() {
  return <Accordion data={faqs} />;
}

export default App;
