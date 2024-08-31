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

  const handleRadio = (e) => {
    setTimeFrame(e.target.id);
    if (e.target.id === 'monthly') {
      setPrice({ ...price, personal: 15, family: 25 });
    } else {
      setDiscount({
        ...discount,
        personal: price.personal - price.personal * 0.45,
        family: price.family - price.family * 0.45,
      });
      setPrice({
        ...price,
        personal: price.personal * 12 - price.personal * 0.45 * 12,
        family: price.family * 12 - price.family * 0.45 * 12,
      });
    }
  };

  return (
    <div>
      <h2>Simple Pricing</h2>
      <p>
        With plans to fit your needs, our tools are an investment in your
        journey towards personal success
      </p>
      <label htmlFor='time-frame'>Monthly</label>
      <input
        type='radio'
        name='time-frame'
        id='monthly'
        defaultChecked
        onChange={handleRadio}
      />
      <label htmlFor='time-frame'>Yearly (save 45%)</label>
      <input
        type='radio'
        name='time-frame'
        id='yearly'
        onChange={handleRadio}
      />
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
  );
};

export default Pricing;
