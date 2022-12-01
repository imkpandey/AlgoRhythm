import { Navbar } from '../components';
import { About, Explore, Hero} from '../sections';
import { Link } from 'next/link'

const Page = () => (
  <div className='bg-slate-200 overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
    <About />
    <div className='gradient-03 z-0' />
    <Explore />
    </div>
  </div>
);

export default Page;
