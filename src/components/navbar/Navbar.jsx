import { RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import "./navbar.css"
import { useState } from 'react';

const Menu = () => (
  <>
    <a href="#home" className="gpt3__navbar-left-links">Home</a>
    <a href="#wgpt3" className="gpt3__navbar-left-links">What is Gpt?</a>
    <a href="#possibility" className="gpt3__navbar-left-links">OpenAi</a>
    <a href="#features" className="gpt3__navbar-left-links">CaseStudies</a>
    <a href="#blog" className="gpt3__navbar-left-links">Library</a>
  </>
)


useState
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
   <div className='gpt3__navbar'>
    <div className="gpt3__navbar-left">
      <div className="gpt3__navbar-left_logo">
        <img src={logo} alt="Imagen Logo" />
      </div>
      <div className="gpt3__navbar-left-links">
        <Menu/>
      </div>
    </div>
    <div className="gpt3__navbar-right">
        <div className="gpt3__navbar-right_sign">
          <a href="#" className="gpt3__navbar-right_sign-link gpt3__navbar-right_sign-link-in">SignIN</a>
          <a href="#" className="gpt3__navbar-right_sign-link gpt3__navbar-right_sign-link-up">SignUP</a>
        </div>
        <div className="gpt__navbar-right_menu">
          {toggleMenu 
            ? ( <RiCloseLine color='#fff' size={27} onClick={
              ()=> setToggleMenu(false)
            } /> )
            : ( <RiMenu3Line color='#fff' size={27} onClick={
              ()=> setToggleMenu(true)
            } /> )
          }

          { toggleMenu && (
              <div className="gpt__navbar-right_menu-container scale-up-center">
                <Menu/>
                <div className="gpt3__navbar-right_menu-container-sign">
                  <a href="#" className="gpt3__navbar-right_menu-container-sign_link gpt3__navbar-right_menu-container-sign_link-in">SignIN</a>
                  <a href="#" className="gpt3__navbar-right_menu-container-sign_link gpt3__navbar-right_menu-container-sign_link-up">SignUP</a>
                </div>
              </div>
            )
          }
        </div>
    </div>
   </div>
  )
}

export default Navbar