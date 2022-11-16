import './intro.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/newprofile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Shamseer Ali</h1>
          <h3>Web Developer<span></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/images/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
