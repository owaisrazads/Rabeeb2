import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
const Services = () => {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>Services</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                    I am a dedicated freelancer offering services in web and app development, graphic design, 2D and 3D work, and architectural design. I specialize in creating dynamic websites, intuitive mobile apps, captivating graphics, detailed illustrations, and functional architectural plans. My versatility and commitment to high-quality work ensure that your vision becomes a reality. Let's collaborate to bring your ideas to life.              </p>
                </div>

                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>Web Development</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                Web Development involves creating websites and web applications using front-end technologies like HTML, CSS, JavaScript, and back-end technologies like Python, PHP, and databases.                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>App Development</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                App Development is the creation of mobile applications for iOS and Android, involving front-end design and back-end coding to deliver functional and user-friendly experiences.                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                className='bg-white p-4 rounded-lg shadow-xl group hover:bg-primaryColor transition-all cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>Graphic Design </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                Graphic Design encompasses the creation of visual communication through elements like images, typography, and layout, utilized in designing logos, posters, websites, and various media to effectively convey information and ideas.                                              </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor transition-all border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>2D Animation</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                2D Animation involves creating digital images that are arranged in sequential frames to produce the illusion of movement, used in cartoons, advertisements, and educational videos for storytelling and visual communication.                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>


                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                className='bg-white p-4 rounded-lg shadow-xl group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>3D Animation </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                3D Animation utilizes digital models and environments to create realistic movement and visual effects, enhancing visual storytelling in mediums such as movies, video games, and architectural visualizations.                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>Architecture</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                Architecture involves the design, planning, and construction of buildings and structures, integrating aesthetics, functionality, and safety, such as residential homes, commercial buildings, and urban planning.                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
