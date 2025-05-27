import react from 'react'
import CrossIcon from '../assets/CombinedShapeCopy.png'
import CircleIcon from '../assets/Oval Copy.png'
import CrossIconGrey from '../assets/Combined Shape Copy 2.png'
import CircleIconGray from '../assets/Oval Copy-grey.png';
import Buttoncomp from '../component/ButtonComp';

const SelectPlayerPage = () => {
    return (
        <main className="w-full max-w-[375px] h-screen bg- [#282c34]  h-auto mx-auto flex flex-col item-center justify-center gap-[24px]">
            <div className="flex items-center justify- center gap-1">
                <img src={CrossIcon} alt='cross icon' />
                <img src={CircleIcon} alt='circle icon' />
            </div>
            <section className='bg-[#1F341]rounded-[15px] h-auto flex flex-col items-center gap-2 p-[10px]'
                style={{
                    boxShadow: '0 5px rgba(0, 0, 0, 0.5)',
                }}
            >
                <h2 className='text-[#a8bfc9] text-[1.5rem] font-bold'>PICK PLAYER'1 MARK</h2>
                <div className='bg-[#1a2a33] p-[10px] flex item-cener justify-between rounded-[15px]'>
                    <button className='w-[45%] p-[10px] bg-none border-none flex items-center justify-center cursor-pinter hover:bg-[#1f3641 hover:shadow-[0_5px_0_rgba(0,0,0,0.25)] rounded[10px] '> <img src={CrossIconGrey} alt="CrossIconGrey"/></button>
                    <button className='w-[45%] p-[10px] bg-none border-none flex items-center justify-center cursor-pinter hover:bg-[#1f3641 hover:shadow-[0_5px_0_rgba(0,0,0,0.25)] rounded[10px]'> <img src={CircleIconGray} alt="CircleIcon"/></button>
                </div>
                <h3>Remember: X goes first</h3>


            </section>
            <div className='flex flex-col w-full gap-[16px]'>
                <Buttoncomp
                text="NEW GAME (VS PLAYER)"
                bg="#F2B137"
                shadow="0px 5px rgba(49, 195. 189, 0.5)"/>
                <Buttoncomp 
                text="NEW GAME (VS PLAYER)"
                bg="#31c3bd"
                shadow="0px 5px rgba(49, 195. 189, 0.5)"
                />
            </div>
        </main>
    )
}

export default SelectPlayerPage