import BlogCard from "../../components/blogCard/BlogCard";
import blogData from "../../data/BlogData";

const Blog = () => {

    return (  
        <section className="blog">
            {blogData.map((singleItem) => (
                <BlogCard singleItem={singleItem} />
            ))}
        </section>
    );
}

export default Blog;