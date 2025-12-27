import Input from "@/components/Input";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4">
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </div>
  );
}