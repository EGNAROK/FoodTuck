import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitlePageBanner from '../components/Title_page_banner';
import pageTitleArr from '../utils/page_banner'
import style from '../styles/faqPage.module.css'

const FAQ = () => {
    const [{ faqPage }] = pageTitleArr
    return (
        <div>
            <Header />
            <TitlePageBanner pageTitle={faqPage} />
            <div className={style.main}>
                <h2>Questions Looks Here</h2>
                <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                <div className={style.question_container}>
                    <details>
                        <summary>How we serve food?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </p>
                    </details>
                    <details>
                        <summary>How can we get in touch with you?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </p>
                    </details>
                    <details>
                        <summary>How is our food quality?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </p>
                    </details>
                    <details>
                        <summary>What will be delivered? And When?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </p>
                    </details>
                    <details>
                        <summary>How do we give home delivery?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </p>
                    </details>
                    <details>
                        <summary>Is this restaurant 24 hours open?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </p>
                    </details>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;
