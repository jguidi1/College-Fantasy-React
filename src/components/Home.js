import HomeIcon from "../images/Top 25 Showdown-logos_transparent.png"
import { motion } from "framer-motion"

export default function Home() {

    return (
        <div>
            
            <motion.div
                animate={{ y: 100 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="flex justify-center items-center"
            >
            
            
            

            <img src={HomeIcon} alt="" style={{width: 500}}/>
           
            </motion.div>
     

        </div>
    )
}