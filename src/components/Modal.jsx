import React from 'react'
import { useModal } from '../context/ModalContext';

const Modal = () => {
    const { handleModal } = useModal();

    return (
        <div className="modal-overlay ">
            <div className="modal flex flex-col ">
                <div className='flex justify-between items-center min-h[100%] '>
                    <h2 className="text-2xl font-bold mt-2">New Story Board</h2>


                    <button onClick={handleModal} ><i class="fa-regular fa-circle-xmark"></i>
                    </button></div>



                <form className='mt-5 font-semibold'>
                    <div className="mb-4">
                        <label htmlFor="storyName" className="block">Storyboard Name</label>
                        <input type="text" id="storyName" placeholder="e.g. default project storyboard" className="border border-gray-400 py-3 px-2 rounded w-[100%]" />
                    </div>

                    <div className="font-semibold">
                        <label htmlFor="frameSize" className="block">Frame Size</label>
                        <select id="frameSize" className="border border-gray-400 py-3 px-2 rounded w-[100%] ">
                            <option value="small">Landscape (16:9) </option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>

                </form>


                <div className='mt-[25%] flex w-[100%] items-center justify-between'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>

                    <button className='bg-[#dadada] px-4 py-2 rounded-md text-[#ffffff] ' id='createbtn'>Create Storyboard</button>
                </div>


            </div>

        </div>
    )
}

export default Modal