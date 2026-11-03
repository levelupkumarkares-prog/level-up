
"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setIsError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus(result.message);
      form.reset();
    } catch (error) {
      setIsError(true);
      setStatus(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-[0_20px_50px_rgba(181,137,58,0.25)] rounded-2xl p-8 md:p-10">
      <h2 className="text-2xl font-semibold mb-8">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              maxLength={254}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Contact Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="Your Contact Number"
            maxLength={30}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your business goals or capital needs"
            required
            maxLength={5000}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#B5893A] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#a4792e] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Request a Consultation"}
        </button>

        {status && (
          <p
            role="status"
            className={`text-sm ${
              isError ? "text-red-600" : "text-green-700"
            }`}
          >
            {status}
          </p>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
          <ShieldCheck className="w-4 h-4 text-[#B5893A]" />
          Your information is kept confidential. No spam.
        </div>
      </form>
    </div>
  );
}
