import './Video.css'

const video = () => {
    const video = document.querySelector('#cr-section-video')
    video.innerHTML += videoTemplate()
}

const videoTemplate = () => {
    return `
    <div class="cr-section-video__description cr-layout-flex">
        <button class="cr-button">Running Kids</button>
    </div>
    <video autoplay muted class="cr-section-video-media">
      <source src="https://res.cloudinary.com/dqip8uhet/video/upload/v1689499866/nina-44087_la1pvz.mp4" type="video/mp4" />
    </video>
    `
}

export default video