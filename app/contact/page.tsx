import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Get in Touch</h1>
      <p className="text-gray-700">
        I’d love to collaborate or chat about frontend development! Feel free to
        reach out via the form below or directly at
        <a
          href="mailto:harpreet@example.com"
          className="text-blue-600 ml-1 hover:underline"
        >
          harpreet@example.com
        </a>
        .
      </p>
      <ContactForm />
    </div>
  );
}
