import './Project.css';
import { Title } from '../indexSec';
import { FaFolder } from "react-icons/fa";
import projectItems from '../../Data/DataProject';
import ProjectCard from './ProjectCard';
const Project = (props) => {
    const projectCards=projectItems.map(card=>{
        return <ProjectCard key={card.id} image={card.image} nomProject={card.nomProject} descProject={card.descProject} pathPr={card.pathPr}/>
    });
    return (
        <>
            <Title><FaFolder/> Project</Title>
            <div className="container mt-5 projectCont">
                <div className="row">
                        {projectCards}
                </div>
            </div>
        </>
    )
}

export default Project;