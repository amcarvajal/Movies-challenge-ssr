import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - Developed By Miguel Angel Carvajal.</p>
    </footer>
  );
}
