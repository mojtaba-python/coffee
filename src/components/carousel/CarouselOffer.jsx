import Carousel from 'react-multi-carousel';
import { getInfo } from './data/Data';
import { Link } from 'react-router-dom';

const CarouselOffer = () => {
    const infoCoffee = getInfo();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1200, min: 800 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    infoCoffee.map((coffee, index) => (
                        <div className='box_slider_offer' key={index}>
                            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
                                <img className='img_slider' src={coffee.image} alt="img" />
                            </Link>
                            <div className='div_text_slider' >
                                <p style={{ paddingTop: '10px', width: "100%" }}>
                                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
                                        {coffee.des}
                                    </Link>
                                </p>
                                <div className='div_slider_price'>
                                    <p style={{ color: '#03bc06' }}>قیمت : {coffee.price}</p>

                                </div>
                            </div>

                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
export default CarouselOffer;