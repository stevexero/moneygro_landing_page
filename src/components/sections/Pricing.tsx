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
      className='h-[50rem] w-full bg-neutral-950 bg-dot-white/[0.2] relative flex items-center justify-center'
    >
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div>
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
    </section>
  );
};

export default Pricing;
