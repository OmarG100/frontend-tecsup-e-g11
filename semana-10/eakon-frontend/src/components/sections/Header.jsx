import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logoEAKON from '../../assets/img/logo-eakon.webp';

const Header = () => {

  const header = useRef();
  const modal = useRef();

  const showMenu = () => {
    header.current.classList.add('header--move');
    modal.current.classList.add('modal--show');
  };

  const hideMenu = () => {
    header.current.classList.remove('header--move');
    modal.current.classList.remove('modal--show');
  };

  return (
    <header
      className="header"
      ref={header}
    >
      <nav className="nav">
        <div className="container f-elements f-elements--header">
          <Link to="/">
            <img src={logoEAKON} alt="Logo de EAKON" className="nav__logo" width="32" height="32" />
          </Link>
          <div
            className="modal modal--header"
            ref={modal}
            onClick={hideMenu}
          >
            <ul
              className="list list--header"
              onClick={e => e.stopPropagation()}
            >
              <li>
                <Link
                  to="/productos"
                  className="list__link"
                  onClick={hideMenu}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="list__link"
                  onClick={hideMenu}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="list__link"
                  onClick={hideMenu}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="list__link"
                  onClick={hideMenu}
                >
                  Contacto
                </Link>
              </li>
              <li
                className="icon icon--close"
                onClick={hideMenu}
              >
                ❌
              </li>
            </ul>
          </div>
          <div className="f-elements f-elements--center">
            <select>
              <option value="value1">🌚</option>
              <option value="value2">🌞</option>
              <option value="value3">💻</option>
            </select>
            <button
              className="icon"
              onClick={showMenu}
            >
              🍔
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;