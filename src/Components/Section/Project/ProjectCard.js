import './Project.css';
import { Link } from "react-router-dom";
const ProjectCard = (props) => {
    return (
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={props.image} className="card-img-top" alt="Project 1"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.nomProject}</h5>
                        <p className="card-text">{props.descProject}</p>
                        <Link to={props.pathPr} className="btn btn-primary">See More</Link>
                    </div>
                </div>
            </div>
    )
}

export default ProjectCard;