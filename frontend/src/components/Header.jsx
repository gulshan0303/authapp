import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./style.css";
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import {logout,reset} from '../features/auth/authSlice'
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)
    const logOutClick =() => {
         dispatch(logout());
         dispatch(reset())
         navigate('/login')
    }
  return (
    <>
     <div className="header">
        <div className="logo">
            <Link to="/">GoalSetter</Link>
        </div>
        <ul>
            {
                user ? (
                    <li style={{listStyle:"none"}}>
                   <button onClick={logOutClick} className='btn'>
                   <FaSignOutAlt/> Logout
                   </button>
                   
        
               
            </li>
                ) : (<>
                <li style={{listStyle:"none"}}>
                <Link to="/login">
                    <FaSignInAlt/> Login
                </Link>
                <Link to="/register">
                    <FaUser/> Register
                </Link>
            </li>
                    </>)
            }
        </ul>
     </div>
     </>
  )
}

export default Header