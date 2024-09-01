import Image from 'next/image';
import { ContainerScroll } from '../ui/container-scroll-animation';
import mgDash from '@/assets/mgdash.png';

const Features = () => {
  return (
    <section id='features' className='bg-neutral-950'>
      <div className='flex flex-col overflow-hidden'>
        <ContainerScroll
          titleComponent={
            <>
              {/* <h2 className='text-4xl font-semibold text-white dark:text-white'>
                A Smarter <br />
                <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                  Set of Tools
                </span>
              </h2> */}
            </>
          }
        >
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
      <h2>A Smarter Set of Tools</h2>
      <p>
        MoneyG.ro comes with a library of easy-to-use tools to keep you (and
        your family) on the right track.
      </p>
      <ul>
        <li>
          <h3>Single-Entry Allocations</h3>
          <p>Easily allocate your income...</p>
        </li>
        <li>
          <h3>Easy Registers</h3>
          <p>
            Manage all of your registers individually or as a single main
            register...
          </p>
        </li>
        <li>
          <h3>Syncing</h3>
          <p>Share in real time...</p>
        </li>
        <li>
          <h3>Challenges</h3>
          <p>Setting goals...</p>
        </li>
        <li>
          <h3>Customization</h3>
          <p>Add deductions, custom jars...</p>
        </li>
        <li>
          <h3>Insights</h3>
          <p>Daily tips...</p>
        </li>
        <li>
          <h3>Automated</h3>
          <p>Integrate with bank...</p>
        </li>
        <li>
          <h3>AI Assistance</h3>
          <p>Virtual financial coach</p>
        </li>
        <li>
          <h3>Health Report</h3>
          <p>Monthly report...</p>
        </li>
        <li>
          <h3>Goals and Milestones</h3>
          <p>Set goals...</p>
        </li>
        <li>
          <h3>Rebalancing</h3>
          <p>Based on prior habits...</p>
        </li>
        <li>
          <h3>Social Accountability</h3>
          <p>Share progres...</p>
        </li>
        <li>
          <h3>Forecasting</h3>
          <p>Project future finances...</p>
        </li>
        <li>
          <h3>Customizable Widgets</h3>
          <p>Make your dashboard your own...</p>
        </li>
        <li>
          <h3>Net Worth Tracking</h3>
          <p>Track your net worth...</p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
