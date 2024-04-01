import React, { useState } from 'react';
import { TbDotsVertical } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

const projects = [{
    url: "https://images.pexels.com/photos/6679623/pexels-photo-6679623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A random title",
    info: "Updated on 19 mar 24"
}, {
    url: "https://images.pexels.com/photos/1643038/pexels-photo-1643038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A random title",
    info: "Updated on 19 mar 24"
}];

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev)
    };

    return (
        <div className='w-[100vw] h-[65vh] flex justify-center items-center mt-6'>
            <div className='innerBox bg-[#FFFFFF] w-[95%] h-[100%] pb-10 flex flex-col'>
                <div className='inner-bar h-[10%] flex items-center mt-6 justify-between px-10'>
                    <span className='flex items-center gap-4'>
                        <i className="fa-regular fa-folder-closed text-2xl"></i>
                        <div className=''>
                            <h1 className='font-bold text-xl'>Default Project</h1>
                            <p className='text-sm'>1 storyboard</p>
                        </div>
                    </span>
                    <span className='flex gap-4 items-center'>
                        <TbDotsVertical className='text-xl' />
                        <RiArrowDropDownLine className='text-4xl' />
                    </span>
                </div>

                <div className='card-section w-full min-h-[80%] flex justify-start gap-[5%] items-center mt-2 px-10 flex-wrap'>
                    <div className='card-container flex w-[100%] rounded-sm gap-5'>

                        {projects.map((project, index) => (
                            <div key={index} className='card border-[#cecece] border-2 rounded-sm pb-2 ' >
                                <img src={project.url} className='w-[100%] max-h-[90%]' alt="Project" />
                                <h1 className='ml-2'>{project.title}</h1>
                                <p className='ml-2'>{project.info}</p>
                            </div>
                        ))}

                        <div className='card rounded-md pb-2 min-w-[30%] flex items-center justify-center bg-[#F9FAF5]'>
                            <div className='plus-sign text-center text-5xl border-[#aaaaaa] border-2 rounded-full h-[60px] w-[60px] text-[#aaaaaa]'>+</div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        {/* Modal content goes here */}
                        <h2>New Project Modal</h2>
                        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;
