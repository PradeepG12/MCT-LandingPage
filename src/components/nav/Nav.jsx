import React from 'react'
import './nav.css'

const Nav = ({page,setPage}) => {
    // const [border,setBorder] = useState(false);
  return (
    <div className='nav'>
        <div className="first">
            <h1>MCT</h1>
        </div>
        <div className="second">
            <div className="pages">
                <li onClick={()=>{setPage('home')}} className={page === 'home' ? 'border' : ''} id='nav-home'>Home</li>
                <li onClick={()=>{setPage('courses')}} className={page === 'courses' ? 'border' : ''} id='nav-courses'>Courses</li>
                <li onClick={()=>{setPage('bots')}} className={page === 'bots' ? 'border' : ''} id='nav-bots'>Bots</li>
                <li onClick={()=>{setPage('about')}} className={page === 'about' ? 'border' : ''} id='nav-about'>About Us</li>
                <li onClick={()=>{setPage('contact')}} className={page === 'contact' ? 'border' : ''} id='nav-contact'>Contact</li>
            </div>
            <div className="login">
                <p>Login</p>
            </div>
        </div>
        
    </div>
  )
}

export default Nav