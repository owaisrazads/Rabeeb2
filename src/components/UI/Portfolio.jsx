import React, { useState } from 'react';

// Sample data for subcategories
const subcategoryData = {
  'Web Development': {
    'E-Commerce': [
      { text: "E-Commerce Project 1 Details", image: "/images/ecommerce1.jpg" },
      { text: "E-Commerce Project 2 Details", image: "/images/ecommerce2.jpg" },
      { text: "E-Commerce Project 2 Details", image: "/images/ecommerce2.jpg" }
    ],
    'Informative': [
      { text: "Informative Project 1 Details", image: "/images/informative1.jpg" },
      { text: "Informative Project 2 Details", image: "/images/informative2.jpg" },
      { text: "Informative Project 2 Details", image: "/images/informative2.jpg" }
    ],
    'Portfolio': [
      { text: "Portfolio Project 1 Details", image: "/images/portfolio1.jpg" },
      { text: "Portfolio Project 2 Details", image: "/images/portfolio2.jpg" },
      { text: "Portfolio Project 2 Details", image: "/images/portfolio2.jpg" }
    ],
    'Booking CRM': [
      { text: "Booking CRM Project 1 Details", image: "/images/booking-crm1.jpg" },
      { text: "Booking CRM Project 1 Details", image: "/images/booking-crm1.jpg" },
      { text: "Booking CRM Project 2 Details", image: "/images/booking-crm2.jpg" }
    ],
    'Management System': [
      { text: "Management System Project 1 Details", image: "/images/management-system1.jpg" },
      { text: "Management System Project 1 Details", image: "/images/management-system1.jpg" },
      { text: "Management System Project 2 Details", image: "/images/management-system2.jpg" }
    ]
  },
  'App Development': {
    'ECommerce App': [
      { text: "E-Commerce App 1 Details", image: "/images/ecommerce-app1.jpg" },
      { text: "E-Commerce App 1 Details", image: "/images/ecommerce-app1.jpg" },
      { text: "E-Commerce App 2 Details", image: "/images/ecommerce-app2.jpg" }
    ],
    'Dating App': [
      { text: "Dating App 1 Details", image: "/images/dating-app1.jpg" },
      { text: "Dating App 1 Details", image: "/images/dating-app1.jpg" },
      { text: "Dating App 2 Details", image: "/images/dating-app2.jpg" }
    ],
    'Calling App': [
      { text: "Calling App 1 Details", image: "/images/calling-app1.jpg" },
      { text: "Calling App 1 Details", image: "/images/calling-app1.jpg" },
      { text: "Calling App 2 Details", image: "/images/calling-app2.jpg" }
    ],
    'PhotoEdit App': [
      { text: "Photo Edit App 1 Details", image: "/images/photo-edit-app1.jpg" },
      { text: "Photo Edit App 1 Details", image: "/images/photo-edit-app1.jpg" },
      { text: "Photo Edit App 2 Details", image: "/images/photo-edit-app2.jpg" }
    ],
    'Utility App': [
      { text: "Utility App 1 Details", image: "/images/utility-app1.jpg" },
      { text: "Utility App 1 Details", image: "/images/utility-app1.jpg" },
      { text: "Utility App 2 Details", image: "/images/utility-app2.jpg" }
    ]
  },
  'Graphic Design': {
    'Logo Design': [
      { text: "Logo Design 1 Details", image: "/images/logo-design1.jpg" },
      { text: "Logo Design 1 Details", image: "/images/logo-design1.jpg" },
      { text: "Logo Design 2 Details", image: "/images/logo-design2.jpg" }
    ],
    'Banner Design': [
      { text: "Banner Design 1 Details", image: "/images/banner-design1.jpg" },
      { text: "Banner Design 1 Details", image: "/images/banner-design1.jpg" },
      { text: "Banner Design 2 Details", image: "/images/banner-design2.jpg" }
    ],
    'Social Post': [
      { text: "Social Post 1 Details", image: "/images/social-post1.jpg" },
      { text: "Social Post 1 Details", image: "/images/social-post1.jpg" },
      { text: "Social Post 2 Details", image: "/images/social-post2.jpg" }
    ],
    'Stationary Design': [
      { text: "Stationary Design 1 Details", image: "/images/stationary-design1.jpg" },
      { text: "Stationary Design 1 Details", image: "/images/stationary-design1.jpg" },
      { text: "Stationary Design 2 Details", image: "/images/stationary-design2.jpg" }
    ],
    't-shirt Design': [
      { text: "t-Shirt Design 1 Details", image: "/images/tshirt-design1.jpg" },
      { text: "t-Shirt Design 1 Details", image: "/images/tshirt-design1.jpg" },
      { text: "t-Shirt Design 2 Details", image: "/images/tshirt-design2.jpg" }
    ],
    'UI/UX Design': [
      { text: "UI/UX Design 1 Details", image: "/images/uiux-design1.jpg" },
      { text: "UI/UX Design 1 Details", image: "/images/uiux-design1.jpg" },
      { text: "UI/UX Design 2 Details", image: "/images/uiux-design2.jpg" }
    ]
  },
  'Work 2D': {
    '2D Character': [
      { text: "2D Character 1 Details", image: "/images/2d-character1.jpg" },
      { text: "2D Character 1 Details", image: "/images/2d-character1.jpg" },
      { text: "2D Character 2 Details", image: "/images/2d-character2.jpg" }
    ],
    '2D Animation': [
      { text: "2D Animation 1 Details", video: "/videos/2d-animation1.mp4" },
      { text: "2D Animation 1 Details", video: "/videos/2d-animation1.mp4" },
      { text: "2D Animation 2 Details", video: "/videos/2d-animation2.mp4" }
    ],
    '2D Environment': [
      { text: "2D Environment 1 Details", image: "/images/2d-environment1.jpg" },
      { text: "2D Environment 1 Details", image: "/images/2d-environment1.jpg" },
      { text: "2D Environment 2 Details", image: "/images/2d-environment2.jpg" }
    ],
    '2D Clothes': [
      { text: "2D Clothes 1 Details", image: "/images/2d-clothes1.jpg" },
      { text: "2D Clothes 1 Details", image: "/images/2d-clothes1.jpg" },
      { text: "2D Clothes 2 Details", image: "/images/2d-clothes2.jpg" }
    ]
  },
  'Work 3D': {
    '3D Logo': [
      { text: "3D Logo 1 Details", image: "/images/3d-logo1.jpg" },
      { text: "3D Logo 1 Details", image: "/images/3d-logo1.jpg" },
      { text: "3D Logo 2 Details", image: "/images/3d-logo2.jpg" }
    ],
    '3D Character': [
      { text: "3D Character 1 Details", image: "/images/3d-character1.jpg" },
            { text: "3D Character 1 Details", image: "/images/3d-character1.jpg" },
      { text: "3D Character 2 Details", image: "/images/3d-character2.jpg" }
    ],
    '3D Animation': [
      { text: "3D Animation 1 Details", video: "/videos/3d-animation1.mp4" },
            { text: "3D Animation 1 Details", video: "/videos/3d-animation1.mp4" },
      { text: "3D Animation 2 Details", video: "/videos/3d-animation2.mp4" }
    ],
    '3D Environment': [
      { text: "3D Environment 1 Details", image: "/images/3d-environment1.jpg" },
            { text: "3D Environment 1 Details", image: "/images/3d-environment1.jpg" },
      { text: "3D Environment 2 Details", image: "/images/3d-environment2.jpg" }
    ],
    '3D Jewellery': [
      { text: "3D Jewellery 1 Details", image: "/images/3d-jewellery1.jpg" },
            { text: "3D Jewellery 1 Details", image: "/images/3d-jewellery1.jpg" },
      { text: "3D Jewellery 2 Details", image: "/images/3d-jewellery2.jpg" }
    ],
    '3D Furniture': [
      { text: "3D Furniture 1 Details", image: "/images/3d-furniture1.jpg" },
            { text: "3D Furniture 1 Details", image: "/images/3d-furniture1.jpg" },
      { text: "3D Furniture 2 Details", image: "/images/3d-furniture2.jpg" }
    ],
    '3D Product': [
      { text: "3D Product 1 Details", image: "/images/3d-product1.jpg" },
            { text: "3D Product 1 Details", image: "/images/3d-product1.jpg" },
      { text: "3D Product 2 Details", image: "/images/3d-product2.jpg" }
    ],
    '3D Clothes': [
      { text: "3D Clothes 1 Details", image: "/images/3d-clothes1.jpg" },
            { text: "3D Clothes 1 Details", image: "/images/3d-clothes1.jpg" },
      { text: "3D Clothes 2 Details", image: "/images/3d-clothes2.jpg" }
    ]
  },
  'Architecture': {
    'Floor Plan': [
      { text: "Floor Plan 1 Details", image: "/images/floor-plan1.jpg" },
            { text: "Floor Plan 1 Details", image: "/images/floor-plan1.jpg" },
      { text: "Floor Plan 2 Details", image: "/images/floor-plan2.jpg" }
    ],
    'Interior Design': [
      { text: "Interior Design 1 Details", image: "/images/interior-design1.jpg" },
            { text: "Interior Design 1 Details", image: "/images/interior-design1.jpg" },
      { text: "Interior Design 2 Details", image: "/images/interior-design2.jpg" }
    ],
    'Exterior Design': [
      { text: "Exterior Design 1 Details", image: "/images/exterior-design1.jpg" },
            { text: "Exterior Design 1 Details", image: "/images/exterior-design1.jpg" },
      { text: "Exterior Design 2 Details", image: "/images/exterior-design2.jpg" }
    ]
  }
};

const Portfolio = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

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
        <div key={index} className='shadow-md p-3 border rounded-lg'>
          {item.image && <img src={item.image} alt={item.text} className='mb-3 w-full h-auto' />}
          {item.video && <video controls className='mb-3 w-full h-auto'><source src={item.video} type='video/mp4' /></video>}
          <p className='font-semibold'>{item.text}</p>
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
        <h1 className='mb-5 font-bold text-3xl text-center text-headingColor'>Projects</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {Object.keys(subcategoryData).map((category, index) => (
          <div key={index}>
            <p className='p-3 border rounded-xl font-semibold text-xl cursor-pointer' onClick={() => toggleDropdown(category)}>
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
