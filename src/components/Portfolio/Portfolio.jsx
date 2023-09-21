import React from 'react';
import styles from './Portfolio.module.css';
import cardData from '../../cardData';
import Cards from './Cards/Cards';
import Reveal from '../Reveal/Reveal';

const Portfolio = () => {
  return (
   <section id='portfolio' className={styles.Portfolio}>
    <Reveal>
    <div className="container">
        <div className={styles.tittle}>
            <h2>
                Selected <span>Works</span>
            </h2>
            <hr />
        </div>
        <ul className={styles.cards}>
            <ul >
                {cardData.map((item) => (
                     <Cards 
                     key={item.id}
                     image={item.img}
                     tittle={item.title}
                     />
                ))}
               
            </ul>
        </ul>
    </div>
    </Reveal>
   </section>
  )
}

export default Portfolio