import Home from "./icons/Home.svg";
import About from "./icons/About.svg";
import Heart from "./icons/Heart.svg";
import FAQ from "./icons/FAQ.svg";
import Line from "./icons/Line.svg";
import Our_Team from "./icons/Our_Team.svg";
import Spotify from "./icons/Spotify.svg";
import Schedule from "./icons/Schedule.svg";
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
        link: "about"
    },
    {
        id: 2,
        icon: <img src={Heart}/>,
        text: "Sponsors",
        link: "sponsors"
    },
    {
        id: 3,
        icon: <img src={FAQ}/>,
        text: "FAQ",
        link: "faq"
    },


    {
        id: 4,
        icon: <img src={Our_Team}/>,
        text: "Our Team",
        link: "our team"
    },

    {
        id: 5,
        icon: <img src={Spotify}/>,
        text: "Spotify",
        link: "spotify"
    },

    {
        id: 6,
        icon: <img src={Schedule}/>,
        text: "Schedule",
        link: "schedule"
    }









]