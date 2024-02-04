import React from 'react'
import { Title } from '../indexSec';
import { RiMailLine,RiPhoneFill,RiMapPin2Line ,RiContactsFill,RiMessage2Fill} from "react-icons/ri";
const Contact = () => {
    return (
        <>
            <div className="container bg-light py-5 text-dark mt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Title><RiContactsFill/> Contact Us</Title>
                        <p className="text-muted">There is my contact . I am open to respond you .</p>
                        <ul className="list-unstyled mt-3">
                            <li className="py-2"><span className="ml-2"><RiMapPin2Line/> Casblanca , Maarif</span></li>
                            <li className="py-2"><span className="ml-2"><a href='tel:0622039291'><RiPhoneFill/> 06 2203-9291</a></span></li>
                            <li className="py-2"><span className="ml-2"><a href='mailto:yousseffatih99@gmail.com'><RiMailLine/> yousseffatih99@gmail.com</a></span></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Title><RiMessage2Fill/> Send a Message</Title>
                        <form>
                            <div className="form-group mb-2">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group mb-2">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact;