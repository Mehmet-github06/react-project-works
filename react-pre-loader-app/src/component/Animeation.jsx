import { motion } from "framer-motion";

const Animation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
     Merhaba Code Severler
    </motion.div>
  );
};

export default Animation;
