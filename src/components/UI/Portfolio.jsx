import React, { useState } from 'react';




// web ecommerce import
import webecomm1 from "../../assets/images/web/ecomm web/messindia.png"
import webecomm2 from "../../assets/images/web/ecomm web/nakai.png"


// web informative import
import informative1 from "../../assets/images/web/informative/astral.png"
import informative2 from "../../assets/images/web/informative/cinta.png"
import informative3 from "../../assets/images/web/informative/i9.png"


// web portfolio import
import portfolio1 from "../../assets/images/web/portfolio/portfolio1.png"
// import informative2 from "../../assets/images/web/informative/cinta.png"
// import informative3 from "../../assets/images/web/informative/i9.png"


// web crm import
import crm1 from "../../assets/images/web/crm/crm1.png"
import crm2 from "../../assets/images/web/crm/crm2.png"
// import informative2 from "../../assets/images/web/informative/cinta.png"
// import informative3 from "../../assets/images/web/informative/i9.png"


// web management import
import management1 from "../../assets/images/web/management/management1.png"
import management2 from "../../assets/images/web/management/management2.png"
import management3 from "../../assets/images/web/management/management3.png"
// import crm2 from "../../assets/images/web/crm/crm2.png"
// import informative2 from "../../assets/images/web/informative/cinta.png"
// import informative3 from "../../assets/images/web/informative/i9.png"


// App development

// Calling import
import calling1 from "../../assets/images/app/calling/calling1.png"
import calling2 from "../../assets/images/app/calling/calling2.png"
import calling3 from "../../assets/images/app/calling/calling3.png"

// dating import
import dating1 from "../../assets/images/app/dating/dating1.png"
import dating2 from "../../assets/images/app/dating/dating2.png"
import dating3 from "../../assets/images/app/dating/dating3.png"

// ecommerce app import
import ecomm1 from "../../assets/images/app/ecommerce/ecomm1.png"
import ecomm2 from "../../assets/images/app/ecommerce/ecoom2.png"
import ecomm3 from "../../assets/images/app/ecommerce/ecomm3.png"


// photoedit app import
import photo1 from "../../assets/images/app/photr-edit/photo1.png"
import photo2 from "../../assets/images/app/photr-edit/photo2.png"
import photo3 from "../../assets/images/app/photr-edit/photo3.png"


// utility app import
import utility1 from "../../assets/images/app/utility/utility1.png"
import utility2 from "../../assets/images/app/utility/utility2.png"
import utility3 from "../../assets/images/app/utility/utility3.png"


// logo app import
import logo1 from "../../assets/images/gfx/logo/logo1.jpg"
import logo2 from "../../assets/images/gfx/logo/logo3.jpg"
import logo4 from "../../assets/images/gfx/logo/logo4.jpg"


// banner import
import banner1 from "../../assets/images/gfx/banner/banner1.avif"
import banner2 from "../../assets/images/gfx/banner/banner2.avif"
import banner3 from "../../assets/images/gfx/banner/banner3.jpg"


// social import
import social1 from "../../assets/images/gfx/social/social1.jpg"
import social2 from "../../assets/images/gfx/social/social2.jpg"
import social3 from "../../assets/images/gfx/social/social3.jpg"


// social import
import stationary1 from "../../assets/images/gfx/stationary/stationary2.png"
import stationary2 from "../../assets/images/gfx/stationary/stationary3.png"
import stationary3 from "../../assets/images/gfx/stationary/stationary4.png"


// tshirt import
import tshirt1 from "../../assets/images/gfx/tshirt/tshirt1.jpg"
import tshirt2 from "../../assets/images/gfx/tshirt/tshirt2.jpg"
import tshirt3 from "../../assets/images/gfx/tshirt/tshirt3.jpg"


// ui/ux import
import ux1 from "../../assets/images/gfx/uiux/ux1.png"
import ux2 from "../../assets/images/gfx/uiux/ux2.jpg"
import ux3 from "../../assets/images/gfx/uiux/ux3.jpg"


