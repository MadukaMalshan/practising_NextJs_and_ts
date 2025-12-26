import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "contact@example.com" },
    { icon: "📱", label: "Phone", value: "+1 (555) 123-4567" },
    { icon: "📍", label: "Location", value: "San Francisco, CA" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Have a question or project in mind? We'd love to hear from you. Reach out to us anytime and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <form className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="What is this about?"
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-10">
            <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Tell us more about your inquiry..."
              rows={6}
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 px-6 rounded-lg uppercase tracking-wider shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center text-white transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl md:text-6xl mb-4">{info.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">
                  {info.label}
                </h3>
                <p className="text-xl md:text-2xl font-bold break-words">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our FAQ page or give us a call. We're here to help!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 uppercase tracking-wide">
              Visit FAQ
            </button>
            <a href="tel:+15551234567" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 uppercase tracking-wide">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}