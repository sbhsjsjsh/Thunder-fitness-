import {Navbar} from '@/components/navbar';
import {Hero} from '@/components/hero';
import {Services} from '@/components/services';
import {Equipment} from '@/components/equipment';
import {Gallery} from '@/components/gallery';
import {Location} from '@/components/location';
import {Footer} from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand selection:text-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <Equipment />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
