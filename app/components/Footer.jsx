export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Logo + Deskripsi */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">DesainKreatif.id</h2>
          <p className="text-gray-400 text-sm mt-2">
            Studio grafis profesional — logo, poster, branding, desain web, dan ilustrasi.
          </p>
        </div>

        {/* Garis */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DesainKreatif.id — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
