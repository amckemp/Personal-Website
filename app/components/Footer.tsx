export function Footer() {
  const year = new Date().getFullYear();

  return <div className="footer">© {year} Amelia Kemp</div>;
}
