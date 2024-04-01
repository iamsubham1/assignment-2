import React from 'react'

const Navbar = () => {
    return (
        <div className='w-[100vw] bg-[#FFFFFF] h-[10vh] flex justify-between '>
            <div className='flex items-center gap-2 font-bold'>
                <span className='bg-black text-white w-[45px] h-[45px] text-center rounded-full grid place-content-center ml-2 text-2xl'><p>B</p></span>
                <h2> Project Dashboard</h2>
            </div>
            <div className='flex w-[50%] items-center gap-5 justify-end '>
                <div className="relative h-[100%] flex items-center w-[60%]">
                    <input type="text" placeholder="Search my storyboards " className="border-[#c7c7c7] border-2 w-[100%] h-[60%] px-2 pl-8 rounded" />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 mt-1">
                        <i className="fa-solid fa-search text-gray-400"></i>
                    </span>
                </div>
                <button type='button' className='px-4 py-1 border-[#74b8f7] border-2 rounded font-bold bg-[#E6F4FC] max-h-[70%] text-[1vw] flex items-center gap-2 h-[60%]'>


                    Quick-Start
                </button>
                <span className='custom-bg  min-w-[46px] h-[45px]  grid place-content-center rounded-full font-black '>A</span>
                <span className='bg-black min-w-[6%] h-[60%] grid place-content-center rounded-l-full '><i className="fa-solid fa-bolt text-white ml-2"></i></span>
            </div>
        </div>
    )
}

export default Navbar
