import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { LampContainer } from '../ui/lamp';
import { Highlight } from '../ui/hero-highlight';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import mgDash from '@/assets/mgdash.png';
import singleEntry from '@/assets/singleEntry.png';
import plaid from '@/assets/plaid.png';
import customJar from '@/assets/customJar.png';
import ai from '@/assets/ai.png';
import chart from '@/assets/chart.png';
import { HoverEffect } from '../ui/card-hover-effect';

const content = [
  {
    title: 'Single Entry Allocations',
    description:
      'Easily allocate your income across various categories with a single entry. This feature simplifies the budgeting process, allowing you to quickly distribute your funds according to your financial plan.',
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src={singleEntry}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Automated Bank Integration (Coming Soon!)',
    description:
      'Integrate your bank accounts directly with MoneyG.ro and Plaid, enabling automatic updates of income and expenses. This feature ensures that your financial data is always up-to-date without manual entry.',
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src={plaid}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Customizable Jars and Deductions',
    description:
      'Customize your money categories and add pre-distribution deductions based on your unique financial needs. This flexibility allows you to tailor your budgeting system to fit your lifestyle.',
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src={customJar}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'AI Assistance (Coming Soon!)',
    description:
      'Utilize a virtual financial coach powered by AI to provide personalized advice, tips, and insights based on your financial habits and goals. This feature helps you make informed decisions and stay on track with your financial plans.',
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src={ai}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Net Worth Tracking (Coming Soon!)',
    description:
      'Track your net worth over time by aggregating all your assets and liabilities. This feature provides a clear picture of your financial health and progress toward long-term goals.',
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src={chart}
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
];

export const features = [
  {
    title: 'Smart Registers',
    description:
      'Manage all of your registers individually or as a single main register.',
  },
  {
    title: 'Syncing',
    description: 'Share all real-time information amongst your group',
  },
  {
    title: 'Challenges / Goals and Milestones',
    description: 'Gamify your money habits by setting and acheiving goals.',
  },
  {
    title: 'Insights / Health Reports',
    description: 'Track and view your budget habits.',
  },
  {
    title: 'Rebalance',
    description: 'Implement new budget habits based on past habits.',
  },
  {
    title: 'Social Accountability',
    description: 'Share your progress and inspire others.',
  },
  {
    title: 'Forecasting',
    description: 'Project future finances.',
  },
  {
    title: 'Widgets',
    description: 'Customize your dashboard',
  },
  {
    title: 'Net Worth Tracking',
    description: 'Track your network.',
  },
];

const Features = () => {
  return (
    <section className='bg-neutral-950'>
      <div className='flex flex-col overflow-hidden'>
        <ContainerScroll titleComponent={<></>}>
          <Image
            src={mgDash}
            alt='hero'
            height={720}
            width={1400}
            className='mx-auto rounded-2xl object-cover h-full object-top'
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div id='features'>
        <LampContainer className='-mt-72'>
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
          >
            A <Highlight className='text-white'>Smarter</Highlight> Set of{' '}
            <br />
            Budgeting <Highlight className='text-white'>Tools</Highlight>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className='text-neutral-200 max-w-md mx-auto my-16 text-center relative z-10 px-8 sm:px-0'
          >
            MoneyG.ro comes with a library of easy-to-use tools to keep you (and
            your family) on the right track.
          </motion.p>
        </LampContainer>
      </div>
      <div className='px-10 sm:px-40'>
        <StickyScroll content={content} />
      </div>
      <div className='max-w-5xl mx-auto px-8 -mt-8 sm:mt-32'>
        <HoverEffect items={features} />
      </div>
    </section>
  );
};

export default Features;
