import emailjs from "emailjs-com";
import React from 'react';
import Header from './Header';
import './Contact.css';

import Footer from './Footer';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('Gmail', 'Message-template', e.target, 'user_8cJafEOxlXs7rNSojphiw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <Header />
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info mx-auto" style={{ width: '50%' }} value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;