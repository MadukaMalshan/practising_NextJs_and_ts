import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Login</h1>
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button href="/" text="Sign In"/>
    </div>
  );
}