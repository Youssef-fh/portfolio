import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../Assets/Images/logoPort.svg';
import {FaGitlab,FaLinkedin,FaGithub} from "react-icons/fa";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center port-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand lhv" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active lhv" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link lhv" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link lhv" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle lhv" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Project
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/projects">All projects</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/project1">Project 1</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/project2">Project 2</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/project3">Project 3</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link lhv" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a rel='noreferrer' className="nav-link active lhv" href="https://gitlab.com/FatihYoussef" target='_blank'>
                                    <FaGitlab/> Gitlab
                                </a>
                            </li>
                            <li className="nav-item">
                                <a rel='noreferrer' className="nav-link active lhv" href="https://www.linkedin.com/in/fatihyoussef-fy20030920/" target='_blank'>
                                    <FaLinkedin/> LinkedIn
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active lhv" href="https://github.com/Youssef-fh" target='_blank' rel='noreferrer'>
                                    <FaGithub/> Github
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;