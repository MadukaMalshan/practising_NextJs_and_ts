import UserCard from '@/components/UserCard'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  const users = [
    { name: "Maduka", age: 25, isActive: true },
    { name: "Alex Johnson", age: 28, isActive: true },
    { name: "Sarah Williams", age: 26, isActive: false },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-44 lg:py-52">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-blue-600 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight tracking-tight">
            Welcome to MyWebsite
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed md:leading-loose font-light tracking-wide">
            Discover amazing solutions and connect with our professional team. We're here to help you succeed.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link
              href="/about"
              className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 uppercase tracking-wider"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="px-8 md:px-10 py-4 md:py-5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-base md:text-lg rounded-xl transition-all duration-300 uppercase tracking-wider hover:shadow-lg hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Meet the talented professionals who make our success possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              isActive={user.isActive}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">100+</div>
              <p className="text-lg opacity-90">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">50+</div>
              <p className="text-lg opacity-90">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">10+</div>
              <p className="text-lg opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
