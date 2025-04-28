import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-light shadow-sm fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand fs-3 fw-bold text-primary" to="/">MyProfile</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map(link => (
              <li className="nav-item" key={link.to}>
                <Link
                  className={`nav-link${pathname === link.to ? ' active' : ''}`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
