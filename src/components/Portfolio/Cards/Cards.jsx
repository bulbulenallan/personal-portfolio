import React from 'react';
import styles from './Cards.module.css';
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const Cards = ({image, tittle}) => {
  return (
    <li>
        <div className={styles.card}>
            <img src={image} alt="" />
            <div className={styles['card-overlay']}>
                <div className={styles['card-header']}>
                    <IoIosArrowDroprightCircle size={45} className={styles['card-icon']} />
                    <div className={styles['card-content']}>
                        <h3 className={styles['card-tittle']}>{tittle}</h3>
                        <a href="/#">Demo</a>
                    </div>
                </div>
                <p className={styles['card-description']}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui atque vero natus nostrum culpa non numquam iure et, perspiciatis deserunt!
            
                </p>
            </div>
        </div>
    </li>
  )
}

export default Cards