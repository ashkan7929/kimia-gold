import { useNavigate } from 'react-router-dom';
import { HiOutlineHome, HiOutlinePresentationChartBar, GiWallet } from '../Icons/index';
import Typography from '@mui/material/Typography';

const BottomNav = () => {
		const navigate = useNavigate();
	
  return (
	    <div className='fixed bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[410px] z-50'>
                <div className='grid grid-cols-3 bg-primary-blue light:bg-white rounded-3xl'>
                    <div className='w-full flex justify-center items-center'>
                        <div onClick={() => navigate('/home')} className='flex flex-col justify-center items-center w-fit cursor-pointer p-2 gap-1.5'>
                            <HiOutlineHome className='text-white light:text-black' fontSize={20} />
                            <Typography fontSize={10} className='text-white !font-peyda light:text-black'>صفحه اصلی</Typography>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div onClick={() => navigate('/wallet')} className='flex flex-col justify-center items-center w-fit cursor-pointer'>
                            <div className='w-10.5 h-10.5 flex justify-center items-center rounded-full bg-accent-orange light:bg-primary-blue -translate-y-3 shadow shadow-black/50'>
                                <GiWallet fontSize={19} className='text-white ' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda -translate-y-2 light:text-black'>کیف پول</Typography>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div onClick={() => navigate('/transactions')} className='flex flex-col justify-center items-center w-fit cursor-pointer p-2 gap-1.5'>
                            <HiOutlinePresentationChartBar className='text-white light:text-black' fontSize={20} />
                            <Typography fontSize={10} className='text-white !font-peyda light:text-black'>همه تراکنش‌ها</Typography>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default BottomNav