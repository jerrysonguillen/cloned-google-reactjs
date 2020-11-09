import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/style.css";

const Footer = () => {
    return (
        <footer className="footer fixed-bottom">
           <div className="phil pl-4">Philippines</div>
           <div className="bot-footer pl-4 "><button className="footer-button">Advertising</button><button className="footer-button">Business</button><button className="footer-button">About</button><button className="footer-button">How Search works</button><button className="float-right footer-button mr-4">Settings</button><button className="float-right footer-button mr-2">Term</button><button className="float-right footer-button mr-2">Privacy</button></div>
        </footer>
    )
};

export default Footer;