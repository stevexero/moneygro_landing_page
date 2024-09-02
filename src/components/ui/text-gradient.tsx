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
      className='bg-[radial-gradient(circle_farthest-side_at_0_100%,#a259ff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ff61c0,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff88ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#b660ff,#141316)] bg-clip-text text-transparent
'
    >
      {children}
    </motion.span>
  );
};

export default TextGradient;
