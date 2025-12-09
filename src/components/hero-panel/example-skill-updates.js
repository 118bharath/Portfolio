// example-skill-updates.js
// Run this script in the browser console or import it to test the event-driven updates.

const sampleSkills = [
    ["React", "Tailwind", "Framer Motion"],
    ["Node.js", "Express", "MongoDB"],
    ["Python", "Django", "PostgreSQL"],
    ["Figma", "Adobe XD", "Sketch"],
    ["Docker", "Kubernetes", "AWS"]
];

let currentIndex = 0;

function dispatchSkillUpdate() {
    const skills = sampleSkills[currentIndex];

    console.log(`Dispatching project-change event with skills: ${skills.join(", ")}`);

    window.dispatchEvent(new CustomEvent('project-change', {
        detail: {
            index: currentIndex,
            skills: skills
        }
    }));

    currentIndex = (currentIndex + 1) % sampleSkills.length;
}

// Start the loop
console.log("Starting skill update simulation...");
const intervalId = setInterval(dispatchSkillUpdate, 3000);

// To stop: clearInterval(intervalId);
