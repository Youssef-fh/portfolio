import pr3 from '../../../Assets/Images/pr3.png';
import {FaPhp,FaHtml5,FaCss3,FaBootstrap} from 'react-icons/fa';
const Project3P = () => {
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
            <img className="img-fluid" src={pr3} alt=""/>
          </div>
          <div className="col-lg-8">
            <p>Mon troisieme projet d'un site web ecommerce.</p>
            <ul>
              <li><FaPhp/> Php</li>
              <li><FaHtml5/> Html</li>
              <li><FaCss3/> Css</li>
              <li><FaBootstrap/> Bootstrap</li>
            </ul>
            <a className="btn btn-primary disabled" href="https://github.com/">En cours de developpement</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project3P;