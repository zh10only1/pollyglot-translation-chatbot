import Image from 'next/image';
import Container from '@/components/Container';
import bannnerImage from '@/public/images/banner.png';

export default function Home() {
  return (
    <Container>
      <Image src={bannnerImage} alt='banner' />
    </Container>
  );
}
