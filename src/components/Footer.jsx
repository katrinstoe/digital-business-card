import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import github from "../assets/github.png"



export default function Footer(){
    return(
        <footer className="footer">
            <img src={twitter} alt="twitter-logo"/>
            <img src={facebook} alt="facebook-logo"/>
            <img src={instagram} alt="instagram-logo"/>
            <img src={github} alt="github-logo"/>
        </footer>
    )
}