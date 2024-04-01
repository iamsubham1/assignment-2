import React from 'react'

const SecondBar = () => {
    return (
        <div className='flex items-center w-[100vw] h-[10vh] justify-between px-10 mt-[1%] font-bold overflow-x-hidden'>
            <div className='flex items-center gap-5 h-[100%]'>
                <span className='custom-bg w-[36px] h-[35px]  grid place-content-center rounded-full font-black mt-1'>A</span>

                <h1 className='text-2xl'> Adam Cooper Team</h1>
            </div>
            <button type='button' className='bg-black text-white py-2 px-4 rounded-md'>New Project</button>
        </div>

    )
}

export default SecondBar