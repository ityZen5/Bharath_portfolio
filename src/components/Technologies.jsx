import { DiJava } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiGit, SiJavascript, SiMongodb, SiMysql } from "react-icons/si"
import {animate, motion, transform} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate:{
        y: [10,-10],
        transition: {
            duration: duration, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
            whileInView={{opacity: 1, y:0 }}
            initial={{opacity:0, y:-100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Technologies
            </motion.h2>
        <motion.div
            whileInView={{opacity: 1, y:0 }}
            initial={{opacity:0, y:-100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <SiExpress className="text-7xl text-white-500"/>
                </div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <SiJavascript className="text-7xl text-yellow-500"/>
                </div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <RiNextjsFill className="text-7xl text-white-500"/>
                </div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <SiMysql className="text-7xl text-blue-500"/>
                </div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <SiGit className="text-7xl text-orange-500"/>
                </div>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <DiJava className="text-7xl text-red-500"/>
                </div>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <div className="p-4">
                    <RiTailwindCssFill className="text-7xl text-blue-500"/>
                </div>
            </motion.div>

            
        </motion.div>
    </div>
  )
}

export default Technologies