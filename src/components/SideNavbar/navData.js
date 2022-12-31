import Home from "./icons/Home.svg";
import About from "./icons/About.svg";
import Sponsors from "./icons/Sponsors.svg";
import FAQ from "./icons/FAQ.svg";


export const navData = [
    {
        id: 0,
        icon: <img src={Home}/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <img src={About}/>,
        text: "About",
        link: "/about"
    },
    {
        id: 2,
        icon: <img src={Sponsors}/>,
        text: "Sponsors",
        link: "sponsors"
    },
    {
        id: 3,
        icon: <img src={FAQ}/>,
        text: "FAQ",
        link: "faq"
    },

]