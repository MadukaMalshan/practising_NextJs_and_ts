import { UserCardProps } from "../types";
import Link from "next/link";

export default function UserCard({
    id,
    name,
    age,
    isActive = true,
}: UserCardProps) {
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    return (
        <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 font-bold text-2xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {getInitials(name)}
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${isActive
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                            : 'bg-slate-50 text-slate-500 border-slate-100'
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isActive ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                        {isActive ? 'Active' : 'Inactive'}
                    </span>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                        {name}
                    </h2>
                    <p className="text-sm text-slate-500 font-medium">Professional Member</p>
                </div>

                <div className="flex items-center gap-4 py-4 border-t border-slate-100">
                    <div className="flex-1">
                        <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">Age</p>
                        <p className="text-sm font-semibold text-slate-700">{age} years</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100"></div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">Role</p>
                        <p className="text-sm font-semibold text-slate-700">User</p>
                    </div>
                </div>
                
                <Link href={`/profile/${id}`}>
                <button className="w-full mt-4 py-2.5 px-4 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 font-medium text-sm rounded-xl border border-slate-200 hover:border-indigo-200 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    View Profile
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                </Link>
                
            </div>
        </div>
    )
}
