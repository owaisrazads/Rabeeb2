import { useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })

    }

    useEffect(() => {
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)

    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        })
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
    return (
        <header ref={headerRef} className='flex items-center w-full h-[80px]'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <a href='/' className='flex items-center gap-[10px]'>
                        <span className='flex justify-center items-center bg-primaryColor rounded-full w-[35px] h-[35px] font-[500] text-[18px] text-white'>MA</span>
                        <div className='leading-[20px]'>
                            <h2 className='font-[700] text-smallTextColor text-xl'>Moiz</h2>
                            <p className='font-[500] text-[14px] text-smallTextColor'>Ahmed</p>
                        </div>
                    </a>
                    <div className='menu'>
                        <ul className='flex items-center gap-10'>
                            <li><a  className='font-[600] text-smallTextColor cursor-pointer' >About</a></li>
                            <li><a  className='font-[600] text-smallTextColor cursor-pointer'>Portfolio</a></li>
                            <li><a  className='font-[600] text-smallTextColor cursor-pointer'>Services</a></li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href="#portfolio">
                            <button className='flex items-center gap-2 border-smallTextColor hover:bg-smallTextColor px-4 py-2 border border-solid rounded-[8px] max-h-[40px] font-[600] hover:font-[500] text-smallTextColor hover:text-white duration-300 ease-in'>
                                <i class="ri-send-plane-line"></i> Portfolio
                            </button>
                        </a>
                        <span onClick={toggleMenu} className='md:hidden text-2xl text-smallTextColor cursor-pointer'>
                            <i className='ri-menu-line'></i>
                        </span>
                    </div>


                  

                </div>
     {/* <div className='flex justify-end'>
            <a
                href="https://api.whatsapp.com/send?phone=923202034806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bottom-0 fixed bg-[#3b82f6] mt-80 mb-10 p-1 rounded-full text-sm text-white transition-transform cursor-pointer hover:scale-105"
                style={{ textDecoration: 'none' }}
            >
                <FaWhatsapp className="w-12 h-12" />
            </a>
        </div> */}
            </div>
        </header>
    )
}

export default Header

