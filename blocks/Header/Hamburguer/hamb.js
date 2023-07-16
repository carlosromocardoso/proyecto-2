import "./hamb.css"

export const hamburguer = () => {
    return `
    <a href="#" role="link" class="cr-section-header--title">
            <img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/favicon_c3dkni.png" alt="logo" class="cr-logo" />
          </a>
          <label class="cr-hamburger-label" for="hamburger">&#9776;</label>
          <input type="checkbox" class="cr-hamburger" id="hamburger" />
    `
}