import { HomeImg } from "../../images";
import "./home.css";

const Home = () => {
    const clickHandler = () => {
        
    }
    return (
        <div className="home-container flex-row p-2">
            <div className="home-left flex-column gap">
                <div className="home-heading">Notes</div>
                <div className="home-desc flex-column">
                    <div className="home-desc-title mb-2">Meet your modern <br /> note taking app.</div>
                    <div className="home-desc-content gray-text mb-2">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</div>
                    <div className="home-buttons flex-row">
                        <button className="button primary-button mr-1" onClick={() => clickHandler}>SIGNUP</button>
                        <button className="button primary-button-outlined">Already have an account?</button>
                    </div>
                </div>
            </div>
            <div className="home-right flex-row justify-content-center align-items-center">
                <img src={HomeImg} alt="banner" />
            </div>    
        </div>
    )
}

export { Home };