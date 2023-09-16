import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'

const Home = () => {
    const items =['Designer', 'Freelancer','Developer','ISP'];
    const [currentIndex,setCurrentIndex]= useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentIndex((prevIndex) => (prevIndex +1) % items.length)
        },3000);

        return() => clearInterval(interval);

    },[items])


  return (
    <section id="home">
        <div className="container">
            <div className={styles.home}>
                <div className={styles['home-content']}>
                    <div className={styles['home-title']}>
                        <h2>Hey I'M</h2>
                        <h1>Bulbulen</h1>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>
                            creative <span className={styles.items}>
                                {items[currentIndex]}

                            </span>
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <a href="#projects">View projects</a>
                        </div>
                        <span className={styles.divider}>or</span>
                        <div className={styles.link}>
                            <a href="#about">Read About Me</a>
                        </div>
                    </div>
                    <div className={styles.scroll}>
                        <a href="#about">
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.content}>
                        <img src="./images/akbb.jpg" alt="Bulbulen Allan KIpchumba" />
                        <h2>Bulbulen Allan Kipchumba <br />
                        <span/>Web Developer</h2>
                        <a href="#contact">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Home