import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({ text, href, onClick }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href}>
        <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
    >
      {text}
    </button>
  );
};

export default Button;