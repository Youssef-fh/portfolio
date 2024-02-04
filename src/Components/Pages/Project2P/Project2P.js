import pr2 from '../../../Assets/Images/pr2.png';
import {FaJsSquare,FaHtml5,FaCss3,FaBootstrap,FaPhp} from "react-icons/fa";
const Project2P = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading mt-3">Mon projet</h2>
            <hr className="my-4"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img className="img-fluid" src={pr2} alt=""/>
          </div>
          <div className="col-lg-8">
            <p>Mon deuxieme projet de course enligne</p>
            <ul>
              <li><FaJsSquare/> Javascript</li>
              <li><FaHtml5/> Html</li>
              <li><FaCss3/> Css</li>
              <li><FaBootstrap/> Bootstrap</li>
              <li><FaPhp/> Php</li>
            </ul>
            <a className="btn btn-primary" href="https://github.com/Youssef-fh/course-Enligne" target="_blank" rel="noreferrer">Voir sur GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project2P;