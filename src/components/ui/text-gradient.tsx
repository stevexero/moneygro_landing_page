import React from 'react';
import { motion } from 'framer-motion';

const TextGradient = ({ children }: { children: string }) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
    },
  };

  return (
    <motion.span
      variants={variants}
      initial='initial'
      animate='animate'
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      style={{
        backgroundSize: '400% 400%',
      }}
      className='bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] bg-clip-text text-transparent'
    >
      {children}
    </motion.span>
  );
};

export default TextGradient;
