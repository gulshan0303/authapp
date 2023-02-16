import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./style.css"
const Header = () => {
  return (
    <>
     <div className="header">
        <div className="logo">
            <Link to="/">GoalSetter</Link>
        </div>
        <ul>
            <li style={{listStyle:"none"}}>
                <Link to="/login">
                    <FaSignInAlt/> Login
                </Link>
                <Link to="/register">
                    <FaUser/> Register
                </Link>
            </li>
        </ul>
     </div>
     </>
  )
}

export default Header