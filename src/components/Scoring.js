import HomeIcon from "../images/Scoring.png"
import { motion } from "framer-motion"

export default function Scoring() {

    return (
        <div>
            <h1 className="text-center font-bold text-2xl p-5">Scoring</h1>

            <motion.div
                animate={{ y: 100 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="flex justify-center items-center"
            >
            
            
            

            <img src={HomeIcon} alt="" style={{width: '100%'}}/>
           
            </motion.div>
     

        </div>
    )
}