import Head from 'next/head';
import HeroSection from '@/components/homepage/HeroSection';
import PropertyCard from '@/components/homepage/PropertyCard';
import Pill from '@/components/Pill';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

const filters = ["All", "Top Villa", "Free Reschedule", "Book Now, Pay later", "Self Checkin", "Instant Book"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <header>     
       <HeroSection />
      </header>

     
      <div className="flex flex-wrap px-4 my-6">
        {filters.map((filter, idx) => (
          <Pill key={filter} label={filter} active={idx === 0} />
        ))}
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </>
  );
}
