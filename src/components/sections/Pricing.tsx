import { useState } from 'react';
import { Spotlight } from '../ui/Spotlight';

const Pricing = () => {
  const [price, setPrice] = useState({
    free: '0.00',
    personal: '12.00',
    personalPremium: '19.00',
    familyPremium: '25.00',
  });
  const [discount, setDiscount] = useState({
    personal: '0.00',
    personalPremium: '0.00',
    familyPremium: '0.00',
  });
  const [timeFrame, setTimeFrame] = useState('mo');

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isYearly = e.target.checked;

    setTimeFrame(isYearly ? 'yr' : 'mo');

    if (isYearly) {
      const personalPrice = (parseFloat(price.personal) * 12 * 0.6).toFixed(2);
      const personalPremiumPrice = (
        parseFloat(price.personalPremium) *
        12 *
        0.6
      ).toFixed(2);
      const familyPremiumPrice = (
        parseFloat(price.familyPremium) *
        12 *
        0.6
      ).toFixed(2);
      const personalDiscount = (parseFloat(personalPrice) / 12).toFixed(2);
      const personalPremiumDiscount = (
        parseFloat(personalPremiumPrice) / 12
      ).toFixed(2);
      const familyPremiumDiscount = (
        parseFloat(familyPremiumPrice) / 12
      ).toFixed(2);

      setDiscount({
        personal: personalDiscount,
        personalPremium: personalPremiumDiscount,
        familyPremium: familyPremiumDiscount,
      });

      setPrice({
        ...price,
        personal: personalPrice,
        personalPremium: personalPremiumPrice,
        familyPremium: familyPremiumPrice,
      });
    } else {
      setDiscount({
        personal: '0.00',
        personalPremium: '0.00',
        familyPremium: '0.00',
      });
      setPrice({
        ...price,
        personal: '12.00',
        personalPremium: '19.00',
        familyPremium: '25.00',
      });
    }
  };

  return (
    <section
      id='pricing'
      className='w-full bg-neutral-950 bg-dot-white/[0.2] relative flex items-center justify-center'
    >
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='w-full mt-24 max-w-7xl mx-auto px-4 flex flex-col items-center justify-between pb-20'>
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
              className={`text-sm ${timeFrame === 'mo' ? 'text-neutral-100' : 'text-neutral-400'} transition duration-200`}
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
                  transform: `translateX(${timeFrame === 'mo' ? '-2px' : '20px'}) translateZ(0px)`,
                }}
              ></div>
              <input
                className='hidden'
                id=':r24:'
                type='checkbox'
                checked={timeFrame === 'yr'}
                onChange={handleToggle}
              ></input>
            </label>
            <p
              className={`text-sm ${timeFrame === 'mo' ? 'text-neutral-400' : 'text-neutral-100'} transition duration-200`}
            >
              Yearly (save 40%)
            </p>
          </form>
        </div>
        <div className='mx-auto mt-4 md:mt-20 grid relative z-20 grid-cols-1 gap-4 items-center  md:grid-cols-2 xl:grid-cols-4'>
          <div className='bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between'>
            <div>
              <h3 className='text-muted-dark text-base font-semibold leading-7'>
                Free
              </h3>
              <p className='mt-4 text-4xl font-bold tracking-tight inline-block text-neutral-200'>
                {price.free} / {timeFrame}
              </p>
            </div>
            <div className='h-full flex flex-col justify-between'>
              <ul className='text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Allocation Calculator
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Smart Registers
                </li>
              </ul>
              <button className='p-[3px] relative bg-black z-10 md:text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
                <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                  Get Started
                </div>
              </button>
            </div>
          </div>
          <div className='bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between'>
            <div className='relative'>
              <h3 className='text-muted-dark text-base font-semibold leading-7'>
                Personal
              </h3>
              <p className='mt-4 text-4xl font-bold tracking-tight inline-block text-neutral-200'>
                {price.personal} / {timeFrame}
              </p>
              <div className='absolute -bottom-5 text-xs font-light text-red-400'>
                {timeFrame === 'yr' ? (
                  <>That&apos;s {discount.personal} per month!</>
                ) : null}
              </div>
            </div>
            <div className='h-full flex flex-col justify-between'>
              <ul className='text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Everything from Free
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Bank Integration
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Up to Two Customizable Jars
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  One Customizable Deduction
                </li>
              </ul>
              <button className='p-[3px] relative bg-black z-10 md:text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
                <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                  Get Started
                </div>
              </button>
            </div>
          </div>
          <div className='rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] shadow-2xl'>
            <div className='relative'>
              <h3 className='text-muted-dark text-base font-semibold leading-7'>
                Personal Premium
              </h3>
              <p className='mt-4 text-4xl font-bold tracking-tight inline-block text-neutral-200'>
                {price.personalPremium} / {timeFrame}
              </p>
              <div>
                <div className='absolute -bottom-5 text-xs font-light text-red-400'>
                  {timeFrame === 'yr' ? (
                    <>That&apos;s {discount.personal} per month!</>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='h-full flex flex-col justify-between'>
              <ul className='text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Everything from Personal
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  AI Assistance
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Net Worth Tracking
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Unlimited Customizable Jars
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Unlimited Deductions
                </li>
              </ul>
              <button className='p-[3px] relative bg-black z-10 md:text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
                <div className='px-8 py-2 rounded-[6px] relative group transition duration-200 text-white hover:scale-110'>
                  Get Started
                </div>
              </button>
            </div>
          </div>
          <div className='bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between'>
            <div className='relative'>
              <h3 className='text-muted-dark text-base font-semibold leading-7'>
                Family Premium
              </h3>
              <p className='mt-4 text-4xl font-bold tracking-tight inline-block text-neutral-200'>
                {price.familyPremium} / {timeFrame}
              </p>
              <div>
                <div className='absolute -bottom-5 text-xs font-light text-red-400'>
                  {timeFrame === 'yr' ? (
                    <>That&apos;s {discount.personal} per month!</>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='h-full flex flex-col justify-between'>
              <ul className='text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Everything from Personal Premium
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='none'
                    className='tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none'
                    aria-hidden='true'
                  >
                    <path d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'></path>
                  </svg>
                  Syncing
                </li>
              </ul>
              <button className='p-[3px] relative bg-black z-10 md:text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
                <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                  Get Started
                </div>
              </button>
            </div>
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
                        {/*  */}
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
                        {/*  */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/*  */}
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
                        {/*  */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/*  */}
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
                        {/*  */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/*  */}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center'>
                        {/*  */}
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
