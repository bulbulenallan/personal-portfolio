import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.about}>
        <div className="container">
            <div className={styles.title}>
                <h2>
                    About <span>Me</span>
                </h2>
                <hr />
            </div>
            <div className="grid">
                <div className={styles['about-img']}>
                    <img src="./images/ak.jpg" alt="Allan Kipchumba" />
                </div>
                <div className={styles['about-content']}>

                    <h3 className={styles.border}>
                        Hi There!
                    </h3>
                    <p>
                        I'm <span className={styles.name}>Bulbulen</span>. A web developer, and I'm very passionate
                        and dedicated to my work. i have acquired the skills 
                        and knowledge necessary to make your project a sucess.
                        I enjoy every step of the design process, from 
                        discusion and colaboration. 
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About