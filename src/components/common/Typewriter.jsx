import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

export default function Typewriter({
  text = "",
  speed = 0.04,
  delay = 0.3,
  cursor = true,
  className = "",
}) {
  const count = useMotionValue(0);

  const visibleText = useTransform(count, (latest) =>
    text.slice(0, Math.round(latest))
  );

  useEffect(() => {
    count.set(0);

    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * speed,
      delay,
      ease: "linear",
    });

    return () => controls.stop();
  }, [count, delay, speed, text]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="sr-only">{text}</span>

      <motion.span aria-hidden="true">{visibleText}</motion.span>

      {cursor && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="ml-2 inline-block h-[1.1em] w-[3px] rounded-xs bg-accent"
        />
      )}
    </span>
  );
}