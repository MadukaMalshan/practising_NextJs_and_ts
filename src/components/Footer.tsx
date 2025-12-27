import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">LinkedIn</a>
          </div>
        </div>
    </footer>
  )
}