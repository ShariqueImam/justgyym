import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0, y: -300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // duration: 0.1,
      type: "spring",
      stiffness: 80,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
  },
};

const Animator = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      // className="pt-24"
  
    >
      {children}
    </motion.div>
  );
};

export default Animator;
