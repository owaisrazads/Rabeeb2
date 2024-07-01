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
        <header ref={headerRef} className='w-full h-[80px] flex items-center'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <a href='/' className='flex items-center gap-[10px]'>
                        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>RT</span>
                        <div className='leading-[20px]'>
                            <h2 className='text-xl text-smallTextColor font-[700]'>Rabeeb</h2>
                            <p className='text-smallTextColor text-[14px] font-[500]'>Tehseen</p>
                        </div>
                    </a>
                    <div ref={menuRef} onClick={toggleMenu} className='menu'>
                        <ul className='flex items-center gap-10'>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">About</a></li>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a></li>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">Services</a></li>
                            {/* <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">Contact</a></li> */}
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href="#portfolio">
                            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid
                        border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                        hover:text-white hover:font-[500] ease-in duration-300'>
                                <i class="ri-send-plane-line"></i> Portfolio
                            </button>
                        </a>
                        <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                            <i className='ri-menu-line'></i>
                        </span>
                    </div>


                  

                </div>
     <div className='flex justify-end'>
            <a
                href="https://api.whatsapp.com/send?phone=923202034806"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b82f6] text-white rounded-full p-1 text-sm bottom-0 mt-80 mb-10 fixed cursor-pointer inline-block transition-transform hover:scale-105"
                style={{ textDecoration: 'none' }}
            >
                <FaWhatsapp className="w-12 h-12" />
            </a>
        </div>
            </div>
        </header>
    )
}

export default Header

