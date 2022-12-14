import { Mail, Person } from '@mui/icons-material'
import './topbar.scss'

function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' +(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>kizhakkayil.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+91 9645 88 77 98</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>alishamseer@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
