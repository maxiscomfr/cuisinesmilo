import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Image de fond avec micro-parallaxe verticale au défilement
 * (et optionnellement un très lent zoom type Ken Burns).
 */
export function ParallaxImage({
  children,
  className,
  speed = 0.12,
  kenBurns = false,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  kenBurns?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="absolute inset-0">
        {kenBurns ? (
          <KenBurns>{children}</KenBurns>
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
}

function KenBurns({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="h-full w-full"
      animate={{ scale: [1.02, 1.1] }}
      transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
