import { NavLink } from "react-router-dom";
import './Navbar.css';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="nav">
            <ul className="list">
                
                <li className="listItem"> <NavLink to={'/'} className={(e)=>{return e.isActive?'link active':'link'} }> Home </NavLink> </li>
                <li className="listItem"> <NavLink to={'/login'} className={(e)=>{return e.isActive?'link active':'link'} }> Login </NavLink> </li>
                <li className="listItem"> <NavLink to={'/signup'} className={(e)=>{return e.isActive?'link active':'link'} }> Sign Up </NavLink> </li>
                <li className="listItem"> <NavLink to={'/about'} className={(e)=>{return e.isActive?'link active':'link'} }> About </NavLink> </li>

                {/* <li className="listItem"> <a href={'/'}> Home </a> </li>
                <li> <a href={'/login'}> Login </a> </li>
                <li> <a href={'/signup'}> Sign Up </a> </li>
                <li> <a href={'/about'}> About </a> </li> */}
                {/* <li className="listItem"> <Link to={'/'}> Home </Link> </li> */}
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
