"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form className="space-y-4 bg-white p-6 rounded-xl shadow">
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-2 border rounded-lg"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border rounded-lg"
      />
      <textarea
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full p-2 border rounded-lg h-32"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
