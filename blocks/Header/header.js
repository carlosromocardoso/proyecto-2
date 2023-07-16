import './header.css';
import { Navigation } from './Navigation/nav';
import { hamburguer } from './Hamburguer/hamb';

const Header = () => {
  const header = document.querySelector('.cr-section-header');
  header.innerHTML += template()
};

const template = () => {
  return `
  <div class="cr-layout-container">
    <div class="cr-section-header-layout cr-layout-flex">
  ${hamburguer()}
  ${Navigation()}
    </div>
  </div>
  `
}

export default Header;
