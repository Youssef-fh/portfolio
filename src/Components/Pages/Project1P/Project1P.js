import pr1 from '../../../Assets/Images/pr1.png';
import "./Project1P.css";
import {RiHtml5Fill,RiCss3Fill} from "react-icons/ri";
import {BsFillBootstrapFill} from 'react-icons/bs';
const Project1P = () => {
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
            <img className="img-fluid" src={pr1} alt=""/>
          </div>
          <div className="col-lg-8">
            <p>Mon premier projet de salle de coiffure basic et simple</p>
            <ul>
              <li><RiHtml5Fill/> Html</li>
              <li><RiCss3Fill/> Css</li>
              <li><BsFillBootstrapFill/> Bootstrap</li>
            </ul>
            <a className="btn btn-primary" href="https://github.com/Youssef-fh/YF-barber" target="_blank" rel="noreferrer">Voir sur GitHub</a>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Project1P;