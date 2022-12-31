import styles from "./SideNavbar.module.css"
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { navData } from "./navData";
import { useState } from "react";
import Menu from "./icons/Menu.svg";

export default function Sidenav() {
    const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} >
            {open? <img src={Menu} />: <img src={Menu} />}
        </button>
        {navData.map(item =>{
            if (item.id == 0){
                return <NavLink key={item.id} className={styles.homeicon} to={item.link}>
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
                </NavLink>
            }
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>
  )
}