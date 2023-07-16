import './style.css';
import Header from './blocks/Header/header';
import hero from './blocks/Hero/hero';
import filter from './blocks/Shop/Filter/Filter';
import video from './blocks/Video/Video';
import footer from './blocks/Footer/Footer';

const initApp = () => {
    Header();
    hero();
    filter();
    video();
    footer();
}

initApp()


