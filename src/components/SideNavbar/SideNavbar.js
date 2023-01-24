import styles from './SideNavbar.module.css';
import { useState } from 'react';
import DensityMediumSharpIcon from '@mui/icons-material/DensityMediumSharp';

// ============= navData.js ============================================
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import { HashLink as Link } from 'react-router-hash-link';

export const navData = [
  {
    id: 0,
    icon: <HomeOutlinedIcon />,
    text: 'Home',
    link: '#'
  },
  {
    id: 1,
    icon: <InfoOutlinedIcon />,
    text: 'About',
    link: '#about'
  },
  {
    id: 2,
    icon: <MonetizationOnOutlinedIcon />,
    text: 'Sponsors',
    link: '#sponsors'
  },
  {
    id: 3,
    icon: <LiveHelpOutlinedIcon />,
    text: 'FAQ',
    link: '#faq'
  }
];
// =================================================================

const SideNavBar = () => {
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <DensityMediumSharpIcon /> : <DensityMediumSharpIcon />}
      </button>
      {navData.map((item) => {
        return (
          <Link key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavBar;
