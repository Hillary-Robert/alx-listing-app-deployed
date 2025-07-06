import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { DEFAULT_IMAGE } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Listing

        </h1>

        <Card
          title="Modern Apartment"
          description="Beautiful apartment in the heart of the city."
          imageUrl={DEFAULT_IMAGE}
        />

        <div className="mt-4">
          <Button text="Book Now" onClick={() => alert('Apartment Booked!')} />
        </div>

      </main>
    </>
  );
}
