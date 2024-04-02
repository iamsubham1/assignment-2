import React from 'react'
import { useModal } from '../context/ModalContext';

const SecondBar = () => {
    const { handleModal } = useModal();

    return (
        <div className='flex items-center w-[100vw] h-[10vh] justify-between  mt-[1%] font-bold overflow-x-hidden'>
            <div className='flex items-center gap-5 h-[100%] ml-9 mobile-position'>
                <span className='custom-bg min-w-[36px] min-h-[35px]  grid place-content-center rounded-full font-black mt-1'>A</span>

                <h1 className='text-[2rem] textmobile'> Adam Cooper Team</h1>
            </div>
            <button type='button' className='bg-black text-white py-2 px-4 rounded-md button mr-9' onClick={handleModal}>New Project</button>
        </div>

    )
}

export default SecondBar