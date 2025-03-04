import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlyingRocketProps {
  index: number;
}

// Component for the flying rockets
export const FlyingRocket = ({ index }: FlyingRocketProps) => {
  // Generate random horizontal position across the viewport
  const x = Math.random() * 90 + 5; // Random position between 5-95% of viewport width
  
  // Start from bottom, animate to top
  const startY = 90 + Math.random() * 20; // Start below the viewport (90-110%)
  const endY = -10 - Math.random() * 20; // End above the viewport (-10 to -30%)
  
  // Generate random values for this rocket
  const duration = 10 + Math.random() * 15; // Random duration between 10-25s
  const delay = Math.random() * 10; // Random delay between 0-10s
  const size = 0.7 + (Math.random() * 0.6); // Random size between 0.7-1.3
  
  return (
    <motion.div
      className="absolute text-3xl pointer-events-none z-10"
      initial={{ 
        x: `${x}vw`, 
        y: `${startY}vh`, 
        scale: size,
        opacity: 0,
      }}
      animate={{ 
        y: `${endY}vh`,
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <span style={{ display: "inline-block", transform: "rotate(-45deg)" }}>🚀</span>
    </motion.div>
  );
};

interface FlyingRocketsProps {
  count?: number;
  fixedCount?: number; // This is kept for backward compatibility but not used
}

export const FlyingRockets = ({ count = 8 }: FlyingRocketsProps) => {
  const [rockets, setRockets] = useState<number[]>([]);
  
  useEffect(() => {
    // Create rockets flying from bottom to top
    setRockets(Array.from({ length: count }, (_, i) => i));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rockets flying from bottom to top */}
      {rockets.map((index) => (
        <FlyingRocket key={`rocket-${index}`} index={index} />
      ))}
    </div>
  );
}; 