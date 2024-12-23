import StoryContainer from "../../../components/StoryContainer";

const stories = [
  {
    id: 1,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
          className="text-2xl font-bold mb-2"
        >
          Kontribusi untuk Petani
        </h1>
        <h2>
          Terima kasih telah menjadi bagian dari perjalanan kami. Dengan
          dukungan Anda, petani Indonesia bisa melangkah lebih jauh dan lebih
          kuat.
        </h2>
      </div>
    ),
    duration: 10000,
  },
  {
    id: 2,
    html: (
      <div className="text-center py-20  flex-vertical">
        <h1
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
          className="text-2xl font-bold mb-2"
        >
          Statistik Kontribusi
        </h1>
        <h2>
          Angka-angka ini bukan sekadar data, tapi bukti nyata dari dampak luar
          biasa Anda. Tahun ini, Anda telah menjangkau [jumlah petani] petani
          dan menyalurkan [tonase total] ton pupuk. Salut untuk Anda!
        </h2>
      </div>
    ),
    duration: 10000,
  },
  {
    id: 3,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1 className="text-2xl font-bold mb-2">Penyaluran Bulanan</h1>
        <h2>
          Di tengah kesibukan, bulan [nama bulan] menjadi sorotan kontribusi
          Anda tahun ini. Terima kasih telah menginspirasi!
        </h2>
      </div>
    ),
    duration: 10000,
  },
  {
    id: 4,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1 className="text-2xl font-bold mb-2">Peringkat User</h1>
        <h2>
          Anda adalah bagian dari kisah hebat ini. Dengan kontribusi yang luar
          biasa, Anda masuk dalam [Top X% Nasional], [Top X% Provinsi], dan [Top
          X% Kabupaten]. Bangga bersama Anda!
        </h2>
      </div>
    ),
    duration: 10000,
  },
  {
    id: 5,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1 className="text-2xl font-bold mb-2">Metode Penyaluran</h1>
        <h2>
          Setiap langkah Anda berarti. Tahun ini, Anda mendukung petani dengan
          [X% individu] dan [X% berkelompok]. Terima kasih telah membawa
          perubahan nyata.
        </h2>
      </div>
    ),
    duration: 10000,
  },
  {
    id: 6,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1 className="text-2xl font-bold mb-2">Stok Pupuk Terendah</h1>
        <h2>
          Anda selalu hadir di saat yang tepat. Meski stok sempat menipis, Anda
          tetap berdiri bersama petani, tanpa ragu. Luar biasa!
        </h2>
      </div>
    ),
    duration: 10000,
  },
  {
    id: 7,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1 className="text-2xl font-bold mb-2">
          Kontribusi Anda di 2024 telah menciptakan perubahan besar. Mari terus
          melangkah bersama di 2025, membangun ketahanan pangan yang lebih kuat!
        </h1>
        {/* <h2>
        
        </h2> */}
      </div>
    ),
    duration: 10000,
  },
  {
    id: 8,
    html: (
      <div className="text-center py-20 flex-vertical">
        <h1 className="text-2xl font-bold mb-2">
          Perjalanan ini penuh inspirasi. Mari terus bergerak maju bersama!
        </h1>
        {/* <h2>
          Kami membantu menciptakan peluang bagi petani kecil melalui akses ke
          teknologi dan pasar global.
        </h2> */}
      </div>
    ),
    duration: 10000,
  },
];

export default function StoriesPage() {
  return <StoryContainer stories={stories} />;
}
