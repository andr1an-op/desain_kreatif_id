export default function ExtraServices() {
  const extras = [
    {
      title: "Desain Web",
      desc: "Pembuatan desain website profesional, modern, dan responsif.",
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
    },
    {
      title: "Ilustrasi",
      desc: "Layanan ilustrasi custom sesuai kebutuhan proyek Anda.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <h3 className="text-4xl font-extrabold text-center mb-14 text-purple-600">
        Layanan Tambahan
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {extras.map((e, i) => (
          <div
            key={i}
            className="p-8 border rounded-2xl text-black shadow-lg bg-white hover:shadow-2xl
                       hover:-translate-y-2 transition transform"
          >
            {/* Gambar Icon */}
            <div className="flex justify-center mb-5">
              <img
                src={e.img}
                alt={e.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            <h4 className="text-2xl font-bold text-center mb-3">{e.title}</h4>

            <p className="text-gray-600 text-center">{e.desc}</p>

            <div className="text-center mt-6">
              <a
                href="https://wa.me/6282324530185?text=Halo%20saya%20ingin%20menggunakan%20layanan%20tambahan"
                target="_blank"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold transition"
              >
                Pesan Layanan Ini
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
