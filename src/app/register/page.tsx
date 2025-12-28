
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
                        Create an account
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Join us and start building something extraordinary
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                                Full Name
                            </label>
                            <Input type="text" placeholder="John Doe" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                                Email address
                            </label>
                            <Input type="email" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                                Password
                            </label>
                            <Input type="password" placeholder="••••••••" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                                Confirm Password
                            </label>
                            <Input type="password" placeholder="••••••••" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 pt-4">
                        <div className="w-full [&>button]:w-full [&>a]:w-full [&>a>button]:w-full">
                            <Button href="/dashboard" text="Register" />
                        </div>

                        <p className="text-center text-sm text-slate-500">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors hover:underline">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
