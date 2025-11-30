"use client";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have a project in mind? Let's make it happen!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:Harpreetrandhawwa@gmail.com"
                    className="text-purple-600 hover:underline"
                  >
                    Harpreetrandhawwa@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a
                    href="tel:519-991-8049"
                    className="text-purple-600 hover:underline"
                  >
                    519-991-8049
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/harpreet-frontend-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    harpreet-frontend-dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-green-600 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
