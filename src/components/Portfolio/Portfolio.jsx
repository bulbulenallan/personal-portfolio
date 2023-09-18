import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
   <section id='portfolio' className={styles.Portfolio}>
    <div className="container">
        <div className={styles.tittle}>
            <h2>
                Selected <span>Works</span>
            </h2>
            <hr />
        </div>
        <ul className={styles.cards}>
            <li ></li>
        </ul>
    </div>
   </section>
  )
}

export default Portfolio