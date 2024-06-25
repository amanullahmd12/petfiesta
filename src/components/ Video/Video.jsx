

import './Video.css'

function Video() {
  return (
    <section className='video-section'>
    <div className='video p-5'>
      <div className='container d-flex justify-content-center align-item-center video-content'>
      <iframe
  title="Pet Fiesta - Bengaluru"
  width="990"
  height="560"
  src="https://www.youtube.com/embed/NPCrIhDwvBI?autoplay=1&mute=1&enablejsapi=1&controls=0&modestbranding=1&loop=1&rel=0&showinfo=0"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

      </div>
    </div>
  </section>
  )
}

export default Video