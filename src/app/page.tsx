import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import Donations from '@/components/Donations';
import DonateForm from '@/components/DonateForm';
import Stats from '@/components/Stats';
import Events from '@/components/Events';
import WhyJoin from '@/components/WhyJoin';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <MissionVision />
      <Donations />
      <DonateForm />
      <Stats />
      <Events />
      <WhyJoin />
      <Team />
      <Testimonial />
      <Blog />
      <Gallery />
    </Layout>
  );
}