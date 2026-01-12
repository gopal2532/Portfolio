export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-6 py-24">
      <h2 className="text-4xl text-cyan-400 mb-8">Contact</h2>
      <input className="w-full p-3 mb-4 bg-gray-900 rounded" placeholder="Email" />
      <textarea className="w-full p-3 mb-4 bg-gray-900 rounded" rows="4" />
      <button className="w-full bg-cyan-400 text-black py-3 rounded">
        Send
      </button>
    </section>
  );
}
