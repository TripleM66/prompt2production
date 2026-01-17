import HeroSection from '@/components/HeroSection';
import MethodSection from '@/components/MethodSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MethodSection />
      <Footer />
    </div>
  );
}
