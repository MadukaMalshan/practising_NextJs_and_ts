import { UserCardProps } from "../types";

export default function UserCard({
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

    return(
        <div className="group bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl md:hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 cursor-pointer">
            {/* Header Section with Gradient Background */}
            <div className="relative h-20 sm:h-24 md:h-28 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-500"></div>
                <div className="absolute -right-8 -top-8 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-blue-400 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -left-8 -bottom-8 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-300 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
            </div>

            {/* Avatar Section */}
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 relative">
                <div className="absolute -top-8 sm:-top-10 md:-top-12 left-4 sm:left-5 md:left-6">
                    <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg sm:text-2xl md:text-3xl shadow-lg md:shadow-xl border-3 md:border-4 border-white group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500">
                        {getInitials(name)}
                    </div>
                </div>
                <div className="pt-14 sm:pt-16 md:pt-20">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-4 sm:mb-5 md:mb-6">Professional Member</p>

                    {/* Info Items */}
                    <div className="space-y-3 sm:space-y-3.5 md:space-y-4 mb-4 sm:mb-5 md:mb-6 border-t border-gray-100 pt-4 sm:pt-5 md:pt-6">
                        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group/item">
                            <span className="text-base sm:text-lg md:text-xl flex-shrink-0">📅</span>
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Age</p>
                                <p className="text-sm sm:text-base text-gray-900 font-semibold truncate">{age} years old</p>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                            <span className={`w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full flex-shrink-0 ${isActive ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></span>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Status</p>
                                <span className={`inline-block px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                    isActive 
                                        ? 'bg-green-100 text-green-800 group-hover:bg-green-200 shadow-sm' 
                                        : 'bg-red-100 text-red-800 group-hover:bg-red-200 shadow-sm'
                                }`}>
                                    {isActive ? '● Active' : '● Inactive'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm sm:text-base rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-3 sm:translate-y-3.5 md:translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    )
}
