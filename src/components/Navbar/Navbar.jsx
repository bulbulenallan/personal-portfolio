import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import NavbarLinks from './NavbarLinks'

const navLinks = [
    {id:"home",label:"Home"},
    {id:"about",label:"About"},
    {id:"portfolio",label:"Portfolio"},
    {id:"testimonials",label:"Testimonials"},
    {id:"contact",label:"Contact"},

];

const Navbar = () => {
//defining the width of the browser
    const [windowWidth, setWindowWidth]=useState(window.innerWidth);
//defining links to be shown under the toggle menu
    const [showLinks, setShowLinks] = useState(false);
//defining the croll effect in order to add shaddow effects 
    const [isScrolled, setIsScrolled] = useState(false);
    //settting the active section link to be highlited
    const [activeSection, setActiveSection] = useState('');
    
     // Add a resize event listener when the component mounts
    useEffect(() => {
     // Event handler to update windowWidth on window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);
    //handling isScroll
    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 0);

        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }


    }, [])
    //handling active section link
    useEffect(() => {
        const options ={
            root:null,
            rootMargin:'0px',
            threshold:0.4
        }
        const handleIntersect = entries =>{
            entries.forEach(entry =>{
                if (entry.isIntersecting){
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, options);

        const section = document.querySelectorAll('section');

        section.forEach(section =>{
            observer.observe(section);
        })

        return () =>{
            section.forEach(section => {
                observer.unobserve(section);
            })
        }


    }, [])

    const handleSelectionClick = (event) =>{
        event.preventDefault();
        const sectionId = event.target.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section){
            const navbarHeight =document.querySelector("nav").offsetHeight;
            const sectionTop = section.offstTop - navbarHeight;
            window.scrollTo({
                top:sectionTop,
                behavior:'smooth',
            })
        }
    }
    const toggleLinks = () =>{
        setShowLinks(!showLinks);
    }


    return (
        <header className={styles.header}>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <div className="container">
                    <div className={styles['navbar-wrapper']}>
                        <div>
                            <a href="index.html" className={styles.logo}>
                                <img src="./images/logo.jpeg" alt="AKB" />
                                <div className={styles['logo-inner']}>
                                    <span className={styles.top}> Bulbulen Allan Kipchumba</span>
                                    <br />
                                    <span className={styles.bottom}>Web Developer</span>
    
                                </div>
                            </a>
                        </div>
                        <div className={`${styles["navbar-links"]} ${showLinks ? styles.show : ""}`}>
                            <ul>
                                {navLinks.map((link) => (
                                    <NavbarLinks
                                        key={link.id}
                                        href={`#${link.id}`}
                                        label={link.label}
                                        onClick={handleSelectionClick}
                                        active={activeSection === link.id}
                                    />
                                    
                                ))}
                            </ul>
                        </div>
                        {/* showing the menu conditionally */}
                        {windowWidth <= 890 &&(
                            <div className={`${styles["toggle-button"]} ${showLinks ? styles.open : ""}`}
                            onClick={toggleLinks}
                            >
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
        
                            </div>
                        )}
    
                    </div>
                </div>
    
            </nav>
    
        </header>
      )
    }
    

export default Navbar