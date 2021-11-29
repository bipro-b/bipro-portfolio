import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="my-5" style={{ color: 'white' }}>
            <h3 className="mb-5">Copyright © 2021 | bipro</h3>

            <div className="font">
                <a href="https://github.com/bipro-b" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bipro-barai-419381179/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UChekLTEIdsGpPY3JnC38Udw/featured" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>
                <a href="https://web.facebook.com/bipro.barai.5036" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
    );
};

export default Footer;