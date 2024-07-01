import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);
    const [dropdowns, setDropdowns] = useState({
        webDevelopment: false,
        appDevelopment: false,
        twoDWork: false,
        threeDWork: false,
        graphicDesign: false,
        architecture: false,
    });
    const [projects, setProjects] = useState([]);

    // Dummy data for different categories
    const dummyData = {
        webDevelopment: {
            all: [
                { id: 1, title: 'Informative Website 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 2, title: 'Informative Website 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 3, title: 'Portfolio Website 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 4, title: 'Portfolio Website 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 5, title: 'Booking CRM System 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 6, title: 'Booking CRM System 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 7, title: 'Management System 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 8, title: 'Management System 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
            ],
            Informative: [
                { id: 1, title: 'Informative Website 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09eg5K2c5RUpWMidvTulfyBgMdLie_yIiGg&s' },
                { id: 2, title: 'Informative Website 2', image: 'informative2.jpg' },
            ],
            Portfolio: [
                { id: 3, title: 'Portfolio Website 1', image: 'portfolio1.jpg' },
                { id: 4, title: 'Portfolio Website 2', image: 'portfolio2.jpg' },
            ],
            'Booking CRM': [
                { id: 5, title: 'Booking CRM System 1', image: 'booking1.jpg' },
                { id: 6, title: 'Booking CRM System 2', image: 'booking2.jpg' },
            ],
            'Management System': [
                { id: 7, title: 'Management System 1', image: 'management1.jpg' },
                { id: 8, title: 'Management System 2', image: 'management2.jpg' },
            ],

            'Web Ecommerce': [
                { id: 7, title: 'Web Ecommerce 1', image: 'management1.jpg' },
                { id: 8, title: 'Web Ecommerce 2', image: 'management2.jpg' },
            ],
        },
        appDevelopment: {
            all: [
                { id: 9, title: 'E-Commerce App (iOS)', image: 'ecommerce.jpg' },
                { id: 10, title: 'Dating App (Android)', image: 'dating.jpg' },
                { id: 11, title: 'Calling App (Cross-Platform)', image: 'calling.jpg' },
                { id: 12, title: 'PhotoEdit App (Cross-Platform)', image: 'photoedit.jpg' },
                { id: 13, title: 'Utility App (Cross-Platform)', image: 'utility.jpg' },
            ],
            ECommerce: [
                { id: 9, title: 'E-Commerce App (iOS)', image: 'ecommerce.jpg' },
            ],
            Dating: [
                { id: 10, title: 'Dating App (Android)', image: 'dating.jpg' },
            ],
            Calling: [
                { id: 11, title: 'Calling App (Cross-Platform)', image: 'calling.jpg' },
            ],
            PhotoEdit: [
                { id: 12, title: 'PhotoEdit App (Cross-Platform)', image: 'photoedit.jpg' },
            ],
            Utility: [
                { id: 13, title: 'Utility App (Cross-Platform)', image: 'utility.jpg' },
            ],
        },
        twoDWork: {
            all: [
                { id: 14, title: '2D Animation 1', video: '2danimation1.mp4' },
                { id: 15, title: '2D Animation 2', video: '2danimation2.mp4' },
                { id: 16, title: '2D Character Animation', image: '2dcharacter.jpg' },
                { id: 17, title: '2D Environment Animation', image: '2denvironment.jpg' },
                { id: 18, title: '2D Clothes Animation', image: '2dclothes.jpg' },
            ],
            '2D Animation': [
                { id: 14, title: '2D Animation 1', video: '2danimation1.mp4' },
                { id: 15, title: '2D Animation 2', video: '2danimation2.mp4' },
            ],
            '2D Character': [
                { id: 16, title: '2D Character Animation', image: '2dcharacter.jpg' },
            ],
            '2D Environment': [
                { id: 17, title: '2D Environment Animation', image: '2denvironment.jpg' },
            ],
            '2D Clothes': [
                { id: 18, title: '2D Clothes Animation', image: '2dclothes.jpg' },
            ],
        },
        threeDWork: {
            all: [
                { id: 19, title: '3D Logo Modeling', image: '3dlogo.jpg' },
                { id: 20, title: '3D Character Rendering', image: '3dcharacter.jpg' },
                { id: 21, title: '3D Animation 1', video: 'https://www.youtube.com/shorts/n3KHlt8eclA?feature=share' },
                { id: 22, title: '3D Animation 2', video: 'https://www.youtube.com/shorts/n3KHlt8eclA?feature=share' },
                { id: 23, title: '3D Environment Rendering', image: '3denvironment.jpg' },
                { id: 24, title: '3D Jewellery Rendering', image: '3djewellery.jpg' },
                { id: 25, title: '3D Furniture Rendering', image: '3dfurniture.jpg' },
                { id: 26, title: '3D Product Rendering', image: '3dproduct.jpg' },
                { id: 27, title: '3D Clothes Rendering', image: '3dclothes.jpg' },
            ],
            '3D Logo': [
                { id: 19, title: '3D Logo Modeling', image: '3dlogo.jpg' },
            ],
            '3D Character': [
                { id: 20, title: '3D Character Rendering', image: '3dcharacter.jpg' },
            ],
            '3D Animation': [
                { id: 21, title: '3D Animation 1', video: '3danimation1.mp4' },
                { id: 22, title: '3D Animation 2', video: '3danimation2.mp4' },
            ],
            '3D Enviroment': [
                { id: 23, title: '3D Environment Rendering', image: '3denvironment.jpg' },
            ],
            '3D Jewellery': [
                { id: 24, title: '3D Jewellery Rendering', image: '3djewellery.jpg' },
            ],
            '3D Furniture': [
                { id: 25, title: '3D Furniture Rendering', image: '3dfurniture.jpg' },
            ],
            '3D Product': [
                { id: 26, title: '3D Product Rendering', image: '3dproduct.jpg' },
            ],
            '3D Clothes': [
                { id: 27, title: '3D Clothes Rendering', image: '3dclothes.jpg' },
            ],
        },
        graphicDesign: {
            all: [
                { id: 28, title: 'Logo Design 1', image: 'logodesign1.jpg' },
                { id: 29, title: 'Logo Design 2', image: 'logodesign2.jpg' },
                { id: 30, title: 'Brand Identity Design 1', image: 'brandidentity1.jpg' },
                { id: 31, title: 'Brand Identity Design 2', image: 'brandidentity2.jpg' },
                { id: 32, title: 'Social Media Post Design 1', image: 'socialmedia1.jpg' },
                { id: 33, title: 'Social Media Post Design 2', image: 'socialmedia2.jpg' },
                { id: 34, title: 'Stationary Design 1', image: 'stationary1.jpg' },
                { id: 35, title: 'Stationary Design 2', image: 'stationary2.jpg' },
                { id: 36, title: 'T-Shirt Design 1', image: 'tshirt1.jpg' },
                { id: 37, title: 'T-Shirt Design 2', image: 'tshirt2.jpg' },
                { id: 38, title: 'UI/UX Design 1', image: 'uiux1.jpg' },
                { id: 39, title: 'UI/UX Design 2', image: 'uiux2.jpg' },
            ],
            'Logo Design': [
                { id: 28, title: 'Logo Design 1', image: 'logodesign1.jpg' },
                { id: 29, title: 'Logo Design 2', image: 'logodesign2.jpg' },
            ],
            'Brand Identity': [
                { id: 30, title: 'Brand Identity Design 1', image: 'brandidentity1.jpg' },
                { id: 31, title: 'Brand Identity Design 2', image: 'brandidentity2.jpg' },
            ],
            'Social Media Post': [
                { id: 32, title: 'Social Media Post Design 1', image: 'socialmedia1.jpg' },
                { id: 33, title: 'Social Media Post Design 2', image: 'socialmedia2.jpg' },
            ],
            'Stationary Design': [
                { id: 34, title: 'Stationary Design 1', image: 'stationary1.jpg' },
                { id: 35, title: 'Stationary Design 2', image: 'stationary2.jpg' },
                { id: 35, title: 'Stationary Design 3', image: 'stationary2.jpg' },
            ],
            'T-Shirt Design': [
                { id: 36, title: 'T-Shirt Design 1', image: 'tshirt1.jpg' },
                { id: 37, title: 'T-Shirt Design 2', image: 'tshirt2.jpg' },
                { id: 37, title: 'T-Shirt Design 3', image: 'tshirt2.jpg' },
            ],
            'UI / UX Design': [
                { id: 38, title: 'UI/UX Design 1', image: 'uiux1.jpg' },
                { id: 39, title: 'UI/UX Design 2', image: 'uiux2.jpg' },
                { id: 39, title: 'UI/UX Design 3', image: 'uiux2.jpg' },
            ],
        },
        architecture: {
            all: [
                { id: 40, title: 'Residential Floor Plan', image: 'floorplan.jpg' },
                { id: 41, title: 'Commercial Interior Design', image: 'interior.jpg' },
                { id: 42, title: 'Commercial Exterior Design', image: 'exterior.jpg' },
            ],
            'Floor Plan': [
                { id: 40, title: 'Residential Floor Plan', image: 'floorplan.jpg' },
                { id: 40, title: 'Residential Floor Plan1', image: 'floorplan.jpg' },
                { id: 40, title: 'Residential Floor Plan2', image: 'floorplan.jpg' },
            ],
            'Interior Design': [
                { id: 41, title: 'Commercial Interior Design', image: 'interior.jpg' },
                { id: 41, title: 'Commercial Interior Design2', image: 'interior.jpg' },
                { id: 41, title: 'Commercial Interior Design3', image: 'interior.jpg' },
            ],
            'Exterior Design': [
                { id: 42, title: 'Commercial Exterior Design', image: 'exterior.jpg' },
                { id: 42, title: 'Commercial Exterior Design1', image: 'exterior.jpg' },
                { id: 42, title: 'Commercial Exterior Design2', image: 'exterior.jpg' },
            ],
        },
    };

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3);
    };

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id);
    };

    const handleSelect = (category, subCategory) => {
        setSelectTab(subCategory === 'all' ? category : subCategory);
        setProjects(subCategory === 'all' ? dummyData[category].all : dummyData[category][subCategory]);
        setDropdowns({
            webDevelopment: false,
            appDevelopment: false,
            twoDWork: false,
            threeDWork: false,
            graphicDesign: false,
            architecture: false,
        });
    };

    useEffect(() => {
        if (selectTab === 'all') {
            const allProjects = Object.keys(dummyData).flatMap(key => dummyData[key].all);
            setProjects(allProjects);
        }
    }, [selectTab]);

    const toggleDropdown = (key) => {
        setDropdowns(prev => ({
            ...Object.fromEntries(Object.keys(prev).map(k => [k, k === key ? !prev[key] : false]))
        }));
    };

    return (
        <section id='portfolio'>
            <div className="container">
                <div className="flex items-center justify-center gap-3 flex-col flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className='text-headingColor text-[2rem] font-[700]'>
                            My recent projects
                        </h3>
                    </div>
                    <div className="flex gap-3">
                        {Object.keys(dropdowns).map(dropdownKey => (
                            <div key={dropdownKey} className="relative">
                                <button
                                    onClick={() => toggleDropdown(dropdownKey)}
                                    className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'
                                >
                                    {dropdownKey.charAt(0).toUpperCase() + dropdownKey.slice(1).replace(/([A-Z])/g, ' $1')}
                                </button>
                                {dropdowns[dropdownKey] && (
                                    <div className="absolute py-2 w-48 bg-white rounded-md shadow-xl z-10">
                                        <button
                                            onClick={() => handleSelect(dropdownKey, 'all')}
                                            className='block px-4 py-2 text-smallTextColor hover:bg-gray-200 w-full text-left'
                                        >
                                            All
                                        </button>
                                        {Object.keys(dummyData[dropdownKey]).filter(key => key !== 'all').map(subCategory => (
                                            <button
                                                key={subCategory}
                                                onClick={() => handleSelect(dropdownKey, subCategory)}
                                                className='block px-4 py-2 text-smallTextColor hover:bg-gray-200 w-full text-left'
                                            >
                                                {subCategory}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.slice(0, nextItems).map(project => (
                        <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
                            ) : (
                                <video controls className="w-full h-48 mb-4">
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        
                            <button
                                className='text-primary border border-solid border-primary py-2 px-4 rounded-[8px]'
                            >
                                View More
                            </button>
                           
                        </div>
                    ))}
                </div>
                {nextItems < projects.length && (
                    <div className="text-center mt-6">
                        <button
                            onClick={loadMoreHandler}
                            className='text-primary border border-solid border-primary py-2 px-4 rounded-[8px]'
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
            {showModal && <Modal id={activeID} onClose={() => setShowModal(false)} />}
        </section>
    );
};

export default Portfolio;
