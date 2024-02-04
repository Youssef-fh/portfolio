import './Skills.css';
import { Title } from '../indexSec';
import {RiPushpinFill} from 'react-icons/ri';

const Skills = () => {
    return (
        <>
            <Title><RiPushpinFill/> Skills</Title>
            <div className='container mt-5 skillsCont'>
                <div className="row allSkills">
                    <div className="col-sm-12 col-md-6 col-lg-6 contSkills">
                        <h3>Front-end</h3>
                        <div className="progress mb-3">
                            
                            <div className="progress-bar" style={{"width":"70%"}}>HTML</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"60%"}}>CSS</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"70%"}}>React JS</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"80%"}}>Bootstrap</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 contSkills">
                        <h3>Back-end</h3>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"60%"}}>Laravel</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"50%"}}>PHP</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 contSkills">
                        <h3>DevOps</h3>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"70%"}}>Git</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"70%"}}>Gitlab</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"80%"}}>Scrum</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 contSkills">
                        <h3>Others</h3>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"60%"}}>Figma</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"70%"}}>Uml</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" style={{"width":"80%"}}>Merise</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;