import Charger from "./atoms/Charger";
import { motion } from "framer-motion";

function PageCharger({ children }) {
  return (
    <>
      <Charger />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.75, duration: 0.5, delayChildren: 0.25 }}
      >
        {children}
      </motion.main>
    </>
  );
}

export default PageCharger;
