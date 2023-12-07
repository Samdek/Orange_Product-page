import { Link } from "react-router-dom";

function About() {
    return ( 
        <div className="about-page-container">
            <div className="shopping_image"></div>
            <div className="about-page-content">
                <h1>Discover Our Story: Crafting E-Commerce Excellence</h1>
                <p>We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.</p>
                <p>The all-in-one commerce platform to start, run, and grow a business.</p>
                <div className="about-page-cta">
                    <Link className="link-button" to="/product">Explore now</Link>
                </div>
            </div>     
        </div>
     );
}

export default About;