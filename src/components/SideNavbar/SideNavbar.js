import styles from "./SideNavbar.module.css"
import { NavLink } from "react-router-dom";
import DensityMediumSharpIcon from '@mui/icons-material/DensityMediumSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
//import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
//import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { navData } from "./navData";
import { useState } from "react";

export default function Sidenav() {
    const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open ? (<ClearSharpIcon className={styles.icon}/>): (<DensityMediumSharpIcon/>)}
        </button>
        {open && navData.map((item, index) =>{
            const isLastItem = item.id === 3;
            return  (
                <NavLink key={item.id} className={styles.sideitem} to={item.link} style={isLastItem ? {borderBottom: "1px solid black"} : {}}>

                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
                </NavLink>
            );
        })}
    </div>
  )
}