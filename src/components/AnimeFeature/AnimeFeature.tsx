import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

export const AnimeFeature = ({children, delay, duration=0.5}: Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });

  const variants = {
		hidden: { opacity: 0, x: 100,},
		visible: {opacity: 1, x: 0,}
	};

    return(
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{delay, duration}}
            >
            {children}
        </motion.div>
    );
}