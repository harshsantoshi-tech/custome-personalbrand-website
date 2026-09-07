import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-mark">Elena Marsh</span>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Case Studies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className="footer-meta">© {new Date().getFullYear()} Elena Marsh Consulting</span>
    </footer>
  );
}