// 2d character import
import character1 from "../../assets/images/2D/2d character/2dcharacter.jpg"
import character2 from "../../assets/images/2D/2d character/2dcharacter2.jpg"
import character3 from "../../assets/images/2D/2d character/2dcharacter3.jpg"


// 2d animation import
import animation1 from "../../assets/images/2D/2d animation/2danimation1.mp4"
import animation2 from "../../assets/images/2D/2d animation/2danimation2.mp4"
import animation3 from "../../assets/images/2D/2d animation/2danimation3.mp4"


// 2d environment import
import environment1 from "../../assets/images/2D/2d environment/2d-environ1.jpg"
import environment2 from "../../assets/images/2D/2d environment/2d-environ2.jpg"
import environment3 from "../../assets/images/2D/2d environment/2d-environ3.jpg"



// 2d clothes import
import clothes1 from "../../assets/images/2D/2d clothes/2d-clothes1.jpg"
import clothes2 from "../../assets/images/2D/2d clothes/2d-clothes2.jpg"
import clothes3 from "../../assets/images/2D/2d clothes/2d-clothes3.jpg"


// 3d logo import
import logo3d1 from "../../assets/images/3D/3dlogo/3dlogo1.png"
import logo3d2 from "../../assets/images/3D/3dlogo/3dlogo2.png"
import logo3d3 from "../../assets/images/3D/3dlogo/3dlogo3.png"


// 3d character import
import character3d1 from "../../assets/images/3D/3dcharacter/3dcharacter1.jpg"
import character3d2 from "../../assets/images/3D/3dcharacter/3dcharacter2.jpg"
import character3d3 from "../../assets/images/3D/3dcharacter/3dcharacter3.jpg"


// 3d animation import
import animation3d1 from "../../assets/images/3D/3danimation/3danimation1.mp4"
import animation3d2 from "../../assets/images/3D/3danimation/3danimation2.webm"
import animation3d3 from "../../assets/images/3D/3danimation/3danimation3.mp4"


// 3d environment import
import environment3d1 from "../../assets/images/3D/3denvironment/3denvironment1.jpg"
import environment3d2 from "../../assets/images/3D/3denvironment/3denvironment2.png"
import environment3d3 from "../../assets/images/3D/3denvironment/3denvironment3.png"


// 3d jewellery import
import jewellery3d1 from "../../assets/images/3D/3djewellery/3djewellery1.png"
import jewellery3d2 from "../../assets/images/3D/3djewellery/3djewellery2.png"
import jewellery3d3 from "../../assets/images/3D/3djewellery/3djewellery3.jpg"


// 3d furniture import
import furniture3d1 from "../../assets/images/3D/3dfurniture/3dfurniture1.jpg"
import furniture3d2 from "../../assets/images/3D/3dfurniture/3dfurniture2.jpg"
import furniture3d3 from "../../assets/images/3D/3dfurniture/3dfurniture3.jpg"


// 3d product import
import product3d1 from "../../assets/images/3D/3dproduct/3dproduct1.jpg"
import product3d2 from "../../assets/images/3D/3dproduct/3dproduct2.jpg"
import product3d3 from "../../assets/images/3D/3dproduct/3dproduct3.jpg"



// 3d clothes import
import clothes3d1 from "../../assets/images/3D/3dclothes/3dclothes1.avif"
import clothes3d2 from "../../assets/images/3D/3dclothes/3dclothes2.jpg"
import clothes3d3 from "../../assets/images/3D/3dclothes/3dclothes3.webp"


// 3d floor import
import floor1 from "../../assets/images/archictecture/floor/floor1.png"
import floor2 from "../../assets/images/archictecture/floor/floor2.png"
import floor3 from "../../assets/images/archictecture/floor/floor3.png"


// 3d interior import
import interior1 from "../../assets/images/archictecture/interior/interior1.jpg"
import interior2 from "../../assets/images/archictecture/interior/interior2.jpg"
import interior3 from "../../assets/images/archictecture/interior/interior3.avif"

