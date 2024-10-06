import Image from 'next/image';
import parrotImg from '@/public/images/parrot.png';

const Banner = () => {
  return (
    <div className='w-full h-[12rem] bg-DarkBlue flex items-center justify-center gap-4'>
        <Image src={parrotImg} alt='parrot' />
        <div>
            <h1 className='font-bold text-parrotGreen text-3xl'>PollyGlot</h1>
            <h3 className='text-md text-white font-bold'>Perfect Translation Every Time</h3>
        </div>
    </div>
  )
}

export default Banner