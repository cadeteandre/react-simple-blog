import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <section className="home">
            <h1>Welcome to my simple Blog</h1>
            <Link to={'/blog'}>Go to articles</Link>
        </section>
    );
}

export default Home;