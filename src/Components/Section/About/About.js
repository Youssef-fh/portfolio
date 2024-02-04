import './About.css';
import profile from '../../../Assets/Images/Youssef.jpg';
import { Title } from '../indexSec';
import {FaInfoCircle} from "react-icons/fa";
const About = () => {
    return (
        <>
            <Title><FaInfoCircle/> About Me</Title>
            <div className="container mt-5 text-center aboutCont">
                <div className="row">
                    <div className="col-md-4 cont_img">
                        <img src={profile} className="img-fluid rounded-circle mb-3 profileImg" alt="ProfilePicture"/>
                    </div>
                    <div className="col-md-8 mt-5 aboutDesc">
                        <p>Hi, I'm Fatih Youssef and I have been working as a web developer for 10 years. I have a strong foundation in HTML, CSS, and JavaScript,Php and Laravel with React js , and am always looking to learn new technologies and techniques to improve my skills. I am a problem-solver at heart and enjoy finding creative solutions to complex challenges.</p>
                        <p>In my free time, you can find me tinkering with new projects, playing video games, or spending time with my family and friends.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;