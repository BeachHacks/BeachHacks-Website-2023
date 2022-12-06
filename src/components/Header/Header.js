import "./Header.css";
import Logo from "./assets/bhLogoBrick.png";
const Header = () =>{
return(
<section>
<div class="header">
  <div class="header-right">
  <img src={Logo}/>
  <button type="button">Join Now</button>
  <button type="button">Spotify</button>
  <button type="button">Our Team</button>
  <button type="button">Workshop</button>
  <button type="button">Home</button>
</div>
</div>
</section>
    )
}
export default Header