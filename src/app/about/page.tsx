import Navbar from "@/components/Navbar";

export default function AboutPage() {
  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "We are committed to delivering excellence and innovation in everything we do, pushing boundaries to create value."
    },
    {
      icon: "🌟",
      title: "Our Vision",
      description: "To become a global leader known for quality, integrity, and customer satisfaction in every interaction."
    },
    {
      icon: "👥",
      title: "Our Team",
      description: "A diverse group of talented professionals working together with passion to achieve greatness."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We constantly evolve and adapt to meet the changing needs of our clients with cutting-edge solutions."
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Every project is a testament to our unwavering dedication to quality, precision, and excellence."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building strong, long-term relationships with our clients based on trust and mutual success."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            About Our Company
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Innovators</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Learn more about our mission, vision, and the amazing team behind our success. We are dedicated to building the future.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="text-center pt-8 md:pt-0 first:pt-0">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">15+</div>
              <p className="text-indigo-600 font-medium">Years in Business</p>
            </div>
            <div className="text-center pt-8 md:pt-0">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">500+</div>
              <p className="text-indigo-600 font-medium">Satisfied Clients</p>
            </div>
            <div className="text-center pt-8 md:pt-0">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">200+</div>
              <p className="text-indigo-600 font-medium">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Expert Team", desc: "Highly skilled professionals with years of experience in the industry." },
            { title: "Quality First", desc: "We never compromise on quality and attention to detail in our work." },
            { title: "24/7 Support", desc: "Always here to help with any questions or concerns you may have." },
            { title: "Affordable Pricing", desc: "Competitive rates without sacrificing quality or performance." }
          ].map((item, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}