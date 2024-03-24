import { NavLink } from "react-router-dom"
import Search from "../components/Search"

const Heading = ({ toggleMobileMenu }) => (
    <div className="container heading">
        <div className="hamburger" onClick={toggleMobileMenu}></div>
        <NavLink to="/" className="logo"></NavLink>
        <Search />
    </div>
)

export default Heading;