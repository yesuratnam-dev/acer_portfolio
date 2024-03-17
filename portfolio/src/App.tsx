import React from 'react';

import './App.css';

import AboutMe from './components/AboutMe.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Home from './components/Home.tsx';
import { Route, Link, Routes } from 'react-router-dom';


const App: React.FC = () => {
 return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Portfolio</title>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <body>
                
            <header className="header">
          <Link to="/" className="logo">Yesuratnam Kunchala</Link>
          <nav className="navbar">
            <Link to="/home" style={{ '--i': 1 } as any} className="active">Home</Link>
            <Link to="/about" style={{ '--i': 2 } as any}>About</Link>
            <Link to="/contact" style={{ '--i': 3 } as any}>Contact</Link>
            <Link to="/projects" style={{ '--i': 4 } as any}>Projects</Link>
          </nav>
        </header>

                <section className="home">
                    <div className="home-content">
                        <h1>Hey there!</h1>
                        <h3>I'm a <span className="multiple-text">Data Engineer</span></h3>
                        <p>I'm a data wrangler turned DevOps aficionado. Whether I'm diving into data lakes or wrangling servers, I'm all about keeping things flowing smoothly. Let's team up and bring some tech magic to the table!</p>
                        <div className="social-media">
                            <a href="#" style={{ '--i': 5 } as any}><i className='bx bxl-linkedin-square' style={{ color: '#ffffff' }} ></i></a>
                            <a href="#" style={{ '--i': 6 } as any}><i className='bx bxl-twitter' style={{ color: '#ffffff' }} ></i></a>
                            <a href="#" style={{ '--i': 7 } as any}><i className='bx bxl-github' style={{ color: '#ffffff' }} ></i></a>
                            <a href="#" style={{ '--i': 8 } as any}><i className='bx bxl-gmail' style={{ color: '#ffffff' }} ></i></a>

                        </div>
                        <a href="https://github.com/yesuratnam-dev/portfolio" className="btn">Download Resume</a>
                    </div>

                    <div className="home-image">
                        <img src="./" alt="" />
                    </div>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </section>
            </body>
           
        </html>
    );
}

export default App;

