import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1>Explore a Better Shopping Experience with us.</h1>
            <p>Redefining commerce for everyone with curated collections that blend quality and innovation. Join us for a personalized shopping experience.</p>
            <Link to="/product">
                <span>Check out our products</span>
            </Link>
        </div>
    )
};

export default Home;