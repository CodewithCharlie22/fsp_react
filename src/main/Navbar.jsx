import React from 'react'

export default function Navbar() {

    return (
        <>
            <header id="header">
                <nav>
                    <div className="logo">
                        <img src="images/icon/logo.png" alt="logo" />
                    </div>
                    <ul>
                        <li>
                            <a className="active" href="">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio_section">Portfolio</a>
                        </li>
                        <li>
                            <a href="#team_section">Team</a>
                        </li>
                        <li>
                            <a href="#services_section">Services</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Contact</a>
                        </li>
                    </ul>
                    <div className="srch">
                        <input type="text" className="search" placeholder="Search here..." />
                        <img src="images/icon/search.png" alt="search" onclick="slide()" />
                    </div>
                    <a className="get-started" href="login.html">
                        Get Started
                    </a>
                    <img
                        src="images/icon/menu.png"
                        className="menu"
                        onclick="sideMenu(0)"
                        alt="menu"
                    />
                </nav>
                <div className="head-container">
                    <div className="quote">
                        <p>
                            The beautiful thing about learning is that nobody can take it away from
                            you
                        </p>
                        <h3>
                            Learn Continually. There's always "one more thing" to learn. -Steve Jobs
                        </h3>
                    </div>
                    <div className="svg-image">
                        <img src="images/extra/svg1.jpg" alt="svg" />
                    </div>
                </div>
                <div className="side-menu" id="side-menu">
                    <div className="close" onclick="sideMenu(1)">
                        <img src="images/icon/close.png" alt="" />
                    </div>
                    <div className="user">
                        <img src="images/creatzor/roshan.jpeg" alt="Username" />
                        <p>Geek Smart Learning</p>
                    </div>
                    <ul>
                        <li>
                            <a href="#about_section">About</a>
                        </li>
                        <li>
                            <a href="#portfolio_section">Portfolio</a>
                        </li>
                        <li>
                            <a href="#team_section">Team</a>
                        </li>
                        <li>
                            <a href="#services_section">Services</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Contact</a>
                        </li>
                        <li>
                            <a href="#feedBACK">Feedback</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
