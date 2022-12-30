import styles from "./sidenav.module.css"
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navData";
import { useState } from "react";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

export default function Sidenav() {

    const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <ReorderOutlinedIcon />: <ReorderOutlinedIcon />}
        </button>
        {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>
  )
}