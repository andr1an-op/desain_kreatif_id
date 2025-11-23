export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/bg.jpg')"
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60" ></div>

      {/* Konten Hero */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Desain Kreatif untuk Bisnismu
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Kami menyediakan layanan desain logo, poster, branding, dan desain profesional lainnya
          untuk meningkatkan citra bisnis Anda.
        </p>

        {/* Tombol */}
        <a
          href="https://wa.me/6282324530185?text=Halo%20saya%20ingin%20pesan%20desain"
          target="_blank"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
}