// 3d exterior import
import exterior1 from "../../assets/images/archictecture/exterior/exterior1.jpg"
import exterior2 from "../../assets/images/archictecture/exterior/exterior2.jpg"
import exterior3 from "../../assets/images/archictecture/exterior/exterior3.jpg"

// portfolio data for subcategories
const subcategoryData = {
  'Web Development': {
    'E-Commerce': [
      { text: "E-Commerce Project 1 Details", image: webecomm1, imageUrl: "https://nakkai.vercel.app/" },
      { text: "E-Commerce Project 2 Details", image: webecomm2, imageUrl: "https://mess-india.netlify.app/" },
      // { text: "E-Commerce Project 2 Details", image: "/images/ecommerce2.jpg" }
    ],
    'Informative': [
      { text: "Informative Project 1 Details", image: informative1, imageUrl: "https://cinta-fresh.web.app/"  },
      { text: "Informative Project 2 Details", image: informative2, imageUrl: "https://i9-innovation-1d971.web.app/"  },
      { text: "Informative Project 2 Details", image: informative3, imageUrl: "https://astral-developers.web.app/"  }
    ],
    'Portfolio': [
      { text: "Portfolio Project 1 Details", image: portfolio1, imageUrl: "https://fahad-sheikh.netlify.app/" },
      // { text: "Portfolio Project 2 Details", image: "/images/portfolio2.jpg" },
      // { text: "Portfolio Project 2 Details", image: "/images/portfolio2.jpg" }
    ],
    'Booking CRM': [
      { text: "Booking CRM Project 1 Details", image: crm1 , imageUrl: "https://crm-eta-rosy.vercel.app/" },
      { text: "Booking CRM Project 1 Details", image: crm2 , imageUrl: "https://www.3sigmacrm.com/landing-page/" },
      // { text: "Booking CRM Project 2 Details", image: "/images/booking-crm2.jpg" }
    ],
    'Management System': [
      { text: "Management System Project 1 Details", image: management1 , imageUrl: "https://astraldevelopersmanagement.web.app/" },
      { text: "Management System Project 1 Details", image: management2 , imageUrl: "https://cozy-peony-4226be.netlify.app/" },
      { text: "Management System Project 2 Details", image: management3 , imageUrl: "https://edp-project-3a8b8.web.app/" }
    ]
  },
  'App Development': {
    'ECommerce App': [
      { text: "E-Commerce App 1 Details", image: ecomm1 , },
      { text: "E-Commerce App 1 Details", image: ecomm2 , },
      { text: "E-Commerce App 2 Details", image: ecomm3 , }
    ],
    'Dating App': [
      { text: "Dating App 1 Details", image: dating1 },
      { text: "Dating App 1 Details", image: dating2 },
      { text: "Dating App 2 Details", image: dating3 }
    ],
    'Calling App': [
      { text: "Calling App 1 Details", image: calling1 , sub: "bui;d with flutter" },
      { text: "Calling App 1 Details", image: calling2 , sub: "bui;d with flutter" },
      { text: "Calling App 2 Details", image: calling3 , sub: "bui;d with flutter" }
    ],
    'PhotoEdit App': [
      { text: "Photo Edit App 1 Details", image: photo1 },
      { text: "Photo Edit App 1 Details", image: photo2 },
      { text: "Photo Edit App 2 Details", image: photo3 }
    ],
    'Utility App': [
      { text: "Utility App 1 Details", image: utility1 },
      { text: "Utility App 1 Details", image: utility2 },
      { text: "Utility App 2 Details", image: utility3 }
    ]
  },
  'Graphic Design': {
    'Logo Design': [
      { text: "Logo Design 1 Details", image: logo1 },
      { text: "Logo Design 1 Details", image: logo2 },
      { text: "Logo Design 2 Details", image: logo4 }
    ],
    'Banner Design': [
      { text: "Banner Design 1 Details", image: banner1 },
      { text: "Banner Design 1 Details", image: banner2 },
      { text: "Banner Design 2 Details", image: banner3 }
    ],
    'Social Post': [
      { text: "Social Post 1 Details", image: social1 },
      { text: "Social Post 1 Details", image: social2 },
      { text: "Social Post 2 Details", image: social3 }
    ],
    'Stationary Design': [
      { text: "Stationary Design 1 Details", image: stationary1 },
      { text: "Stationary Design 1 Details", image: stationary2 },
      { text: "Stationary Design 2 Details", image: stationary3 }
    ],
    't-shirt Design': [
      { text: "t-Shirt Design 1 Details", image: tshirt1 },
      { text: "t-Shirt Design 1 Details", image: tshirt2 },
      { text: "t-Shirt Design 2 Details", image: tshirt3 }
    ],
    'UI/UX Design': [
      { text: "UI/UX Design 1 Details", image: ux1 },
      { text: "UI/UX Design 1 Details", image: ux2 },
      { text: "UI/UX Design 2 Details", image: ux3 }
    ]
  },
  'Work 2D': {
    '2D Character': [
      { text: "2D Character 1 Details", image: character1 },
      { text: "2D Character 1 Details", image: character2 },
      { text: "2D Character 2 Details", image: character3 }
    ],
    '2D Animation': [
      { text: "2D Animation 1 Details", video: animation1 },
      { text: "2D Animation 1 Details", video: animation2 },
      { text: "2D Animation 2 Details", video: animation3 }
    ],
    '2D Environment': [
      { text: "2D Environment 1 Details", image: environment1 },
      { text: "2D Environment 1 Details", image: environment2 },
      { text: "2D Environment 2 Details", image: environment3 }
    ],
    '2D Clothes': [
      { text: "2D Clothes 1 Details", image: clothes1 },
      { text: "2D Clothes 1 Details", image: clothes2 },
      { text: "2D Clothes 2 Details", image: clothes3 }
    ]
  },
  'Work 3D': {
    '3D Logo': [
      { text: "3D Logo 1 Details", image: logo3d1 },
      { text: "3D Logo 1 Details", image: logo3d2 },
      { text: "3D Logo 2 Details", image: logo3d3 }
    ],
    '3D Character': [
      { text: "3D Character 1 Details", image: character3d1 },
            { text: "3D Character 1 Details", image: character3d2 },
      { text: "3D Character 2 Details", image: character3d3 }
    ],
    '3D Animation': [
      { text: "3D Animation 1 Details", video: animation3d1 },
            { text: "3D Animation 1 Details", video: animation3d2 },
      { text: "3D Animation 2 Details", video: animation3d3 }
    ],
    '3D Environment': [
      { text: "3D Environment 1 Details", image: environment3d1 },
            { text: "3D Environment 1 Details", image: environment3d2 },
      { text: "3D Environment 2 Details", image: environment3d3 }
    ],
    '3D Jewellery': [
      { text: "3D Jewellery 1 Details", image: jewellery3d1 },
            { text: "3D Jewellery 1 Details", image: jewellery3d2 },
      { text: "3D Jewellery 2 Details", image: jewellery3d3 }
    ],
    '3D Furniture': [
      { text: "3D Furniture 1 Details", image: furniture3d1 },
            { text: "3D Furniture 1 Details", image: furniture3d2 },
      { text: "3D Furniture 2 Details", image: furniture3d3 }
    ],
    '3D Product': [
      { text: "3D Product 1 Details", image: product3d1 },
            { text: "3D Product 1 Details", image: product3d2 },
      { text: "3D Product 2 Details", image: product3d3 }
    ],
    '3D Clothes': [
      { text: "3D Clothes 1 Details", image: clothes3d1 },
            { text: "3D Clothes 1 Details", image: clothes3d2 },
      { text: "3D Clothes 2 Details", image: clothes3d3 }
    ]
  },
  'Architecture': {
    'Floor Plan': [
      { text: "Floor Plan 1 Details", image: floor1 },
            { text: "Floor Plan 1 Details", image: floor2 },
      { text: "Floor Plan 2 Details", image: floor3 }
    ],
    'Interior Design': [
      { text: "Interior Design 1 Details", image: interior1 },
            { text: "Interior Design 1 Details", image: interior2 },
      { text: "Interior Design 2 Details", image: interior3 }
    ],
    'Exterior Design': [
      { text: "Exterior Design 1 Details", image: exterior1 },
            { text: "Exterior Design 1 Details", image: exterior2 },
      { text: "Exterior Design 2 Details", image: exterior3 }
    ]
  }
};

