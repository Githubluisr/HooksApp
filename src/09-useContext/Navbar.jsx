import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

  return (
    <>
      {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme='dark'>
        <div classNameName="container-fluid">

          <Link classNameName="navbar-brand" to="/">UseContext</Link>

          <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul classNameName="navbar-nav">
                
                <NavLink
                  // se recibe una lista de argumentos, dentro viene la propiedad isActive por eso se desestructura aqui
                  classNameName= { ( {isActive} ) => { `nav-link ${isActive ? 'active': '' }` }} 
                  to='/'
                >
                  Home
                </NavLink>

              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark rounded-3" data-bs-theme='dark'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">UseContext</Link>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className= { ( { isActive } ) => `nav-link ${isActive ? 'active':'' }`} to='/' >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className= { ( { isActive } ) => `nav-link ${isActive ? 'active':'' }`} to='/about' >About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className= { ( { isActive } ) => `nav-link ${isActive ? 'active':'' }`} to='/login' >Login</NavLink>
                </li>
    
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
    
  )
}
