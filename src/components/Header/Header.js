import "./Header.css"
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <nav className="header">
        <div>
        <Link to="/">            
                Home            
            </Link>
        </div>
        <div className="header-right">
        <div>
        <Link to="/login">            
               Login            
            </Link>
        </div>
        <div>
        <Link to="/signup">            
                Signup           
            </Link>
        </div>
            
            
            </div>
        </nav>
    )
}
  
  export default Header