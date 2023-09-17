import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import SkillBar from './SkillBar/SkillBar';
import Reveal from '../Reveal/Reveal';

const skillsData =[
    {
        label:'JavaScript',
        percentage: 60,
        style: `${styles['progress-line']} ${styles.js}`
    },
    {
        label:'React',
        percentage: 40,
        style: `${styles['progress-line']} ${styles.react}`
    },
    {
        label:'Next.js',
        percentage: 30,
        style: `${styles['progress-line']} ${styles.next}`
    },
    {
        label:'TypeScript',
        percentage: 35,
        style: `${styles['progress-line']} ${styles.ts}`
    }
]

const Skills = () => {
    const [isIntersected, setIsIntersected] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const options ={
            rootMargin:'0px',
            threshold: 0.15,
        };
        const handleIntersection =(entries, observer) => {
            const [entry] = entries;
            if (entry.isIntersecting){
                setIsIntersected(true);
                observer.unobserve(entry.target);
            }
        }
        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(sectionRef.current);

        return () =>{
            observer.disconnect();
        }
    }, [])
  return (
    <section id='skills' className={styles.skills} ref={sectionRef}>
        <Reveal>
        <div className="container">
            <div className={styles.tittle}>
                <h2>
                    <span>My</span> Skills
                </h2>
                <hr />
            </div>
            <div className={`grid ${styles['skills-grid']}`}>
                <div className={styles.content}>
                    <h1>
                        In <span>Designing</span> <br />
                        And <span>Developing</span>
                    </h1>
                    <p>
                        Every day is a new challenge, and I'm 
                        trying to gain more knowledge and 
                        expirience. Learning new 
                        technologies has always been 
                        interesting to me. As technology is 
                        evolving so fast, I try to keep myself 
                        up to date.
                    </p>
                </div>
                <div className={styles['skills-bar']}>
                    {skillsData.map(skill => (
                        <SkillBar
                        key={skill.label}
                        label={skill.label}
                        percentage={skill.percentage}
                        style= {isIntersected ? skill.style : ''}
                        />
                    ))}
                </div>
            </div>
            
        </div>
        <div className={styles.bottom}>
            <div className={`${styles.flex} container`}>
                <div>
                    <h3>I'M available for work</h3>
                </div>
                <div>
                    <a href="#contact">Contact Me</a>
                </div>

            </div>
        </div>
        </Reveal>
    </section>
  )
}

export default Skills