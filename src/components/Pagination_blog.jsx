import React, { useEffect, useState } from 'react';
import blogData from '../utils/get_blog_data'
import style from '../styles/pagination_blog.module.css'
import dateIcon from '../assets/gallery/icons/blog_post_home_page/date_icon.png'
import chatIcon from '../assets/gallery/icons/blog_post_home_page/Chat.png'
import userIcon from '../assets/gallery/icons/blog_post_home_page/UserCirclePlus_icon.png'
import arrow from '../assets/gallery/icons/blog_post_home_page/ArrowLineUpRight.png'
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';


const BlogPagination = () => {
    const [post, setPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [countElement] = useState(4)
    const lastPostIndex = currentPage * countElement
    const firstPostIndex = lastPostIndex - countElement
    const currentPost = post.slice(firstPostIndex, lastPostIndex)
    const countPoint = Math.ceil(post.length / countElement)
    console.log(post);
    console.log(currentPost);
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                setPost(blogData)
                console.log(blogData);

            } catch (error) {
                console.error(error)
            }
        }
        fetchPostData()
    }, [])
    return (
        <div>
            {currentPost.map((item) => {
                console.log(item);
                return <div className={style.post_container}>
                <img className={style.main_img} src={item.image} alt="dishes" />
                <div className={style.date}>
                    <img src={dateIcon} alt="date" />
                    <p>Feb 14, 2022 / </p>
                    <img src={chatIcon} alt="chat" />
                    <p>3 /</p>
                    <img src={userIcon} alt="user" />
                    <p>Admin</p>
                </div>
                <h3>{item.title}</h3>
                <div className={style.line}></div>
                <p className={style.description}>{item.description}</p>
                <Link className={style.link}>Read More <img src={arrow} alt="arrow" /></Link>
            </div>
            })}
            <Pagination style={{display:"flex", alignItems:"center", justifyContent:"center"}} color='warning' size="large" variant="outlined" shape="rounded" count={countPoint} page={currentPage} siblingCount={4} onChange={(_, num) => setCurrentPage(num)}/>
        </div>
    );
}

export default BlogPagination;