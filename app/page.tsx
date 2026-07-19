const services = [
  {
    icon: "❄️",
    title: "AC Repair & Service",
    description:
      "Split AC, Window AC और Inverter AC की सर्विस, रिपेयर, सफाई और सामान्य खराबियों का समाधान।",
  },
  {
    icon: "🧊",
    title: "Refrigerator Repair",
    description:
      "Single Door, Double Door और अन्य Refrigerator की Cooling, Compressor और Electrical Repair.",
  },
  {
    icon: "🌀",
    title: "Washing Machine Repair",
    description:
      "Top Load, Front Load और Semi Automatic Washing Machine की सर्विस और रिपेयर।",
  },
  {
    icon: "🧰",
    title: "AC Installation",
    description:
      "AC Installation, Uninstallation, Shifting तथा आवश्यक Pipe और Fitting का कार्य।",
  },
  {
    icon: "🔥",
    title: "Gas Charging",
    description:
      "AC और Refrigerator में Leakage Checking तथा आवश्यकता अनुसार Gas Charging.",
  },
  {
    icon: "🛡️",
    title: "AMC Service",
    description:
      "AC, Fridge और Washing Machine के लिए Annual Maintenance Contract की सुविधा।",
  },
  {
    icon: "💧",
    title: "RO Service",
    description:
      "RO Water Purifier की Service, Filter Replacement और सामान्य Repair.",
  },
  {
    icon: "♨️",
    title: "Geyser Repair",
    description:
      "Electric Geyser की Heating, Thermostat, Element और Wiring Repair.",
  },
  {
    icon: "⚡",
    title: "Electrical Appliances",
    description:
      "Water Cooler, Microwave तथा अन्य घरेलू इलेक्ट्रिक उपकरणों की Service और Repair.",
  },
];

const benefits = [
  "Doorstep Service",
  "Experienced Technician",
  "Affordable Charges",
  "Quality Spare Parts",
  "Fast Response",
  "Service Support",
];

const gallery = [
  {
    title: "AC Service",
    subtitle: "Cleaning, maintenance and professional repair",
    icon: "❄️",
    gradient: "from-blue-950 to-blue-500",
  },
  {
    title: "Fridge Repair",
    subtitle: "Cooling, gas leakage and compressor checking",
    icon: "🧊",
    gradient: "from-slate-950 to-slate-600",
  },
  {
    title: "Washing Machine",
    subtitle: "Service, drum, motor and fault repair",
    icon: "🌀",
    gradient: "from-red-900 to-red-500",
  },
];

const reviews = [
  {
    name: "Ramesh Kumar",
    text: "AC की सर्विस समय पर हुई और काम बहुत अच्छा किया गया।",
  },
  {
    name: "Sunita Devi",
    text: "Washing Machine की समस्या जल्दी ठीक हो गई। व्यवहार भी अच्छा था।",
  },
  {
    name: "Mahendra Singh",
    text: "उचित रेट और भरोसेमंद सर्विस। Vishwakarma Electronics की सेवा अच्छी है।",
  },
];

