import { motion } from "framer-motion";
import Box from "@mui/material/Box";

const MotionBox = motion(Box);

export default function AnimatedText(props: { text: string }) {

    const { text } = props;

    const splitWords = text.split('');

    const wordVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    }

    return (

        <MotionBox variants={wordVariants} initial={"hidden"} animate={'show'}>

            {splitWords.map((letter, index) => (

                <motion.span variants={letterVariants} key={`${index}_${letter}_motion`}>
                    {letter}
                </motion.span>

            ))}

        </MotionBox>

    )


}