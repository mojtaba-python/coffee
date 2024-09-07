import './style.css';
import { dataAbout } from './DataAbout';


const AboutPage = ({ inc, dec, count }) => {
    const data = dataAbout()
    const add = count * data.price;
    return (
        <>
            <div className='mx-3 my-3'>
                <div className='title'>
                    <span>صفحه اصلی</span>
                    <i class="bi bi-arrow-left-short arrow_about"></i>
                    <span>جزییات محصول</span>
                </div>
                <div className='box_container_about'>
                    <div className='props_about'>
                        <div className='box_about'>
                            <div className='image'>
                                <img className='img_about' src={data.image} alt="image" />
                            </div>
                            <div>
                                <h4>{data.title}</h4>
                                <hr />
                                <div className='box_group_info'>
                                    <span>
                                        <i style={{ color: '#cad8e6' }} class="bi bi-sliders px-1"></i>
                                    </span>
                                    <span>دسته‌بندی : دانه اسپرسو</span>
                                </div>
                                <div>
                                    <h6>ویژگی های محصول :</h6>
                                </div>
                                <div className='box_attr_about '>
                                    <div className='box_att_about'>
                                        <span className='txt_att_about'>گونه : 50% عربیکا و 50% ربوستا</span>
                                    </div>
                                    <div className='box_att_about'>
                                        <span className='txt_att_about'>میزان کافئین : متوسط</span>
                                    </div>
                                </div>
                                <div className='box_attr_about '>
                                    <div className='box_att_about'>
                                        <span className='txt_att_about'> خاستگاه : آمریکای مرکزی و آسیای</span>
                                    </div>
                                    <div className='box_att_about'>
                                        <span className='txt_att_about'> مواد تشکیل‌دهنده : دانه اسپرسو</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='boxs_send_about'>
                            <div className='box_send_about'>
                                <span ><i class="bi bi-repeat icons_about"></i>  ضمانت بازگشت کالا  </span>
                            </div>
                            <div className='box_send_about'>
                                <span ><i class="bi bi-shield-check icons_about"></i>  تضمین اصالت کالا </span>
                            </div>
                            <div className='box_send_about'>
                                <span><i class="bi bi-calendar-week icons_about"></i>  پشتیبانی کل هفته</span>
                            </div>
                            <div className='box_send_about'>

                                <span><i class="bi bi-truck icons_about"></i> ارسال به سراسر ایران</span>
                            </div>
                        </div>
                        <div>
                            <h4 className='mb-3'>معرفی محصول</h4>
                            <p className='txt_dec'>{data.des}</p>
                        </div>
                    </div>
                    <div className='cart_about'>
                        <div className='box_price'>
                            <span>قیمت : </span>
                            <span className='price'>175,000 تومان</span>
                        </div>
                        <div className='box_counter'>
                            <button id="inc" onClick={inc} disabled={count === 10}>+</button>
                            <span>{count}</span>
                            <button id="dec" onClick={dec} disabled={count === 1}>-</button>
                        </div>
                        <div className='count_cart'>
                            <span>مجموعه خرید : </span>
                            <span>{add} تومان</span>
                        </div>
                        <div className='my-3'>
                            <button className='btn_cart'>  افزودن به سبد خرید <i class="bi bi-bag"></i> </button>
                        </div>
                        <div className='my-4'>
                            <span className='box_cart_info'>ارسال رایگان برای خریدهای بالای 400 هزار تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPage;