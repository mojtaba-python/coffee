import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../../slide-1.png';

const CarouselPage = () => {
    return (
        <>
            <div className='my-3 col-lg-12 col-md-12 col-12'>
                <Carousel>
                    <Carousel.Item>
                        <img src={pic} text="First slide" style={{height:'100%', width:'100%'}} />
                        <Carousel.Caption>
                            <div  className='box_text_slider'>
                                <h2>دانه <span style={{ color: '#9a6b00' }}>قهوه</span> اسپرسو جیورنو</h2>
                                <p style={{ color: '#03bc06' }}>یک طعم باور نکردنی </p>
                                <hr />
                                <p>
                                    قطعا شما نام جیورنو را شنیده اید و ...
                                </p>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={pic} text="First slide" style={{height:'100%', width:'100%'}} />
                        <Carousel.Caption>
                            <div className='box_text_slider'>
                                <h2>دانه <span style={{ color: '#9a6b00' }}>قهوه</span> اسپرسو یونیکا</h2>
                                <p style={{ color: '#03bc06' }}>یک طعم باور نکردنی </p>
                                <hr />
                                <p>
                                    قطعا شما نام اسپرسو را شنیده اید و ...
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={pic} text="First slide" style={{height:'100%', width:'100%'}} />
                        <Carousel.Caption>
                            <div  className='box_text_slider'>
                                <h2>دانه <span style={{ color: '#9a6b00' }}>قهوه</span> اسپرسو ویتالی</h2>
                                <p style={{ color: '#03bc06' }}>یک طعم باور نکردنی </p>
                                <hr />
                                <p>
                                    قطعا شما نام ویتالی را شنیده اید و ...
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}
export default CarouselPage;