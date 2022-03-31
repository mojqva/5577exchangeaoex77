import BlogNews from '../components/BlogNews/BlogNews';
import s from './blog.module.css'

const BlogPage = () => {
    return (
        <div className={s.static}>
            <div className={s.inner}>
                <h1 className={s.h1News}>Блог</h1>
                <BlogNews/>
                <BlogNews/>
                <BlogNews/>
                <BlogNews/>
            </div>
        </div>
    );
};

export default BlogPage;