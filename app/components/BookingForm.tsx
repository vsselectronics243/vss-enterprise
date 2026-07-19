"use client";

import { FormEvent, useState } from "react";

const OWNER_WHATSAPP_NUMBER = "916300024392";

const appliances = [
  "Air Conditioner",
  "Refrigerator",
  "Washing Machine",
  "RO Water Purifier",
  "Geyser",
  "Water Cooler",
  "Microwave",
  "Other Appliance",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    appliance: "",
    problem: "",
    address: "",
    preferredDate: "",
  });

  const [error, setError] = useState("");

  function updateField(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const mobilePattern = /^[6-9][0-9]{9}$/;

    if (!mobilePattern.test(form.phone.trim())) {
      setError("कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

    const message = `
*🔧 New Service Booking*

👤 *नाम:* ${form.name}
📱 *मोबाइल:* ${form.phone}
⚙️ *मशीन:* ${form.appliance}
⚠️ *समस्या:* ${form.problem}
🏠 *पता:* ${form.address}
📅 *पसंदीदा तारीख:* ${
      form.preferredDate || "जल्द से जल्द"
    }

-----------------------
*Vishwakarma Electronics*
Professional Home Appliance Repair Services
    `.trim();

    const whatsappUrl =
      `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message,
      )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-8"
    >
      <h3 className="text-2xl font-black text-blue-950">
        Online Service Booking
      </h3>

      <p className="mt-3 text-slate-600">
        अपनी जानकारी भरें। Submit करने पर Booking WhatsApp में खुलेगी।
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            आपका नाम *
          </label>

          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            placeholder="अपना पूरा नाम लिखें"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            मोबाइल नंबर *
          </label>

          <input
            id="phone"
            type="tel"
            required
            inputMode="numeric"
            maxLength={10}
            value={form.phone}
            onChange={(event) =>
              updateField(
                "phone",
                event.target.value.replace(/\D/g, ""),
              )
            }
            placeholder="10 अंकों का मोबाइल नंबर"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="appliance"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            मशीन चुनें *
          </label>

          <select
            id="appliance"
            required
            value={form.appliance}
            onChange={(event) =>
              updateField("appliance", event.target.value)
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select Appliance</option>

            {appliances.map((appliance) => (
              <option key={appliance} value={appliance}>
                {appliance}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="problem"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            मशीन में समस्या *
          </label>

          <textarea
            id="problem"
            required
            rows={4}
            value={form.problem}
            onChange={(event) =>
              updateField("problem", event.target.value)
            }
            placeholder="उदाहरण: AC ठंडा नहीं कर रहा है"
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            पूरा पता *
          </label>

          <textarea
            id="address"
            required
            rows={3}
            value={form.address}
            onChange={(event) =>
              updateField("address", event.target.value)
            }
            placeholder="गाँव/शहर, मोहल्ला और Landmark लिखें"
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="preferredDate"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            पसंदीदा तारीख
          </label>

          <input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={(event) =>
              updateField("preferredDate", event.target.value)
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 px-6 py-4 text-lg font-black text-white shadow-lg transition hover:bg-green-700"
        >
          💬 WhatsApp पर Booking भेजें
        </button>

        <p className="text-center text-xs text-slate-500">
          Submit करने के बाद WhatsApp खुलेगा। वहाँ Send दबाएँ।
        </p>
      </div>
    </form>
  );
}