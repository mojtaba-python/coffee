import { FaRegUser } from "react-icons/fa";
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='container_nav'>
                <div style={{ paddingRight: '20px' }}>
                    <Link to="/">
                        <i class="bi bi-cup-hot-fill"></i>
                        <img className='logo' src={logo} alt="" />
                    </Link>

                </div>

                <nav >
                    <ul className="navbar_items">
                        <li className='item'>
                            <Link className="nav_item link_home" to="/" >صفحه اصلی</Link>
                        </li>
                        <li className="nav_items">
                            <a className="nav_item" href="" > فروشگاه</a>
                            <div id='dropdown_content'>
                                <a href="">اسپرسو</a>
                                <a href="">قهوه ترک</a>
                                <a href="">قهوه فرانسه</a>
                                <a href="">قهوه</a>
                            </div>
                        </li>
                        <li className='item'>
                            <Link to="/article" className="nav_item"> مقالات</Link>
                        </li>
                        <li className='nav_items'>
                            <a href="" className="nav_item"> درباره ما</a>
                            <div id='dropdown_content2'>
                                <a href="">متن تستی</a>
                                <a href=""> متن تستی</a>
                                <a href="">متن تستی </a>
                                <a href="">متن تستی</a>

                            </div>
                        </li>
                    </ul>

                </nav>

                <div className="nav_mobile">
                    <input type="checkbox" id="toggle_nav" hidden />
                    <label className='label_nav' htmlFor="toggle_nav" >
                        <span className='line line_top'></span>
                        <span className='line line_mid'></span>
                        <span className='line line_bottom'></span>
                    </label>

                    <ul className='ul_nav_mobile'>

                        <div  >
                            <Link to="/">
                                <i class="bi bi-cup-hot-fill"></i>
                                <img className='logo' src={logo} alt="" />
                            </Link>

                        </div>
                        <div className="px-2 my-2">
                            <hr style={{ color: '#fff' }} />
                            <input type="text" placeholder="جستجو" className="input_search" />
                        </div>

                        <li className="li_nav mt-3">
                            <a className='link_nal_mobile color_h_nav' href="">
                                <i class="bi bi-house-door"></i>
                                صفحه اصلی
                            </a>
                        </li>
                        <li className="li_nav">
                            <a className='link_nal_mobile color_h_nav' href="">
                                <i class="bi bi-bag"></i>
                                فروشگاه</a>
                        </li>
                        <li className="li_nav">
                            <Link to="/article" className='link_nal_mobile color_h_nav' href="">
                                <i class="bi bi-file-text"></i>
                                مقالات
                            </Link>
                        </li>
                        <li className="li_nav">
                            <a className='link_nal_mobile color_h_nav' href="">
                                <i class="bi bi-telephone"></i>
                                تماس با ما</a>
                        </li>

                        <div className="px-2 my-2">
                            <hr style={{ color: '#fff' }} />

                        </div>
                        <div className="box_access_nav">
                            <div className="bi_h_l">
                                <i class="bi bi-brightness-high" style={{ color: '#0cb60e' }} ></i>
                                <span className="color_h_nav">
                                    تم روشن
                                </span>
                            </div>
                            <div className="bi_h_l">
                                <i class="bi bi-cart2 " style={{ color: '#0cb60e' }}></i>
                                <span className="color_h_nav"> سبد خرید</span>
                            </div>
                        </div>
                    </ul>

                </div>

                <div className='login_box'>
                    <span id="link_bgc" >
                        <i class="bi bi-brightness-high bi-brightness"></i>
                    </span>
                    <span><i class="bi bi-cart2 bi-cart"></i></span>
                    <span><i class="bi bi-search bi-sear"></i></span>
                    <a href='' className='btn_login'> <FaRegUser />{" "}
                        حساب کاربری
                    </a>
                </div>
            </div>
        </>
    )
}
export default Nav;