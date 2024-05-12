import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitlePageBanner from '../components/Title_page_banner';
import pageTitleArr from '../utils/page_banner';
import style from '../styles/blogPage.module.css'
import BlogPagination from '../components/Pagination_blog';
import BlogAsideContainer from '../components/Blog_aside_container';

const Blog = () => {
    const [{ blogList }] = pageTitleArr
    return (
        <div>
            <Header/>
            <TitlePageBanner pageTitle={blogList}/>
            <div className={style.main_blog_container}>
                <div className={style.posts}>
                    <BlogPagination/>
                </div>
                <div className={style.aside}>
                    <BlogAsideContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
