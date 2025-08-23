
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FaArrowDownLong } from '../../Icons';

const tabInfo = [
    {
        id: 1,
        title: "برداشت موجودی"
    },
    {
        id: 2,
        title: "افزایش موجودی"
    },
     {
        id: 3,
        title: 'انتقال موجودی',
        status: 'failed',
    },
]

const Transactions = () => {
    const [selectedTab, setSelectedTab] = useState(tabInfo[0])

    return (
        <div className='flex flex-col gap-3 items-center pb-25'>
            <div className="rounded-lg bg-primary-darker">
                <div className="p-2">
                    <nav className="w-full">
                        <div
                            className="grid grid-cols-4"
                        >
                            {
                                tabInfo.map((tab) => (
                                    <button onClick={() => setSelectedTab(tab)} className={`${selectedTab == tab ? "bg-primary-blue" : "bg-transparent"} cursor-pointer text-neutral-200 w-full px-3 py-2 rounded-md`}>
                                        <Typography className="!font-kalameh text-white text-nowrap" fontWeight='semibold' fontSize={9}>
                                            {tab.title}
                                        </Typography>
                                    </button>
                                ))
                            }
                        </div>
                    </nav>
                </div>
            </div>

            <div className="flex justify-between p-4 w-full rounded-lg bg-primary-darker">
                <Typography className="!font-kalameh text-white text-nowrap" fontWeight='semibold' fontSize={10}>
                    نوع عملیات
                </Typography>
                <Typography className="!font-kalameh text-white text-nowrap" fontWeight='semibold' fontSize={10}>
                    مقدار تراکنش
                </Typography>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                {[0, 0, 0].map(() => <div className='flex justify-between w-full p-2.5 bg-primary-dark rounded-lg'>
                    <div className='flex gap-2 items-center'>
                        <div className='flex justify-center items-center w-7 h-7 bg-green-100 rounded-full'>
                            <FaArrowDownLong className='text-green-600' fontSize={11} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Typography className="!font-kalameh text-white text-nowrap" fontWeight={600} fontSize={11}>
                                افزایش موجودی
                            </Typography>
                            <Typography className="!font-kalameh text-white text-nowrap" fontSize={9}>
                                1403/09/14   15:25
                            </Typography>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 items-end'>
                        <div className='flex gap-1 items-center'>
                            <Typography className='!font-peyda text-white' fontWeight='bold' fontSize={12}>2,566,890</Typography>
                            <img alt='' src='/images/toman.svg' width={10} height={10} />
                        </div>
                        <Typography className='!font-peyda text-green-500 bg-green-500/30 w-fit py-0.5 px-2.5 rounded-xl' fontSize={9}>موفق</Typography>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Transactions