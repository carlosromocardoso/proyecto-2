import './nav.css';

export const Navigation = () => {
  return `
          <nav role="navigation" class="cr-section-nav cr-section-nav-right">
            <ul
              class="cr-layout-flex cr-section-header-nav cr-section-header-nav-right"
            >
              <li>
                <img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/user_fz9xgh.png" alt="User icon" class="cr-icons" />
              </li>
              <li>
                <a
                  href="#"
                  role="link"
                  aria-label="#"
                  class="cr-section-header--nav-link"
                  >Iniciar Sesion</a
                >
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <a
                  href="#"
                  role="link"
                  aria-label="#"
                  class="cr-section-header--nav-link"
                  >Contacto</a
                >
              </li>
            </ul>
          </nav>
    `;
};