const Portfolio = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);


  const handleViewImage = (imageUrl) => {
    window.open(imageUrl,  '_blank'); // Opens the image in a new tab

   
  };

  const handleImage = (image) => {
    window.open(image,  '_blank'); // Opens the image in a new tab

   
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const selectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setActiveDropdown(null); // Close the dropdown when a subcategory is selected
  };

  const renderSubcategoryData = () => {
    if (!selectedSubcategory) return null;

    // Find the category that contains the selected subcategory
    const category = Object.keys(subcategoryData).find((cat) =>
      Object.keys(subcategoryData[cat]).includes(selectedSubcategory)
    );

    const items = subcategoryData[category][selectedSubcategory];

    return (
<div className='justify-items-center grid grid-cols-1'>

    <div className='grid grid-cols-1 w-[50%]'>

    <div className='justify-center gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
  {items.map((item, index) => (

    <div key={index} className='relative group shadow-md p-3 border rounded-lg '>
      {item.image && <img src={item.image} alt={item.text} className='mb-3 w-full h-56 object-cover hover:bg-blue-50' />}
      {item.video && <video autoPlay className='mb-3 w-full h-auto hover:bg-blue-50'><source src={item.video} type='video/mp4' /></video>}
      <p className='font-semibold'>{item.text}</p>
      {/* View button */}
      {category === 'Web Development' && ( // Check if the category is Web Development
                  <button
                    className='hidden absolute inset-0 transition-all items-center justify-center bg-opacity-25 bg-[#8873ef] text-black rounded-lg group-hover:flex'
                    onClick={() => handleViewImage(item.imageUrl)}
                  >
                    {item.imageUrl ? ( // Check if there's an imageUrl present
                      <p className='bg-[#8873ef] py-1 px-2 rounded-md text-white transition-all'>Demo</p>
                    ) : (
                      // <p className='bg-[#8873ef] py-1 px-2 rounded-md text-white transition-all'></p> 
                      ""
                    )}
                  </button>
                )}
                {category !== 'Web Development' && ( // Show View button for other categories
                  <button
                    className='hidden absolute inset-0 transition-all items-center justify-center bg-opacity-25 bg-[#8873ef] text-black rounded-lg group-hover:flex'
                    onClick={() => handleImage(item.image || item.video)}
                  >
                    <p className='bg-[#8873ef] py-1 px-2 rounded-md text-white transition-all'>View</p>
                  </button>
                )}

      
    </div>
  ))}
</div>

    </div>
</div>
    );
  };

  return (
    <div>
      <div>
        <h1 className='text-headingColor font-[800] text-[2.4rem] mb-5 text-center'>Projects</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {Object.keys(subcategoryData).map((category, index) => (
          <div key={index}>
            <p className='p-3 border rounded-xl font-semibold text-xl cursor-pointer' onMouseOver={() => toggleDropdown(category)}>
              {category}
            </p>
            {activeDropdown === category && (
              <div className='z-10 absolute bg-white shadow-lg mt-1 border rounded-lg'>
                {Object.keys(subcategoryData[category]).map((subcategory, idx) => (
                  <p key={idx} className='hover:bg-blue-50 p-3 cursor-pointer' onClick={() => selectSubcategory(subcategory)}>
                    {subcategory}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {renderSubcategoryData()}
    </div>
  );
};

export default Portfolio;
