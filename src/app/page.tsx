import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import Founder from '@/components/Founder';
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
      <Founder />
      <About />
      <MissionVision />
      <Donations />
      <Stats />
      <Events />
      <WhyJoin />
      {/* <Team /> */}

      {/* <Gallery /> */}
    </Layout>
  );
}