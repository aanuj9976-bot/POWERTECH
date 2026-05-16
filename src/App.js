export default function DGPowerSolutionsWebsite() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans overflow-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white text-2xl font-extrabold tracking-wide">
            POWERTECH
          </div>

          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-300 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-blue-300 transition"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="hover:text-blue-300 transition"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-300 transition"
            >
              Contact
            </button>
          </div>

          <a
            href="https://wa.me/917986823372"
            target="_blank"
            className="bg-green-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-6 inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full font-semibold text-sm tracking-[3px] shadow-lg">
              POWERTECH
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Reliable DG Set Repair, Maintenance, Spares & Sales
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              PowerTech provides professional repair, maintenance, and sales
              services for all types of DG sets. Trusted by homes, factories,
              offices, hospitals, and commercial businesses for reliable power
              solutions.
            </p>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-5 text-blue-100 mb-8 space-y-2 shadow-xl">
              <p>📞 +91 79868 23372</p>
              <p>📍 Plot Number 760, Ram Darbar, Chandigarh</p>
              <p>✉ powertech760@gmail.com</p>
            </div>
            <div className="flex gap-4 flex-wrap mb-6">
              <a
                href="tel:+917986823372"
                className="bg-white text-blue-900 px-7 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition inline-block"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/917986823372"
                target="_blank"
                className="border border-white/50 bg-white/10 backdrop-blur-md px-7 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition inline-block"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
              alt="DG Set Service"
              className="rounded-[32px] shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-300"
            />
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-slate-100">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-3">DG Spares</h3>
              <p className="text-gray-600">
                Genuine DG set spare parts available for all major generator
                brands and models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-gradient-to-b from-white to-slate-100"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Expert DG set repair, preventive maintenance, annual maintenance
            contracts, and DG set sales with dependable customer support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-slate-100">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold mb-3">DG Repair</h3>
              <p className="text-gray-600">
                Quick diagnosis and repair for all diesel generator brands and
                models.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-slate-100">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600">
                Preventive maintenance services to ensure smooth and efficient
                power backup.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[32px] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-slate-100">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-2xl font-semibold mb-3">DG Set Sales</h3>
              <p className="text-gray-600">
                Buy high-performance diesel generators for industrial and
                residential use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DG Set Gallery */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Greaves DG Sets & Service Gallery
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            PowerTech deals in repair, maintenance, sales, and genuine spare
            parts for Greaves and other leading DG set brands.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt="Greaves DG Set"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop"
                alt="DG Maintenance"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092919535-7146ff1a5902?q=80&w=1200&auto=format&fit=crop"
                alt="PowerTech DG Service"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial DG Set"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Generator Repair"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
                alt="PowerTech Service Team"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-slate-950 to-blue-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop"
              alt="Power Solutions"
              className="rounded-[32px] shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-300"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Why Customers Trust Us</h2>
            <ul className="space-y-5 text-lg text-blue-100">
              <li>✔ Experienced & Certified Technicians</li>
              <li>✔ Emergency Breakdown Support</li>
              <li>✔ Affordable AMC Packages</li>
              <li>✔ Genuine Spare Parts</li>
              <li>✔ Fast On-Site Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100">
              <p className="text-gray-600 mb-4">
                “PowerTech solved our DG breakdown within hours. Excellent
                service and very professional technicians.”
              </p>
              <h4 className="font-semibold">
                — Manufacturing Unit, Chandigarh
              </h4>
            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100">
              <p className="text-gray-600 mb-4">
                “Their maintenance service keeps our generators running
                smoothly. Highly trusted company.”
              </p>
              <h4 className="font-semibold">— Hospital Client</h4>
            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100">
              <p className="text-gray-600 mb-4">
                “Affordable DG set prices with genuine spare parts and excellent
                after-sales support.”
              </p>
              <h4 className="font-semibold">— Commercial Business Owner</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-slate-100 rounded-[36px] shadow-2xl p-10 text-center border border-slate-200">
          <h2 className="text-4xl font-bold mb-4">Contact Us Today</h2>
          <p className="text-gray-600 mb-8">
            Need emergency DG repair or looking to buy a new generator? Contact
            us now.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-lg">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300">
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p>+91 79868 23372</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300">
              <h3 className="font-semibold mb-2">📍 Location</h3>
              <p>Plot Number 760, Ram Darbar, Chandigarh</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300">
              <h3 className="font-semibold mb-2">✉ Email</h3>
              <p>powertech760@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find Us On Map</h2>
          <p className="text-gray-600 mb-10">
            Visit PowerTech at Plot Number 760, Ram Darbar, Chandigarh.
          </p>

          <div className="rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
            <iframe
              title="PowerTech Location"
              src="https://www.google.com/maps?q=Plot%20Number%20760%20Ram%20Darbar%20Chandigarh&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-300 py-10 text-center relative border-t border-white/10">
        <p>© 2026 PowerTech. All Rights Reserved.</p>
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/917986823372"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 font-bold animate-bounce"
        >
          WhatsApp
        </a>
      </footer>
    </div>
  );
}
