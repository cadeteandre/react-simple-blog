import { Link } from "react-router-dom";
import IBlogData from "../../interfaces/IBlogData";

interface IBlogCardProps {
    singleItem: IBlogData
}

const BlogCard: React.FC<IBlogCardProps> = ({ singleItem }) => {
    return (  
        <article className="blog__card">
            <img src={singleItem.img_url} alt={singleItem.title} />
            <h3>{singleItem.title}</h3>
            <Link to={`/details/${singleItem.id}`}>Read more</Link>
        </article>
    );
}

export default BlogCard;