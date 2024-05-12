import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitlePageBanner from '../components/Title_page_banner';
import pageTitleArr from '../utils/page_banner'
import teams from '../utils/get_chef_data'
import style from '../styles/chefPage.module.css'

const Chef = () => {
    const [{ ourChef }] = pageTitleArr
    return (
        <div>
            <Header />
            <TitlePageBanner pageTitle={ourChef} />
            <div style={{ width: "100%", backgroundColor: "#fff" }}>
                <div className={style.chefs}>
                    {teams.map((chef) => {
                        return (
                            <div className={style.chef_card}>
                                <img src={chef.photo} alt="" />
                                <h3>{chef.name}</h3>
                                <h4>{chef.jobTitle}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Chef;
