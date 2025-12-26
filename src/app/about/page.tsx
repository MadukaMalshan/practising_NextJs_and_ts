import Navbar from "@/components/Navbar";

export default function AboutPage() {
  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "We are committed to delivering excellence and innovation in everything we do."
    },
    {
      icon: "🌟",
      title: "Our Vision",
      description: "To become a leading company known for quality, integrity, and customer satisfaction."
    },
    {
      icon: "👥",
      title: "Our Team",
      description: "A diverse group of talented professionals working together to achieve greatness."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We constantly evolve and adapt to meet the changing needs of our clients."
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Every project is a testament to our dedication to quality and excellence."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building strong, long-term relationships with our clients."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Learn more about our mission, vision, and the amazing team behind our success.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-3 group"
            >
              <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-3">15+</div>
              <p className="text-lg md:text-xl opacity-90">Years in Business</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-3">500+</div>
              <p className="text-lg md:text-xl opacity-90">Satisfied Clients</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-3">200+</div>
              <p className="text-lg md:text-xl opacity-90">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Expert Team", desc: "Highly skilled professionals with years of experience" },
            { title: "Quality First", desc: "We never compromise on quality and attention to detail" },
            { title: "24/7 Support", desc: "Always here to help with any questions or concerns" },
            { title: "Affordable Pricing", desc: "Competitive rates without sacrificing quality" }
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}