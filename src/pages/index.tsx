import Layout from '@/components/Layout';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
    </Layout>
  );
}
