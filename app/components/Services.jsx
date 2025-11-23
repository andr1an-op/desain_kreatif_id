export default function Services() {
  const services = [
    {
      title: "Jasa Logo",
      desc: "Logo profesional dan unik sesuai karakter brand Anda.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
    },
    {
      title: "Poster",
      desc: "Poster promosi, event, sosial media, dan kebutuhan lainnya.",
      img: "https://cdn-icons-png.flaticon.com/512/2982/2982377.png"
    },
    {
      title: "Branding",
      desc: "Paket branding lengkap: warna, font, guideline, dan identitas visual.",
      img: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <h3 className="text-4xl  font-extrabold text-center mb-14">
        Layanan Utama
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl shadow-lg bg-white 
                       hover:shadow-2xl hover:-translate-y-2 transition transform"
          >
            {/* Gambar Icon */}
            <div className="flex justify-center mb-5">
              <img
                src={s.img}
                alt={s.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            <h4 className="text-2xl font-bold text-center mb-3">{s.title}</h4>
            <p className="text-gray-600 text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
