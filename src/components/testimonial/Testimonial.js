import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import TestimonialImg1 from '../../assets/images/img.jpeg';
import TestimonialImg2 from '../../assets/images/img.jpeg';
import TestimonialImg3 from '../../assets/images/img.jpeg';
import TestimonialImg4 from '../../assets/images/img.jpeg';
import TestimonialImg5 from '../../assets/images/img.jpeg';

const TestimonialData = [
    {
        id: uuidv4(),
        img: TestimonialImg1,
        name: 'Michael Adebayo',
        position: 'Property Manager, Lagos Homes',
        description: 'LIAMSPHERE transformed our vacant properties into market-ready homes. Their preservation team worked miracles after just one week of service!',
        rating: 5,
        service: 'Property Preservation'
    },
    {
        id: uuidv4(),
        img: TestimonialImg2,
        name: 'Chioma Okonkwo',
        position: 'Homeowner, Lekki',
        description: 'The interior decoration team exceeded our expectations. They understood our vision and delivered a stunning living space ahead of schedule.',
        rating: 5,
        service: 'Interior Decoration'
    },
    {
        id: uuidv4(),
        img: TestimonialImg3,
        name: 'Bankole Williams',
        position: 'Manager',
        description: 'Their 24/7 emergency response saved us thousands in potential damage. The most reliable preservation service in Nigeria!',
        rating: 5,
        service: 'Emergency Preservation'
    },
    {
        id: uuidv4(),
        img: TestimonialImg4,
        name: 'Amina Mohammed',
        position: 'Airbnb Host, Abuja',
        description: 'Regular maintenance keeps our 12 properties in perfect condition. Tenants consistently compliment the professional upkeep.',
        rating: 4,
        service: 'Property Maintenance'
    },
    {
        id: uuidv4(),
        img: TestimonialImg5,
        name: 'David Okafor',
        position: 'Real Estate Developer',
        description: 'From landscaping to final finishes, LIAMSPHERE handles all our project preservation needs with military precision.',
        rating: 5,
        service: 'Full Preservation'
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? 'filled' : 'empty'} />
            ))}
        </div>
    );
};

const TestimonialItem = ({ img, name, position, description, rating, service }) => {
    return (
        <div className="single-testimonial">
            <img src={img} alt={`${name}, ${position}`} />
            <h3>{name}</h3>
            <span>{position}</span>
            <div className="service-badge">{service}</div>
            <p>{description}</p>
            <StarRating rating={rating} />
        </div>
    );
};

const Testimonial = () => {
    const TestimonialSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <section className="testimonial-area bg-4 pt-90 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-70">
                            <span>Client Testimonials</span>
                            <h2>Trusted by Property Professionals <br /> Across Nigeria</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider {...TestimonialSlider} className="testimonial-slider">
                        {TestimonialData.map((data) => (
                            <TestimonialItem
                                key={data.id}
                                img={data.img}
                                name={data.name}
                                position={data.position}
                                description={data.description}
                                rating={data.rating}
                                service={data.service}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;