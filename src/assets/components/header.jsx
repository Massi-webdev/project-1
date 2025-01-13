import './header.css'
import logo from "../icons/logo.png"
import searchIcon from "../icons/search.png"

function Header(){

  return (
    <div className='header-section'>
      <div className="left-side-header"> 
        <button className="logo-button"> 
          <a href="/DealsLand/index.html">
            <img className="web-site-logo" src={logo} alt=""/>
          </a>
        </button>

        <button className="best-deals-button"> Best deals </button>
        <button className="hot-deals-button"> Hot deals </button>
        <button className="free-stuff-button"> FREE STUFF </button>
        
      </div>
      
      <div className="middle-side-header"> 

        <input className="search-bar" type="search" placeholder="Search here"/> 
        <button className="search-button"> 
          <img className="search-bar-image" src={searchIcon} />
        </button>
        <button className="add-button"> 
          <a className="add-deal-link" href="/DealsLand/add-deals.html">+</a>
        </button>
      </div>

      <div className="right-side-header"> 
        <button className="notifications-button"> Notifications </button>
        <button className="profile-button"> Profile </button>
      </div>
    </div>
  )
  
}

export default Header