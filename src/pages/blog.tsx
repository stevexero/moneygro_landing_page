import { cn } from '@/lib/utils';
import Image from 'next/image';
import Layout from '@/components/Layout';
import pfp from '@/assets/sx.jpg';

const blog = () => {
  return (
    <Layout>
      <div className='w-full flex items-start justify-center mb-8'>
        <div className='w-full md:max-w-7xl px-8 mt-28'>
          <h1 className='text-2xl md:text-4xl font-medium tracking-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center'>
            Welcome to the MoneyG.ro Blog!
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
            {/*  */}
            <div>
              <div className='sm:max-w-xs w-full group/card'>
                <div
                  className={cn(
                    ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                    'bg-[url(https://images.pexels.com/photos/6963005/pexels-photo-6963005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'
                  )}
                >
                  <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
                  <div className='flex flex-row items-center space-x-4 z-10'>
                    <Image
                      height='100'
                      width='100'
                      alt='Avatar'
                      src={pfp}
                      className='h-10 w-10 rounded-full border-2 object-cover'
                    />
                    <div className='flex flex-col'>
                      <p className='font-normal text-base text-gray-50 relative z-10'>
                        Stece Xero
                      </p>
                      <p className='text-sm text-gray-400'>2 min read</p>
                    </div>
                  </div>
                  <div className='text content'>
                    <h6 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
                      The 6 Essential Money Jars
                    </h6>
                    <p className='font-normal text-sm text-gray-50 relative z-10 my-4'>
                      How to Organize Your Finances for Every Aspect of Life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='sm:max-w-xs w-full group/card'>
                <div
                  className={cn(
                    ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                    'bg-[url(https://images.pexels.com/photos/6963005/pexels-photo-6963005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'
                  )}
                >
                  <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
                  <div className='flex flex-row items-center space-x-4 z-10'>
                    <Image
                      height='100'
                      width='100'
                      alt='Avatar'
                      src={pfp}
                      className='h-10 w-10 rounded-full border-2 object-cover'
                    />
                    <div className='flex flex-col'>
                      <p className='font-normal text-base text-gray-50 relative z-10'>
                        Stece Xero
                      </p>
                      <p className='text-sm text-gray-400'>2 min read</p>
                    </div>
                  </div>
                  <div className='text content'>
                    <h6 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
                      The 6 Essential Money Jars
                    </h6>
                    <p className='font-normal text-sm text-gray-50 relative z-10 my-4'>
                      How to Organize Your Finances for Every Aspect of Life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='sm:max-w-xs w-full group/card'>
                <div
                  className={cn(
                    ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                    'bg-[url(https://images.pexels.com/photos/6963005/pexels-photo-6963005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'
                  )}
                >
                  <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
                  <div className='flex flex-row items-center space-x-4 z-10'>
                    <Image
                      height='100'
                      width='100'
                      alt='Avatar'
                      src={pfp}
                      className='h-10 w-10 rounded-full border-2 object-cover'
                    />
                    <div className='flex flex-col'>
                      <p className='font-normal text-base text-gray-50 relative z-10'>
                        Stece Xero
                      </p>
                      <p className='text-sm text-gray-400'>2 min read</p>
                    </div>
                  </div>
                  <div className='text content'>
                    <h6 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
                      The 6 Essential Money Jars
                    </h6>
                    <p className='font-normal text-sm text-gray-50 relative z-10 my-4'>
                      How to Organize Your Finances for Every Aspect of Life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='sm:max-w-xs w-full group/card'>
                <div
                  className={cn(
                    ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                    'bg-[url(https://images.pexels.com/photos/6963005/pexels-photo-6963005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'
                  )}
                >
                  <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
                  <div className='flex flex-row items-center space-x-4 z-10'>
                    <Image
                      height='100'
                      width='100'
                      alt='Avatar'
                      src={pfp}
                      className='h-10 w-10 rounded-full border-2 object-cover'
                    />
                    <div className='flex flex-col'>
                      <p className='font-normal text-base text-gray-50 relative z-10'>
                        Stece Xero
                      </p>
                      <p className='text-sm text-gray-400'>2 min read</p>
                    </div>
                  </div>
                  <div className='text content'>
                    <h6 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
                      The 6 Essential Money Jars
                    </h6>
                    <p className='font-normal text-sm text-gray-50 relative z-10 my-4'>
                      How to Organize Your Finances for Every Aspect of Life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;
