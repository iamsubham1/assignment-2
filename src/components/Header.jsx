import React from 'react'

const Header = () => {
    return (
        <header className='bg-[#F9DEB3] flex gap-4 h-[7vh] items-center min-w-[100vw] mobile_display'>
            <div className='ml-5 bg-[#F7C57C] rounded-2xl py-1 px-2 font-semibold max-h-[70%] text-[.8em]'><p><i className="fa-solid fa-clock mr-2 "></i>One-Time Offer</p></div>
            <div className='flex gap-2 items-center'>
                <p className='font-semibold'>Your AI Storyboadring Bundle Discount expries in</p>
                <span className='bg-[#FCE9CA] text-[#fa818f]  px-2 font-bold rounded'>5:01</span>
            </div>
            <button type='button' className='bg-[#EA9AA3] text-black py-1 px-2 rounded-md font-bold max-h-[70%] text-[.8em]'>Claim Discount</button>
        </header>
    )
}

export default Header