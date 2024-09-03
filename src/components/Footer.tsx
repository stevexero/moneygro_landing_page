import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textArea';
import { GrMoney } from 'react-icons/gr';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer
      id='contact'
      className='w-full bg-neutral-950 text-white flex flex-col items-center justify-center'
    >
      <div className='w-full flex items-center justify-center'>
        <div className='w-full sm:max-w-7xl flex flex-col sm:flex-row items-start justify-center'>
          {/* Left */}
          <div className='sm:w-1/2'>
            <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input flex flex-row items-start justify-between'>
              {/* Left Left */}
              <div>
                <div className='flex flex-row items-center'>
                  <GrMoney size='1.5rem' className='text-pink-400' />
                  <Link href='#hero' className='font-bold'>
                    &nbsp;Money
                    <span className='text-cyan-400'>
                      G<span className='text-pink-400'>.</span>ro
                    </span>
                  </Link>
                </div>
                <nav>
                  <ul className='flex flex-col items-start'>
                    <li className='mt-8'>
                      <Link href='#features'>Features</Link>
                    </li>
                    <li className='mt-4'>
                      <Link href='#pricing'>Pricing</Link>
                    </li>
                    <li className='mt-4'>
                      <Link href='#blog'>Blog</Link>
                    </li>
                  </ul>
                  <ul className='flex flex-row items-center mt-12'>
                    <li>
                      <button>Login</button>
                    </li>
                    <li className='ml-8'>
                      <button>Sign Up</button>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Left Right */}
              <div>
                <ul className='flex flex-col items-start'>
                  <li className='mt-14'>
                    <Link href='#'>About</Link>
                  </li>
                  <li className='mt-4'>
                    <Link href='#'>Privacy Policy</Link>
                  </li>
                  <li className='mt-4'>
                    <Link href='#'>Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full sm:w-1/2 mt-8 sm:mt-0'>
            <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input'>
              <h5 className='font-bold text-xl text-neutral-200'>Contact Us</h5>
              <form className='my-8' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
                  <LabelInputContainer>
                    <Label htmlFor='firstname'>First name</Label>
                    <Input id='firstname' placeholder='Johnny' type='text' />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor='lastname'>Last name</Label>
                    <Input id='lastname' placeholder='Smith' type='text' />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className='mb-4'>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input
                    id='email'
                    placeholder='smith.j@gmail.com'
                    type='email'
                  />
                </LabelInputContainer>
                <LabelInputContainer className='mb-4'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea id='email' placeholder='My Message' />
                </LabelInputContainer>
                <button
                  className='bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                  type='submit'
                >
                  Send &rarr;
                  <BottomGradient />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className='mb-12 text-neutral-500'>
        Copyright &copy; MoneyG.ro by Steve Xero
      </p>
    </footer>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

export default Footer;
