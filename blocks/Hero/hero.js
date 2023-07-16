import './hero.css'
import heroTemplate from './heroTemplate';


const hero = () => {
    const heroSection = document.querySelector('.cr-section-hero');
    heroSection.innerHTML += heroTemplate()
}

export default hero