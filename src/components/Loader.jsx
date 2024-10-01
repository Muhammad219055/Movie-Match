import React from "react";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    /* From Uiverse.io by Li-Deheng */
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="loader"
    >
      <div className="circle">
        <div className="dot"></div>
        <div className="outline"></div>
      </div>
      <div className="circle">
        <div className="dot"></div>
        <div className="outline"></div>
      </div>
      <div className="circle">
        <div className="dot"></div>
        <div className="outline"></div>
      </div>
      <div className="circle">
        <div className="dot"></div>
        <div className="outline"></div>
      </div>
    </motion.div>
  );
};

export default Loader;
