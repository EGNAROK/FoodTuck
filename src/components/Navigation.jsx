import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/header.module.css'

const Navigation = ({ isOpen }) => {
    return (
        <div className={`${style.header_menu} ${isOpen ? style.open : ''}`}>
            <ul className={style.nav_header}>
                <li>
                    <Link to="/" className={style.nav_link}><span>H</span>ome</Link>
                </li>
                <li>
                    <Link to="/menu" className={style.nav_link}><span>M</span>enu</Link>
                </li>
                <li>
                    <Link to="/blog" className={style.nav_link}><span>B</span>log</Link>
                </li>
                <li>
                    <Link to="/chef" className={style.nav_link}><span>C</span>hef</Link>
                </li>
                <li>
                    <Link to="/about" className={style.nav_link}><span>A</span>bout</Link>
                </li>
                <li>
                    <Link to="/shop" className={style.nav_link}><span>S</span>hop</Link>
                </li>
                <li>
                    <Link to="/contact" className={style.nav_link}><span>C</span>ontact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
