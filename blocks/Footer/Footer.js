import './Footer.css'

const footer = () => {
    const footer = document.querySelector('#cr-footer')
    footer.innerHTML += footerTemplate();
}

const footerTemplate = () => {
    return `
    <footer class="cr-footer">
    <div class="cr-footer-container">
    <div class="cr-footer-container-left">
    <p class="cr-footer-container-left__copyright-text">Copyright &copy; 2023 All Rights Reserved by 
    <a href="#">Run Happy</a>.
    </p>
    </div>
    <div class="cr-footer-container-right">
    <ul class="cr-footer-container-right__social-icons">
    <li><a class="cr-social-icons-facebook" href="https://www.facebook.com/carlos.romo.718" target="_blank"><img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/simbolo-de-la-aplicacion-de-facebook_zj7es4.png" alt="facebook"></a></li>
    <li><a class="cr-social-icons-twitter" href="#" target="_blank"><img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/gorjeo_x13asp.png" alt="twitter"></a></li>
    <li><a class="cr-social-icons-instagram" href="https://www.instagram.com/romo7carlos/" target="_blank"><img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/instagram_efptou.png" alt="instagram"></a></li>
    <li><a class="cr-social-icons-github" href="https://github.com/Lucma84" target="_blank"><img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/github_qqcjiq.png" alt="github"></a></li>   
    </ul>
    </div>
    </div>
    </div>
    </footer>
    `
}

export default footer