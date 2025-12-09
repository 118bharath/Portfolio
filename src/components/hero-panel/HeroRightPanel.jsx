import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroRightPanel.css';

// Fallback animation data (Developer using laptop)
// Source: Public LottieFiles URL (simulated for this standalone component)
const DEFAULT_LOTTIE_URL = "https://assets9.lottiefiles.com/packages/lf20_M9p23l.json";

const HeroRightPanel = ({ activeProjectSkills }) => {
    const [skills, setSkills] = useState([]);
    const [animationData, setAnimationData] = useState(null);
    const skillsRef = useRef(null);
    const containerRef = useRef(null);

    // Fetch Lottie Data
    useEffect(() => {
        fetch(DEFAULT_LOTTIE_URL)
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Failed to load Lottie:", err));
    }, []);

    // Handle Event-Driven Updates
    useEffect(() => {
        const handleProjectChange = (event) => {
            if (event.detail && event.detail.skills) {
                updateSkills(event.detail.skills);
            }
        };

        window.addEventListener('project-change', handleProjectChange);
        return () => window.removeEventListener('project-change', handleProjectChange);
    }, []);

    // Handle Prop-Driven Updates
    useEffect(() => {
        if (activeProjectSkills && activeProjectSkills.length > 0) {
            updateSkills(activeProjectSkills);
        }
    }, [activeProjectSkills]);

    const updateSkills = (newSkills) => {
        // Animate out
        if (skills.length > 0) {
            gsap.to(".skill-item", {
                opacity: 0,
                y: -10,
                duration: 0.3,
                stagger: 0.05,
                onComplete: () => {
                    setSkills(newSkills);
                }
            });
        } else {
            setSkills(newSkills);
        }
    };

    // Animate in when skills change
    useGSAP(() => {
        if (skills.length > 0) {
            gsap.fromTo(".skill-item",
                { opacity: 0, y: 12 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                    stagger: 0.06,
                    ease: "power2.out"
                }
            );
        }
    }, [skills]);

    return (
        <div className="hero-right-panel" ref={containerRef}>
            <div className="panel-content">

                {/* Skills List (Light Side)
                <div className="skills-container">
                    <ul className="skills-list" aria-live="polite">
                        {skills.map((skill, index) => (
                            <li key={`${skill}-${index}`} className="skill-item">
                                <span className="skill-bullet"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Character Animation (Right Side) */}
                <div
                    className="character-container"
                    role="img"
                    aria-label="Monochrome character using laptop"
                >
                    <div className="character-wrapper">
                        {animationData ? (
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                style={{ width: '100%', height: '100%' }}
                            />
                        ) : (
                            // Fallback Static
                            <div className="w-full h-full bg-gray-100 dark:bg-[#111111] flex items-center justify-center rounded-full">
                                <span className="text-gray-400 text-sm">Loading...</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroRightPanel;
