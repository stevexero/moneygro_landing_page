import Layout from '@/components/Layout';

const demo = () => {
  return (
    <Layout>
      <div className='w-full flex items-start justify-center mb-8'>
        <div className='w-full md:max-w-7xl px-8 mt-28'>
          <h1 className='text-2xl md:text-4xl font-medium tracking-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center'>
            Welcome to the MoneyG.ro Demo!
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default demo;
