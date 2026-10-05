
import DiamondHero from '@/components/leilao-diamante/DiamondHero';
import AuctionCountdown from '@/components/leilao-diamante/AuctionCountdown';
import HowToParticipate from '@/components/leilao-diamante/HowToParticipate';
import DiamondDetails from '@/components/leilao-diamante/DiamondDetails';
import MadihaAssistance from '@/components/leilao-diamante/MadihaAssistance';
import AuctionLocation from '@/components/leilao-diamante/AuctionLocation';
import InstagramSection from '@/components/leilao-diamante/InstagramSection';
import AuctionFAQ from '@/components/leilao-diamante/AuctionFAQ';
import AuctionFinalCTA from '@/components/leilao-diamante/AuctionFinalCTA';

export default function LeilaoDiamantePage() {
  return (
    <main>
      <DiamondHero />
      <AuctionCountdown />
      <HowToParticipate />
      <DiamondDetails />
      <MadihaAssistance />
      <InstagramSection />
      <AuctionLocation />
      <AuctionFAQ />
      <AuctionFinalCTA />
    </main>
  );
}
