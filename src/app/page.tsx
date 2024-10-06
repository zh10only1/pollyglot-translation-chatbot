import Image from 'next/image';
import Container from '@/components/Container';
import bannnerImage from '@/public/images/banner.png';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <Container>
      <Banner />
    </Container>
  );
}
