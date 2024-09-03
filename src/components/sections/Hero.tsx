import { BackgroundBeams } from '../ui/background-beams';
import { FlipWords } from '../ui/flip-words';
import { Button } from '../ui/moving-border';
import TextGradient from '../ui/text-gradient';

const Hero = () => {
  const words = ['Elevate', 'Transform', 'Expand'];

  return (
    <section
      id='hero'
      className='h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased'
    >
      <div className='max-w-2xl mx-auto p-4 mt-28' />
      <h1 className='text-4xl md:text-6xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10'>
        <span
          className='inline-block align-top text-inherit text-balance'
          data-br=':r1a2:'
          data-brr='1'
        >
          <FlipWords words={words} />
          Your <TextGradient>Money Mindset</TextGradient> with MoneyG.ro
        </span>
      </h1>
      <p className='text-neutral-200 max-w-md mx-auto my-16 text-center relative z-10 px-8 sm:px-0'>
        Master your Spending, Saving, and Personal Finances with our All-in-One
        Smart Budgeting Tool
      </p>
      <div className='w-full sm:max-w-sm flex flex-col sm:flex-row items-center justify-evenly'>
        <Button className='inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-6 font-medium text-slate-100 relative z-10'>
          Unlock Full Access
        </Button>
        <button className='inline-flex w-[174px] sm:w-[153.18px] mt-4 sm:mt-0 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 relative z-10'>
          Explore Demo
        </button>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
