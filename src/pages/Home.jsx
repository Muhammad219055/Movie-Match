import React from "react";
import { motion } from "framer-motion";
import LogoSearchBar from "../components/LogoSearchBar";
const Home = () => {
  return (
    <motion.div
    
    className="page-wrapper"
    >
        <LogoSearchBar/>
    </motion.div>
  );
};

export default Home;
