import React from "react";

import { motion } from "framer-motion";

function Charger() {
  return (
    <motion.div
      className="charger"
      initial={{ width: "0%", opacity: 1 }}
      animate={{
        width: "100%",
        transitionEnd: { opacity: 0, delay: 0.5 },
      }}
      exit={{ widht: "0%" }}
      transition={{ duration: 1 }}
    />
  );
}

export default Charger;
