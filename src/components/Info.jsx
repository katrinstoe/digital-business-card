import katrin_bild from '../assets/IMG_6453.jpg'
import email from '../assets/email.png'
import linkedIn from '../assets/linkedin.png'

export default function Info() {
    return (
        <div className="infoBox">
            <img src={katrin_bild} alt="katrin" className="profile-pic"/>
            <h1>Katrin Stötter</h1>
            <h3>Frontend Developer</h3>
            <a href="mailto: katrin.stoetter@t-online.de">katrin.stoetter@t-online.de</a>
            <div className="btn-row">
                <a href="mailto:katrin.stoetter@t-online.de" className="email-btn" type="button">
                    <img src={email} alt="email-icon" width="15px"/>
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/katrin-st%C3%B6tter-b2b32521a/" className="linkedIn-btn" type="button">
                    <img src={linkedIn} alt="linkedIn-icon" width="15px"/>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}