import UserCard from "@/components/UserCard"
import { users } from "@/data/users"

export default function page() {
  return (
    <div className="p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Members</h1>
          <p className="text-slate-500 text-sm">
            Manage all registered team members
          </p>
        </div>

        <input
          type="text"
          placeholder="Search members..."
          className="px-4 py-2 border rounded-xl text-sm"
        />
      </div>
      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}
