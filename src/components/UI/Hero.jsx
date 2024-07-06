// import heroImg from '../../assets/images/adi.jpg'
import heroImg from '../../assets/images/home.avif'

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-cetner justify-between sm:flex-col md:flex-row'>
                    <div className='w-full md:basis-1/2'>
                        <h5
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className='text-headingColor font-[600] text-[16px]'
                        >
                            Hello Everyone 
                            <div className="relative inline-block animate-waving text-4xl transition-all ">
                                <span className="wave " role="img"  aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </div>
                        </h5>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                        >
                            I am Moiz Ahmed <br />
                            Freelancer
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            className='flex items-center gap-6 mt-7'
                        >
                            {/* <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1PRqf8qiu_RD2cy9M65IUJbhX6p9KOrf2/view?usp=sharing">
                                <button
                                    className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                                >
                                    <i className="ri-mail-line"></i> View Resume
                                </button>
                            </a> */}

                            {/* <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid
                            border-smallTextColor'
                            >
                                See Portfolio
                            </a> */}
                        </div>
                        {/* <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className='flex gap-2 text-headingColor font-[500] mt-14 text-[15px] leading-7 sm:pl-14 sm:pr-10'
                        >
                            <span> <i className='ri-apps-2-line'></i></span>
                            B.Tech in Computer Science <br />@ KIET Group of Instituitions (2021-2025)
                        </p> */}

                        <div className='flex item-center gap-9 mt-14'>
                            <span>
                                <a href="https://github.com/astralDeveper/" className='text-smallTextColor text-[28px] font-[600]'>
                                    <i className='ri-github-fill hover:text-[#5e80e0] transition-all'></i>
                                </a>
                            </span>
                            {/* <span>
                                <a href="https://twitter.com/adityyaa_10" className='text-smallTextColor text-[28px] font-[600]'>
                                    <i className='ri-twitter-fill hover:text-[#5e80e0] transition-all'></i>
                                </a>
                            </span> */}
                            <span>
                                <a href="https://pk.linkedin.com/company/astral-developers" className='text-smallTextColor text-[28px] font-[600]'>
                                    <i className='ri-linkedin-line hover:text-[#5e80e0] transition-all'></i>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt="" className='rounded-md max-h-[500px] m-auto animate-pulse' />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
