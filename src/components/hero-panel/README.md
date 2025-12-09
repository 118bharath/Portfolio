# HeroRightPanel Component

A production-ready React component that implements the right-side animated panel for the hero section. It features a monochrome character animation and a dynamic skills list that updates via events or props.

## Features
- **Character Animation**: Uses Lottie for smooth, vector-based motion.
- **Dynamic Skills**: Updates skill list with smooth GSAP transitions (cross-fade + slide).
- **Dual Interface**: Supports both event-driven (`window.dispatchEvent`) and prop-driven (`activeProjectSkills`) updates.
- **Responsive**: Adapts to container width (designed for ~42% desktop width).
- **Dark Mode**: Fully compatible with dark mode themes.

## Installation

Ensure you have the required dependencies:

```bash
npm install lottie-react gsap @gsap/react
```

## Usage

### 1. Import the Component

```jsx
import HeroRightPanel from './components/hero-panel/HeroRightPanel';
```

### 2. Prop-Driven Update (Preferred for React)

Pass the active skills array directly as a prop.

```jsx
const MyHero = () => {
  const currentSkills = ["React", "Next.js", "TypeScript"];

  return (
    <div className="hero-container">
      {/* ... Left content ... */}
      <div className="hero-right">
        <HeroRightPanel activeProjectSkills={currentSkills} />
      </div>
    </div>
  );
};
```

### 3. Event-Driven Update (For decoupled systems)

Dispatch a custom `project-change` event from anywhere in the app.

```javascript
window.dispatchEvent(new CustomEvent('project-change', {
  detail: {
    index: 1,
    skills: ["Node.js", "Express", "MongoDB"]
  }
}));
```

## Assets

- **Lottie Animation**: Fetched from `https://lottie.host/56e656a6-297d-4600-8160-3d8084390351/2r5a6q6XyF.json`.
- **Fallback**: Displays a loading placeholder if the animation fails to load.

## Testing

You can use the included `example-skill-updates.js` script to simulate skill updates. Copy the content of the file and paste it into your browser's developer console while the component is mounted.
