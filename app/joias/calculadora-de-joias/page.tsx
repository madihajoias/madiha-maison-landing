import DiamondHero from '@/components/leilao-diamante/DiamondHero';
import AuctionCountdown from '@/components/leilao-diamante/AuctionCountdown';
import HowToParticipate from '@/components/leilao-diamante/HowToParticipate';

export default function LeilaoDiamantePage() {
  return (
    <main>
      <DiamondHero />
      <AuctionCountdown />
      <HowToParticipate />
    </main>
  );
}