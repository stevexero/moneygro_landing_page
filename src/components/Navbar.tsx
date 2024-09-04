'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { GrMoney } from 'react-icons/gr';
import { TiThMenu } from 'react-icons/ti';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  useModal,
} from './ui/animated-modal';
import Login from './Login';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavLinkClick = (hash: string) => {
    if (router.pathname !== '/') {
      router.push(`/${hash}`);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ModalLinks = () => {
    const { setOpen } = useModal();

    const handleLinkClick = (hash: string) => {
      setOpen(false);
      handleNavLinkClick(hash);
    };

    return (
      <ul className='mt-24 flex flex-col items-center'>
        <li className='mt-8'>
          <Link
            href={router.pathname !== '/' ? '/#features' : '#features'}
            onClick={() => handleLinkClick('#features')}
          >
            Features
          </Link>
        </li>
        <li className='mt-8'>
          <Link
            href={router.pathname !== '/' ? '/#pricing' : '#pricing'}
            onClick={() => handleLinkClick('#pricing')}
          >
            Pricing
          </Link>
        </li>
        <li className='mt-8' onClick={() => setOpen(false)}>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className='mt-8' onClick={() => setOpen(false)}>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
    );
  };

  if (isMobile) {
    return (
      <>
        <nav
          className={`fixed inset-x-0 w-full mx-auto z-50 ${
            isScrolled ? 'bg-black' : 'bg-transparent'
          } text-white transition-all duration-700 ease-in-out flex flex-row items-center justify-between px-8 py-4`}
        >
          <div className='flex flex-row items-center'>
            <GrMoney size='1.5rem' className='text-pink-400' />
            <Link
              href={router.pathname !== '/' ? '/#hero' : '#hero'}
              className='font-bold'
            >
              &nbsp;Money
              <span className='text-cyan-400'>
                G<span className='text-pink-400'>.</span>ro
              </span>
            </Link>
          </div>
          <Modal>
            <ModalTrigger className='bg-black text-white flex justify-center group/modal-btn p-0'>
              <TiThMenu size='1.5rem' />
            </ModalTrigger>
            <ModalBody className='bg-black text-white px-8'>
              <ModalContent>
                <ModalLinks />
                <ul className='my-24 flex flex-col items-center'>
                  <li>
                    <button>Login</button>
                  </li>
                  <li className='mt-8'>
                    <Link
                      href='/demo'
                      className='p-[3px] relative bg-black z-10 md:text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 block w-fullgroup/modal-btn'
                    >
                      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full' />
                      <div className='px-8 py-2 rounded-[6px] relative group transition duration-200 text-white hover:scale-110 font-bold'>
                        Demo
                      </div>
                    </Link>
                  </li>
                </ul>
              </ModalContent>
            </ModalBody>
          </Modal>
        </nav>
      </>
    );
  }

  const modalSignUp = () => {
    // const { setOpen } = useModal();

    return <h1>Sign Up</h1>;
  };

  return (
    <>
      <nav
        className={`fixed top-5 inset-x-0 w-full mx-auto z-50 ${
          isScrolled
            ? 'bg-black max-w-4xl shadow shadow-slate-500'
            : 'bg-transparent max-w-7xl'
        } text-white transition-all duration-700 ease-in-out flex flex-row items-center justify-between px-8 py-4 rounded-2xl`}
      >
        <ul className='flex flex-row items-center'>
          <li className='flex flex-row items-center'>
            <GrMoney size='1.5rem' className='text-pink-400' />
            <Link
              href={router.pathname !== '/' ? '/#hero' : '#hero'}
              onClick={() => handleNavLinkClick('#hero')}
              className='font-bold'
            >
              &nbsp;Money
              <span className='text-cyan-400'>
                G<span className='text-pink-400'>.</span>ro
              </span>
            </Link>
          </li>
          <li className='ml-16'>
            <Link
              href={router.pathname !== '/' ? '/#features' : '#features'}
              onClick={() => handleNavLinkClick('#features')}
            >
              Features
            </Link>
          </li>
          <li className='ml-8'>
            <Link
              href={router.pathname !== '/' ? '/#pricing' : '#pricing'}
              onClick={() => handleNavLinkClick('#pricing')}
            >
              Pricing
            </Link>
          </li>
          <li className='ml-8'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='ml-8'>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
        <ul className='flex flex-row items-center'>
          <li className='mr-8'>
            <Modal>
              <ModalTrigger>
                <span>Login</span>
              </ModalTrigger>
              <ModalBody className='items-center'>
                <ModalContent className='w-full max-w-96'>
                  <Login />
                </ModalContent>
              </ModalBody>
            </Modal>
          </li>
          <li>
            <Link
              href='/demo'
              className='p-[3px] relative bg-black z-10 md:text-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 block w-fullgroup/modal-btn'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full' />
              <div className='px-8 py-2 rounded-[6px] relative group transition duration-200 text-white hover:scale-110 font-bold'>
                Demo
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
