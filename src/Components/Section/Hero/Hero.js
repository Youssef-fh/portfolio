import './Hero.css';
import cv from "../../../Assets/CV/Cv-Youssef.docx"
const Hero = () => {
    return (
        <>
            <div className='hero-wrapper container mt-4'>
                <div className='hero-content row text-center'>
                    <div className='hero-item'>
                    <div className="jumbotron jumbotron-fluid text-center">
                        <h1 className="display-4">Welcome to My Portfolio</h1>
                        <p className="lead">I am a web developer with a passion for creating beautiful and functional websites. Take a look at some of my work below!</p>
                    </div>
                        <a href={cv} download>
                            <button className='btn btn-primary buttonCv'>
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;