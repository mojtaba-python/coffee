import './footer.css';
import { MdKeyboardDoubleArrowLeft, MdOutlineArrowLeft } from "react-icons/md";


const Footer = () => {
    return (
        <div className="footer">
            <div className="col-9 col-md-3 col-lg-4 ">
                <h3 className='coffee_text' style={{ color: '#03bc06' }}>کافئین</h3>
                <p className='coffee_text2' style={{ color: '#03bc06' }}>حس نو با قهوه...</p>
                <p id="text_p">
                    در فروشگاه آنلاین ما، بهترین دانه‌های قهوه از سراسر جهان را با کیفیت بالا و طعمی بی‌نظیر برای شما فراهم آورده‌ایم. با انتخاب محصولات ما، لذت یک فنجان قهوه عالی را در خانه تجربه کنید.
                </p>
            </div>

            <div className="col-9 col-md-3 col-lg-3  box_footer" >
                <div >
                    <h6 className='box_link_footer'>
                        <MdOutlineArrowLeft style={{fontSize:'x-large'}} />{" "}
                        <span className='link_footer'>دسترسی سریع</span>
                    </h6>
                </div>

                <div className='links_footer justify-content-between mt-3'>
                    <div>
                        <div className='link_footer d-flex'>
                            <p><MdKeyboardDoubleArrowLeft /> </p>

                            <a href='' className='color_hover'>فروشگاه</a>
                        </div>
                        <div className='link_footer d-flex'>
                            <p> <MdKeyboardDoubleArrowLeft /></p>

                            <a href='' className='color_hover'>تماس با ما</a>
                        </div>
                        <div className='link_footer d-flex'>
                            <p><MdKeyboardDoubleArrowLeft /></p>
                            <a href='' className='color_hover'>سوالات متداول</a>
                        </div>

                    </div>

                    <div>
                        <div className='link_footer d-flex'>
                            <p><MdKeyboardDoubleArrowLeft /></p>
                            <a href='' className='color_hover'>  ثبت نام | ورود</a>
                        </div>

                        <div className='link_footer d-flex'>
                            <p><MdKeyboardDoubleArrowLeft /></p>
                            <a href='' className='color_hover'>  وبلاگ</a>
                        </div>
                        <div className='link_footer d-flex'>
                            <p><MdKeyboardDoubleArrowLeft /></p>
                            <a href='' className='color_hover'>  شرایط و قوانین</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-8 col-md-3 col-lg-4  box_footer">
                <div  >
                    <h6 className='box_link_footer'>
                        <MdOutlineArrowLeft style={{fontSize:'x-large'}} />{" "}
                        <span className='link_footer'>تماس با ما </span>
                    </h6>
                </div>
                <div className='my-3'>
                    <p id="me">طراح سایت مجتبی بخشی پور</p>

                    <div className=' box_rel' >
                        <div className='box_phone'>
                            <i id="phone" class="bi bi-telephone  ">{"   "}</i>
                            <span id="ph" className='tel'>09375674197</span>
                           
                        </div>
                        <div className='box_email'>
                            <span ><i class="bi bi-envelope ">{"   "}</i></span>
                            <span className='tel'>mojtaba.klaie@gmail.com</span>
                        </div>
                    </div>

                    <div className='d-flex my-3'>
                        <span className='social_media'>شبکه های اجتماعی</span>
                        <p className='p_social'>
                            <a href='https://github.com/mojtaba-python' target="_blank" rel="noopener noreferrer">

                                <span ><i className="bi bi-github social_media1 social"></i></span>
                            </a>
                        </p>
                        <p>
                            <a href="https://t.me/Poshtekala_admin" target="_blank" rel="noopener noreferrer" >
                                <i  className="bi bi-telegram social_media2 social"></i>
                            </a>
                        </p>
                        <p className='p_social'>
                            <a href="https://Instagram.com/mojtaba.bakhshipour" target="_blank" rel="noopener noreferrer">
                                <i  className="bi bi-instagram social_media3 social"></i>
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Footer;