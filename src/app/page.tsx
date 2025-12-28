import UserCard from '@/components/UserCard'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';

export default function Home() {
  const users = [
    { name: "Maduka", age: 25, isActive: true },
    { name: "Alex Johnson", age: 28, isActive: true },
    { name: "Sarah Williams", age: 26, isActive: false },
  ];

  return (
    <>
      <Navbar />

      {/*Hero_Section*/}
      <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-40 lg:pb-48">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New Features Available
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
            Build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">extraordinary</span> today.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover amazing solutions and connect with our professional team. We provide the tools you need to succeed in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Main_Content */}
      <main className="bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-slate-600 max-w-xl">
                The talented professionals driving our success and innovation forward.
              </p>
            </div>
            <Link href="/team" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 group">
              View all members
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {users.map((user, index) => (
              <UserCard
                id={0}
                key={index}
                name={user.name}
                age={user.age}
                isActive={user.isActive}             
                 />
            ))}
          </div>

          {/* Stats_Section */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-8 md:pt-0 first:pt-0">
                <div className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">100+</div>
                <p className="text-indigo-200 font-medium">Happy Clients</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">50+</div>
                <p className="text-indigo-200 font-medium">Projects Completed</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">10+</div>
                <p className="text-indigo-200 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
