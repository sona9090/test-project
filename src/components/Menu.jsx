import data from "../data/data-menu.json";
import {NavLink} from "react-router-dom";
import { useState, useEffect } from "react";


const Menu = ({isMobileMenuOpen, toggleMobileMenu}) => {
    const [scrolled, setScrolled] = useState(false);
    const [webVersion, setWebVersion] = useState(true);

    useEffect(() => {
        const detectVersion = () => setWebVersion(window.innerWidth > 767);
        detectVersion();

        window.addEventListener("resize", detectVersion);
        return () => window.removeEventListener("resize", detectVersion);
    }, []);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 200);      
  
      if(webVersion) {
        window.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        if(webVersion) {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);
  
    
    return (
        <>
            {isMobileMenuOpen && <div className="mob_menu_overlay" onClick={toggleMobileMenu}></div>}
            <ul className={`menu${scrolled ? ` fly` : ``}${isMobileMenuOpen ? ` open`: ``}`}>
                <li className="menu_mob_header">
                    <NavLink to="/" className="menu_logo"></NavLink>
                    <span className="menu_close" onClick={toggleMobileMenu}></span>
                </li>
                {data.map((item, key) => {
                    const hasSubmenu = item?.submenu;
                    const submenuClass = hasSubmenu ? "has_sub" : "";
                    
                    return (
                        <li key={`item${key}`}>
                            {!webVersion && hasSubmenu && <input type="checkbox" name="touch_submenu" id="touch_submenu" />}
                            <NavLink
                                to={item.link}
                                className={({ isActive }) => (isActive ? `active${hasSubmenu ? " " : ""}` : '')+submenuClass}>{item.name}</NavLink>
                            {hasSubmenu && (
                                <ul className='submenu'>
                                    {item.submenu.map((subitem, subkey) => (
                                        <li key={`subitem${subkey}`}>
                                            <NavLink to={item.link + subitem.link}>{subitem.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Menu;