import AnimatedInput from '@/components/demo/AnimatedInput';
import Deductions from '@/components/demo/deductions/Deductions';
import Jars from '@/components/demo/jars/Jars';
import Necessities from '@/components/demo/Necessities';
import Presets from '@/components/demo/Presets';
import TotalDistributions from '@/components/demo/TotalDistributions';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/moving-border';

const demo = () => {
  return (
    <Layout>
      <div className='w-full flex items-start justify-center mb-8'>
        <div className='w-full md:max-w-7xl px-8 mt-28'>
          <h1 className='text-2xl md:text-4xl font-medium tracking-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center'>
            Welcome to the MoneyG.ro Demo!
          </h1>
          <div className='container flex flex-col items-center mt-12'>
            <AnimatedInput />
            <Presets />

            <div className='mt-8 w-full flex flex-col items-center'>
              <Deductions />

              <div className='container w-full max-w-lg grid grid-cols-2 gap-4 mt-8'>
                <Jars />
                <div className='card card-compact border border-neutral text-neutral-content rounded-xl'>
                  <div className='card-body'>
                    <div className='w-full flex justify-center'>
                      <h2 className='card-title'>Add More!</h2>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                      <Button className='inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-6 font-medium text-slate-100 relative z-10'>
                        Get Full Access Now
                      </Button>
                    </div>
                    <div className={'card-actions justify-end'}>{/*  */}</div>
                  </div>
                </div>
                {/* <CustomJars /> */}
              </div>

              <TotalDistributions />
              <Necessities />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default demo;
