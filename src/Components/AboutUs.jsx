// Mike - Update your AboutUs.jsx file with the following JSX code

import { useState } from 'react';
import "./AboutUs.css";
import AbrahamZambranoTablante from "../assets/AbrahamZambranoTablante.png";
import MichaelDantzler from "../assets/MichaelDantzler.png";
import NikiKhanam from "../assets/NikiKhanam.jpg";
import StevenRouse from "../assets/StevenRouse.png";

export default function AboutUs() {
    const [expanded, setExpanded] = useState('');
    const [activeMember, setActiveMember] = useState('');

    const handleExpand = (name) => {
        setExpanded(expanded === name ? '' : name);
    };

    const handleSetActiveMember = (name) => {
        setActiveMember(name);
    };

    return (
        <div>

            <div className="team-list-container">
            <h1 className="about-us">
                About Us</h1>
            <h2 className="h20">
                Papyrus empowers individuals to effortlessly capture, organize, and access their thoughts, ideas, and inspirations anytime, anywhere. Papyrus/Scriptura/Ostraca is dedicated to enhancing productivity, fostering creativity, and facilitating seamless collaboration in a digital age.
            </h2>
                <h2 className="meet-team">Meet Our Team</h2>
                <div className="team-list">
                    <ul>
                        <li>
                            <div className={`member ${expanded === 'MichaelDantzler' ? "expanded" : ""}`} onMouseEnter={() => handleExpand('MichaelDantzler')} onMouseLeave={() => handleExpand('')}>
                                <img src={MichaelDantzler} alt="Michael Dantzler" />
                                <p className={activeMember === 'MichaelDantzler' ? "active" : ""} onClick={() => handleSetActiveMember('MichaelDantzler')}>{expanded === 'MichaelDantzler' && (
                                    "I am a husband, and father to 5 beautiful children (Elijah, Nyla, Zoey, Brandon and Raine). I have worked in the title insurance industry for the past 20 years. I am a title specialist, with a keen eye for detail. With my ability to pay attention to the most minuscule details, it has given me the unique position to excel in my industry. I have taken this unique ability, and decided to apply it to software development. I’ve generated so much success in spotting deficiencies, that my cohort coaches and fellows have given me the nickname “Hawkeye”. Like the Avenger, with the same name, I consider myself to be a regular person, with an exceptional eye for detail."
                                )}</p>
                                <p onClick={() => handleSetActiveMember('MichaelDantzler')}>Michael Dantzler</p>
                            </div>
                        </li>
                        <li>
                            <div className={`member ${expanded === 'NikiKhanam' ? "expanded" : ""}`} onMouseEnter={() => handleExpand('NikiKhanam')} onMouseLeave={() => handleExpand('')}>
                                <img src={NikiKhanam} alt="Niki Khanam" />
                                <p className={activeMember === 'NikiKhanam' ? "active" : ""} onClick={() => handleSetActiveMember('NikiKhanam')}>{expanded === 'NikiKhanam' && (
                                    "I'm a Pursuit fellow with a background in nonprofits who transitioned into software engineering out of a desire to automate tasks. I bring skills in database management, event planning, grant writing, fundraising, and development, all focused on furthering nonprofit missions. I'm passionate about staying relevant and am currently expanding my knowledge in computer science."
                                )}</p>
                                <p onClick={() => handleSetActiveMember('NikiKhanam')}>Niki Khanam</p>
                            </div>
                        </li>
                        <li>
                            <div className={`member ${expanded === 'StevenRouse' ? "expanded" : ""}`} onMouseEnter={() => handleExpand('StevenRouse')} onMouseLeave={() => handleExpand('')}>
                                <img src={StevenRouse} alt="Steven Rouse" />
                                <p className={activeMember === 'StevenRouse' ? "active" : ""} onClick={() => handleSetActiveMember('StevenRouse')}>{expanded === 'StevenRouse' && (
                                    "I have been a self-taught software engineer for the last four years now. With a background in Audio-visual programming and project management, I love learning new cutting edge technology and applying it to a consumer-focused application."
                                )}</p>
                                <p onClick={() => handleSetActiveMember('StevenRouse')}>Steven Rouse</p>
                            </div>
                        </li>
                        <li>
                            <div className={`member ${expanded === 'AbrahamZambranoTablante' ? "expanded" : ""}`} onMouseEnter={() => handleExpand('AbrahamZambranoTablante')} onMouseLeave={() => handleExpand('')}>
                                <img src={AbrahamZambranoTablante} alt="Abraham Zambrano Tablante" />
                                <p className={activeMember === 'AbrahamZambranoTablante' ? "active" : ""} onClick={() => handleSetActiveMember('AbrahamZambranoTablante')}>{expanded === 'AbrahamZambranoTablante' && (
                                    "In my academic pursuits in Informatic Engineering, I'm fueled by an insatiable curiosity for technology. Thriving in the realm of algorithms, coding challenges, and problem-solving, I've gained proficiency in software development, database management, and system analysis."
                                )}</p>
                                <p onClick={() => handleSetActiveMember('AbrahamZambranoTablante')}>Abraham Zambrano Tablante</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