export default function Home() {
  const phone = "6300024392";
  const email = "vishwakarmaelectronicsoffice@gmail.com";
  const mapUrl =
    "https://maps.app.goo.gl/6S333qJFwKsLvTYF7?g_st=ac";

  const whatsappMessage = encodeURIComponent(
    `नमस्ते Vishwakarma Electronics,

मुझे Home Appliance Repair Service बुक करनी है।

नाम:
मशीन:
समस्या:
पता:
पसंदीदा समय:`,
  );

  const whatsappUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Information Bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        IFB Authorised Service Centre • Doorstep Appliance Repair Service
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-xl font-black text-white shadow-lg">
              VE
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-extrabold leading-tight text-blue-950 sm:text-xl">
                Vishwakarma Electronics
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                Professional Home Appliance Repair Services
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a className="transition hover:text-blue-700" href="#home">
              Home
            </a>

            <a className="transition hover:text-blue-700" href="#services">
              Services
            </a>

            <a className="transition hover:text-blue-700" href="#about">
              About
            </a>

            <a className="transition hover:text-blue-700" href="#gallery">
              Gallery
            </a>

            <a className="transition hover:text-blue-700" href="#reviews">
              Reviews
            </a>

            <a className="transition hover:text-blue-700" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href={`tel:${phone}`}
            className="shrink-0 rounded-full bg-red-600 px-4 py-3 text-xs font-bold text-white shadow-md transition hover:bg-red-700 sm:text-sm"
          >
            📞 Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600"
      >
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-red-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
          <div className="text-white">
            <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              ⭐ Trusted Home Appliance Service
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Professional Home Appliance Repair Services
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              AC, Refrigerator, Washing Machine, RO, Geyser और अन्य घरेलू
              इलेक्ट्रॉनिक उपकरणों की भरोसेमंद सर्विस और रिपेयर आपके घर पर।
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-full bg-red-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-700"
              >
                📅 Book Service
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-lg font-black sm:text-2xl">Same Day</p>
                <p className="mt-1 text-xs text-blue-100">Service Support</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-lg font-black sm:text-2xl">Doorstep</p>
                <p className="mt-1 text-xs text-blue-100">Repair Service</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-lg font-black sm:text-2xl">Trusted</p>
                <p className="mt-1 text-xs text-blue-100">Quality Work</p>
              </div>
            </div>
          </div>

          {/* Technician Card */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-900 sm:p-7">
                <div className="flex min-h-[390px] flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-100 to-blue-100 p-6 sm:p-7">
                  <div>
                    <span className="rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white">
                      Expert Technician
                    </span>

                    <h2 className="mt-6 text-3xl font-black text-blue-950">
                      Mukesh Kumar
                    </h2>

                    <p className="mt-2 text-slate-600">
                      Founder & Senior Home Appliance Technician
                    </p>
                  </div>

                  <div className="my-8 grid grid-cols-3 gap-3 text-center sm:gap-4">
                    <div className="rounded-2xl bg-white p-4 shadow sm:p-5">
                      <span className="text-4xl">❄️</span>
                      <p className="mt-2 text-sm font-bold">AC</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow sm:p-5">
                      <span className="text-4xl">🧊</span>
                      <p className="mt-2 text-sm font-bold">Fridge</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow sm:p-5">
                      <span className="text-4xl">🌀</span>
                      <p className="mt-2 text-sm font-bold">Washer</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-blue-950 p-5 text-white">
                    <p className="text-sm text-blue-200">Call for service</p>

                    <a
                      href={`tel:${phone}`}
                      className="mt-1 block text-2xl font-black"
                    >
                      +91 {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="relative z-10 -mt-8 px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-3">
          <a
            href={`tel:${phone}`}
            className="rounded-2xl bg-blue-50 p-5 transition hover:bg-blue-100"
          >
            <p className="text-sm text-slate-500">Call Us</p>

            <p className="mt-1 font-extrabold text-blue-900">
              +91 {phone}
            </p>
          </a>

          <a
            href={`mailto:${email}`}
            className="rounded-2xl bg-red-50 p-5 transition hover:bg-red-100"
          >
            <p className="text-sm text-slate-500">Email Us</p>

            <p className="mt-1 break-all font-extrabold text-red-800">
              {email}
            </p>
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100"
          >
            <p className="text-sm text-slate-500">Visit Shop</p>

            <p className="mt-1 font-extrabold text-green-800">
              Chaman Singh Chouraha, Morseem Road, Bagoda
            </p>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-700">
              Our Services
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Complete Appliance Repair Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              सभी प्रमुख कंपनियों के AC, Refrigerator, Washing Machine और अन्य
              घरेलू उपकरणों की सर्विस तथा रिपेयर उचित दर पर।
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:bg-blue-200">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#booking"
                  className="mt-6 inline-block font-bold text-blue-700 hover:text-blue-900"
                >
                  Book this service →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About and Benefits */}
      <section id="about" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-cyan-300">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black">
              भरोसेमंद सेवा, उचित कीमत और प्रोफेशनल कार्य
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Vishwakarma Electronics में सभी प्रमुख कंपनियों के AC, Fridge,
              Washing Machine, Water Cooler, Geyser, RO और अन्य इलेक्ट्रिक
              उपकरणों की सर्विस एवं रिपेयर की जाती है।
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-black">
                    ✓
                  </span>

                  <span className="font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 to-cyan-500 p-1">
            <div className="h-full rounded-[1.8rem] bg-white p-8 text-slate-900">
              <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                Special Facility
              </p>

              <h3 className="mt-3 text-3xl font-black text-blue-950">
                Appliance AMC Available
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                सभी प्रमुख कंपनियों के AC, Refrigerator और Washing Machine का
                Annual Maintenance Contract उपलब्ध है।
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="font-black">✓ Regular Inspection</p>

                  <p className="mt-1 text-sm text-slate-600">
                    समय-समय पर मशीन की जाँच।
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="font-black">✓ Priority Service</p>

                  <p className="mt-1 text-sm text-slate-600">
                    AMC ग्राहकों को प्राथमिकता।
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="font-black">✓ Maintenance Support</p>

                  <p className="mt-1 text-sm text-slate-600">
                    मशीन को बेहतर स्थिति में रखने में सहायता।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-700">
              Service Gallery
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Professional Repair Work
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              AC, Refrigerator और Washing Machine की प्रोफेशनल सर्विस और
              रिपेयर।
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.title}
                className={`min-h-80 rounded-[2rem] bg-gradient-to-br ${item.gradient} p-8 text-white shadow-xl transition hover:-translate-y-2`}
              >
                <div className="text-7xl">{item.icon}</div>

                <div className="mt-24">
                  <h3 className="text-3xl font-black">{item.title}</h3>

                  <p className="mt-3 text-white/80">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-700">
              Customer Reviews
            </p>

            <h2 className="mt-3 text-4xl font-black">
              ग्राहकों का भरोसा हमारी पहचान
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl bg-white p-7 shadow-lg"
              >
                <p className="text-xl text-yellow-500">★★★★★</p>

                <p className="mt-5 leading-7 text-slate-600">
                  “{review.text}”
                </p>

                <p className="mt-6 font-black text-blue-950">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-blue-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-blue-700">
              Quick Booking
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-950">
              अपनी सर्विस अभी बुक करें
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              नीचे दिए विकल्प से WhatsApp पर अपनी मशीन, समस्या और पता भेजें।
              हम आपसे जल्द संपर्क करेंगे।
            </p>

            <div className="mt-8 rounded-3xl bg-white p-7 shadow-lg">
              <p className="font-black text-blue-950">
                Booking Message में भेजें:
              </p>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>✓ आपका नाम</li>
                <li>✓ मोबाइल नंबर</li>
                <li>✓ मशीन का नाम</li>
                <li>✓ मशीन में समस्या</li>
                <li>✓ पूरा पता</li>
                <li>✓ पसंदीदा तारीख और समय</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-black text-blue-950">
              Book through WhatsApp
            </h3>

            <p className="mt-3 text-slate-600">
              बटन दबाने पर WhatsApp में तैयार Booking Message खुलेगा।
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-green-600 px-6 py-5 text-center text-lg font-black text-white shadow-lg transition hover:bg-green-700"
            >
              💬 WhatsApp पर Service Book करें
            </a>

            <a
              href={`tel:${phone}`}
              className="mt-4 flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-5 text-lg font-black text-white transition hover:bg-blue-800"
            >
              📞 सीधे कॉल करें
            </a>

            <div className="mt-6 rounded-2xl bg-slate-100 p-5">
              <p className="text-sm text-slate-500">Service Area</p>

              <p className="mt-1 font-black">
                Bagoda तथा आसपास के क्षेत्र
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-blue-950 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Contact Us
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Vishwakarma Electronics
                </h2>

                <div className="mt-9 space-y-6 text-blue-100">
                  <p>
                    <strong className="text-white">Proprietor:</strong> Mukesh
                    Kumar
                  </p>

                  <p>
                    <strong className="text-white">Phone:</strong>{" "}
                    <a href={`tel:${phone}`}>+91 {phone}</a>
                  </p>

                  <p className="break-all">
                    <strong className="text-white">Email:</strong>{" "}
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>

                  <p>
                    <strong className="text-white">Address:</strong> Chaman
                    Singh Chouraha, Morseem Road, Bagoda
                  </p>

                  <p>
                    <strong className="text-white">Website:</strong>{" "}
                    vishwakarmaelectronics.in
                  </p>
                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-block rounded-full bg-white px-7 py-4 font-black text-blue-950 transition hover:bg-blue-100"
                >
                  📍 Google Map खोलें
                </a>
              </div>

              <div className="flex min-h-96 items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-700 p-8 text-center">
                <div>
                  <div className="text-8xl">📍</div>

                  <h3 className="mt-6 text-3xl font-black">
                    Visit Our Service Centre
                  </h3>

                  <p className="mt-4 max-w-md text-blue-50">
                    Chaman Singh Chouraha, Morseem Road, Bagoda
                  </p>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block rounded-full border border-white bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-blue-800"
                  >
                    Open Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-10 text-center text-slate-300">
        <p className="text-xl font-black text-white">
          Vishwakarma Electronics
        </p>

        <p className="mt-2 text-sm">
          Professional Home Appliance Repair Services
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm">
          <a href={`tel:${phone}`} className="hover:text-white">
            Call
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>

          <a href={`mailto:${email}`} className="hover:text-white">
            Email
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Map
          </a>
        </div>

        <p className="mt-7 text-sm">
          © 2026 Vishwakarma Electronics. All Rights Reserved.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-700"
      >
        💬
      </a>
    </main>
  );
}