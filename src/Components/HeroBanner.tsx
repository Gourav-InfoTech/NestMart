import styled from 'styled-components';
import { BiPaperPlane } from "react-icons/bi"

const HeroBanner = () => {
    return (
        <HeroDiv className='Hero_Banner flex flex-col gap-'>
            <div className='p-10'>
                <div className='Banner_Text'>
                    <h1 className='text-6xl font-bold'> Fresh Vegetable </h1>
                    <h1 className='text-6xl font-bold'> Big discount </h1>
                    <p className='text-xl text-zinc-500'> Save upto 50% off on our first order </p>
                </div>
                <div className="BannerInput inline-block bg-white">
                    <div className='flex items-center'>
                    <button className='bg-slate-100 text-2l p-6'><span><BiPaperPlane /> </span> </button>
                    <input className='h-16' placeholder='Your email address' type="text" />
                    <SubscribeBtn>Subscribe</SubscribeBtn>
                    </div>
            </div>
        </div>
        </HeroDiv >
    )
}

export default HeroBanner;

const HeroDiv = styled.div`
    background-image: url("/Images/herobanner-2.png");
    background-position: center center;

    border-radius: 50px;
    width: 80vw;
    height: 300px;
`

const SubscribeBtn = styled.div`
    background-color: #3bb77e;
    padding: 15px 40px;
    border-radius: 50px;
`