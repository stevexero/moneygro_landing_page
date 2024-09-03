import { useState } from 'react';

const Pricing = () => {
  const [price, setPrice] = useState({
    free: 0,
    personal: 15,
    family: 25,
  });
  const [discount, setDiscount] = useState({
    personal: 0,
    family: 0,
  });
  const [timeFrame, setTimeFrame] = useState('monthly');

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isYearly = e.target.checked;

    setTimeFrame(isYearly ? 'yearly' : 'monthly');

    if (isYearly) {
      const personalPrice = +(price.personal * 12 * 0.55).toFixed(2);
      const familyPrice = +(price.family * 12 * 0.55).toFixed(2);
      const personalDiscount = +(personalPrice / 12).toFixed(2);
      const familyDiscount = +(familyPrice / 12).toFixed(2);

      setDiscount({
        personal: personalDiscount,
        family: familyDiscount,
      });

      setPrice({
        ...price,
        personal: personalPrice,
        family: familyPrice,
      });
    } else {
      setDiscount({
        personal: 0,
        family: 0,
      });
      setPrice({
        ...price,
        personal: 15,
        family: 25,
      });
    }
  };

  return (
    <section
      id='pricing'
      className='w-full bg-neutral-950 bg-dot-white/[0.2] relative flex items-center justify-center'
    >
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='w-full mt-24'>
        <h2 className='text-4xl md:text-7xl font-medium tracking-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center'>
          Simple Pricing
        </h2>
        <p className='text-neutral-200 max-w-md mx-auto text-center relative z-10 px-8 sm:px-0'>
          With plans to fit your needs, our tools are an investment in your
          journey towards personal success
        </p>
        <div className='flex justify-center mt-8'>
          <form className='flex space-x-4  antialiased items-center'>
            <p
              className={`text-sm ${timeFrame === 'monthly' ? 'text-neutral-100' : 'text-neutral-400'} transition duration-200`}
            >
              Monthly
            </p>
            <label
              htmlFor=':r24:'
              className='h-5 px-1 w-[40px] flex items-center border shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full relative cursor-pointer transition duration-200 bg-neutral-900 border-neutral-500'
            >
              <div
                className='h-[20px] block rounded-full bg-white shadow-md z-10 transition duration-200'
                style={{
                  height: '12px',
                  width: '12px',
                  transform: `translateX(${timeFrame === 'monthly' ? '-2px' : '20px'}) translateZ(0px)`,
                }}
              ></div>
              <input
                className='hidden'
                id=':r24:'
                type='checkbox'
                checked={timeFrame === 'yearly'}
                onChange={handleToggle}
              ></input>
            </label>
            <p
              className={`text-sm ${timeFrame === 'monthly' ? 'text-neutral-400' : 'text-neutral-100'} transition duration-200`}
            >
              Yearly (save 45%)
            </p>
          </form>
        </div>
        <div className='w-full flex flex-row items-start justify-evenly'>
          <div>
            <h3>Free</h3>
            <h4>
              {price.free} / {timeFrame}
            </h4>
            <h5></h5>
            <ul>
              <li></li>
            </ul>
            <button>Get Started</button>
          </div>
          <div>
            <h3>Personal</h3>
            <h4>
              {price.personal} / {timeFrame}
            </h4>
            <h5></h5>
            <ul>
              <li></li>
            </ul>
            <button>Get Started</button>
            {timeFrame === 'yearly' ? (
              <>That&apos;s {discount.personal} per month!</>
            ) : null}
          </div>
          <div>
            <h3>Family</h3>
            <h4>
              {price.family} / {timeFrame}
            </h4>
            <h5></h5>
            <ul>
              <li></li>
            </ul>
            <button>Get Started</button>
            {timeFrame === 'yearly' ? (
              <>That&apos;s {discount.family} per month!</>
            ) : null}
          </div>
        </div>
        <div className='mx-auto w-full max-w-full relative z-20 px-4 py-40'>
          <div className='mt-8 flow-root'>
            <div className='overflow-x-auto'>
              <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                <table className='min-w-full divide-y divide-neutral-800'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='max-w-xs py-3.5 pl-4 pr-3 text-left text-3xl font-extrabold text-white sm:pl-0'
                      ></th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-center text-lg font-semibold text-white'
                      >
                        Free
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-center text-lg font-semibold text-white'
                      >
                        Personal
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-center text-lg font-semibold text-white'
                      >
                        Personal Premium
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-center text-lg font-semibold text-white'
                      >
                        Family Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-neutral-800'>
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Allocation Calculator
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Smart Registers
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Bank Integration
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        AI Assistance
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Net Worth Tracking
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Syncing
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg> */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='tabler-icon tabler-icon-check mx-auto h-4 w-4 flex-shrink-0 text-white'
                        >
                          <path d='M5 12l5 5l10 -10'></path>
                        </svg>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Customizable Jars
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/*  */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <p>Up to 2</p>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <p>Unlimited</p>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <p>Unlimited</p>
                      </td>
                    </tr>
                    {/*  */}
                    <tr>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
                        Customizable Deductions
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/*  */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <p>Up to 1</p>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <p>Unlimited</p>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        <p>Unlimited</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
