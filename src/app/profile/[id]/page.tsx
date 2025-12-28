import { users } from "@/data/users";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function ProfilePage({ params }: Props) {
  const user = users.find(u => u.id === params.id);

  if (!user) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold text-slate-900">
          {user.name}
        </h1>

        <p className="text-slate-500 mt-2">{user.role}</p>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-400">Age</p>
            <p className="font-semibold">{user.age}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Status</p>
            <p className="font-semibold">
              {user.isActive ? "Active" : "Inactive"}
            </p>
          </div>
        </div>

        <p className="mt-6 text-slate-600">{user.bio}</p>
      </div>
    </div>
  );
}