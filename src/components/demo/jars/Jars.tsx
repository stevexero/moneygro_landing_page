import { validatePercentage } from '../utils/validation';
import useJarStore from '../stores/jarStore';
import JarsCard from './JarsCard';

const Jars: React.FC = () => {
  const { jarInputs, setJarInputs } = useJarStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (validatePercentage(value)) {
      setJarInputs(name, value);
    }
  };

  return (
    <>
      <JarsCard
        jarId='freedom'
        jarTitle='Freedom'
        jarValue={jarInputs.freedom}
        handleJarPercentageChange={handleChange}
      />

      <JarsCard
        jarId='dreams'
        jarTitle='Dreams'
        jarValue={jarInputs.dreams}
        handleJarPercentageChange={handleChange}
      />

      <JarsCard
        jarId='generosity'
        jarTitle='Generosity'
        jarValue={jarInputs.generosity}
        handleJarPercentageChange={handleChange}
      />

      <JarsCard
        jarId='knowledge'
        jarTitle='Knowledge'
        jarValue={jarInputs.knowledge}
        handleJarPercentageChange={handleChange}
      />

      <JarsCard
        jarId='joy'
        jarTitle='Joy'
        jarValue={jarInputs.joy}
        handleJarPercentageChange={handleChange}
      />
    </>
  );
};

export default Jars;
