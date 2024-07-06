import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Footer = () => {

const form = useRef(null)

const sendEmail = (e) => {
e.preventDefault()


emailjs
      .sendForm('service_xldredq', 'template_6yor0gp', form.current , {
        publicKey: 'IJKnq8gM7C0Js9IbK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Email Send Successfully"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      form.current.value =""
}

    return (
        <footer className='bg-[#12141e] pt-8 -mb-32'>
            <div className="container">
                <div>
                    <p className='text-white font-semibold text-center text-2xl'>Contact form</p>
                    <form className="mt-4" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Your Name" name='name' className="px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
                            <input type="email" placeholder="Your Email" name='email' className="px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
                            <textarea placeholder="Your Message" rows="4" name='message' className="px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" style={{minHeight:"100px", maxHeight:"120px"}}></textarea>
                          
                        </div>
                       <div className='flex justify-end'>
                       <button type="submit"  value="Send" className="bg-blue-500 hover:bg-blue-600 px-12 max-[500px]:px-6 mt-4 py-2 text-white rounded-lg focus:outline-none">Submit</button>
                       </div>
                    </form>
                </div>
            </div>

            <div className="bg-[#1b1e29] py-5 mt-14">
                <div className="container">
                    <div className="flex items-center justify-center sm:justify-between">
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-[10px]">
                                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center '>
                                    RT.
                                </span>
                                <div className="leading-[20px]">
                                    <h2 className='text-gray-200 font-[500] text-[18px]'>Rabeeb</h2>
                                    <p className='text-gray-400 text-[14px] font-[500]'>Tehseen</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-400 text-[14px]'>Design and Developed by Astral Developers</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
