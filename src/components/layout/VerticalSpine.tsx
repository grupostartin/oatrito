import { motion, useScroll, useTransform } from "framer-motion";

export const VerticalSpine = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-8 lg:right-[80px] top-0 bottom-0 w-[4px] z-50 pointer-events-none">
      <motion.div 
        className="w-full bg-brand-primary"
        style={{ height }}
      />
    </div>
  );
};
