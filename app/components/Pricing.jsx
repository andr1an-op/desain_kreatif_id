export default function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "Rp50.000",
      desc: "Cocok untuk kebutuhan desain sederhana.",
      fitur: ["1 Konsep Desain", "1x Revisi", "File JPG"],
      highlight: false
    },
    {
      name: "Standard",
      price: "Rp100.000",
      desc: "Pilihan terbaik untuk kebutuhan branding bisnis.",
      fitur: ["2 Konsep Desain", "3x Revisi", "PNG + JPG", "Aset Warna"],
      highlight: true
    },
    {
      name: "Premium",
      price: "Rp300.000",
      desc: "Untuk Anda yang ingin desain terbaik dan profesional.",
      fitur: ["3 Konsep Desain", "Unlimited Revisi", "Semua Format File", "Source File"],
      highlight: false
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h3 className="text-4xl text-black font-extrabold text-center mb-14">
        Paket Desain
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {packages.map((p, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl shadow-xl border bg-white transition transform hover:-translate-y-2 hover:shadow-2xl ${
              p.highlight
                ? "border-green-500 shadow-green-200 bg-gradient-to-b from-green-50 to-white"
                : ""
            }`}
          >
            {/* Nama Paket */}
            <h4 className="text-2xl font-bold text-amber-300 text-center">{p.name}</h4>

            {/* Harga */}
            <p className="text-center text-3xl font-extrabold my-4 text-green-600">
              {p.price}
            </p>

            {/* Deskripsi */}
            <p className="text-center text-gray-600 mb-6">{p.desc}</p>

            {/* Fitur */}
            <ul className="space-y-2 mb-6">
              {p.fitur.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 text-xl">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Tombol CTA */}
            <div className="text-center">
              <a
                href="https://wa.me/6282324530185?text=Halo%20saya%20ingin%20memesan%20paket%20desain"
                target="_blank"
                className={`px-6 py-3 rounded-lg font-semibold transition text-white ${
                  p.highlight
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-800 hover:bg-black"
                }`}
              >
                Pilih Paket
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
