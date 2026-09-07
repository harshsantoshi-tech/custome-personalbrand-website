import ThemeToggle from "./ThemeToggle";
import "./Nav.css";

export default function Nav() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="nav-mark">Elena Marsh</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Case Studies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <ThemeToggle />
        <button className="nav-book" onClick={scrollToContact}>
          Book a strategy call
        </button>
      </div>
    </nav>
  );
}