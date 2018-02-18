import React from 'react';

const Footer = () => {
    return (<footer>
        <h2 className="sub-header">Contact Me</h2>
        <hr />
        <div className="center-aligned">
            <ul className="list-unstyled">
                <li>
                    <a href="https://www.linkedin.com/in/ashley-yang-a0a7b2116/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square fa-2x fa-inverse label-icon" />
                        https://www.linkedin.com/in/ashley-yang-a0a7b2116/
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ashleyyang0610" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github fa-2x fa-inverse label-icon" />
                        https://github.com/ashleyyang0610
                    </a>
                </li>
                <li>
                    <a href="mailto:ashley.yang0610@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope-square fa-2x fa-inverse label-icon" />
                        ashley.yang0610@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    </footer>);
};

export default Footer;
