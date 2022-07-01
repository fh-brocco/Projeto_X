import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="projetox-nav-content">
          <h1>Projeto X</h1>
          <a href="https://github.com/fh-brocco" target="_blank" rel="noreferrer">
            <div className="projetox-contact-container">
              <GithubIcon />
              <p className="projetox-contact-link">/fh-brocco</p>
            </div>
          </a>
        </div>
      </nav>
    </header>);
}

export default Navbar;