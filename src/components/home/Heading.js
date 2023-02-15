import {motion} from "framer-motion"
import index from "./index.css";
import React from "react";

const Heading = () => {
    return(
        <motion.div className="heading" animate={{x:90}} transition={{duration:1.5}}>
            <span>EXPRESS YOURSELF THROUGH ART</span>
        </motion.div>
    );
}
export default Heading;