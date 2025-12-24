import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-component">
        <Link className="home-tab" href="/">Home</Link>
        <Link className="about-tab" href="/about">About</Link>
        <Link className="contact-tab" href="/contact">Contact</Link>
    </nav>
  )
}