import { contact } from "../data";

const links = [
  ["#sobre", "Sobre"],
  ["#audiencia", "Audiência"],
  ["#serie", "Série"],
  ["#parcerias", "Parcerias"],
];

export function Nav() {
  return (
    <header className="nav">
      <a href="#topo" className="nav-brand">
        Bruno Motta
      </a>
      <nav className="nav-links" aria-label="Seções">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="btn btn--gold btn--sm" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
        Falar com o Bruno
      </a>
    </header>
  );
}
