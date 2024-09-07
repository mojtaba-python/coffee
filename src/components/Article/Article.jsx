import './article.css';
import img from './a-1.jpg';
import { dataArticle } from './DataArticle';
import { infoArticleNew } from './dataNewArticle';

const Article = () => {
    const fetchData = dataArticle();
    const fetchNew = infoArticleNew();
    return (
        <>
            <div className='mx-3 my-3'>
                <div className="title_article">
                    <span>صفحه اصلی</span>
                    <i class="bi bi-arrow-left-short arrow_about"></i>
                    <span>
                        مقالات</span>
                    <i class="bi bi-arrow-left-short arrow_about"></i>
                    <span>
                        جزییات مقاله
                    </span>

                </div>

                <div className='box_container_article'>
                    <div className='box_article'>
                        <div className='title_shear_article'>
                            <h5>طرز تهیه آیس کاپوچینو و کاپوچینوی سرد</h5>

                            <span style={{ color: '#2bc32b', cursor: 'pointer' }}>
                                <i style={{ color: '#2bc32b' }} class="bi bi-share"></i>
                                اشتراک گذاری
                            </span>
                        </div>
                        <div className='box_sliders_article'>
                            <span>
                                <i style={{ color: '#cad8e6' }} class="bi bi-sliders icons_about"></i>
                                دسته‌بندی : دانه اسپرسو
                            </span>
                            <span>
                                <i class="bi bi-person-fill icons_about"></i>
                                توسط : مجتبی بخشی پور
                            </span>
                            <span>
                                <i class="bi bi-calendar-week icons_about"></i>
                                تاریخ انتشار : 1403/05/20
                            </span>
                        </div>
                        <div>
                            <img src={img} alt="" className='img_article' />
                        </div>
                        <div className='des1_article'>
                            <p>
                                {fetchData.des1}
                            </p>
                        </div>
                        <h5>کاپوچینوی سرد چیست؟</h5>
                        <div className='des1_article'>
                            <p>
                                {fetchData.des2}
                            </p>
                        </div>

                        <div className='my-5'>
                            <p>مواد لازم :</p>

                            <ul className='ul_material'>

                                <li ><i class="bi bi-1-circle"></i>
                                    <span>یک یا دو شات قهوه اسپرسو</span>
                                </li>
                                <li className=''>
                                    <i class="bi bi-2-circle"></i>
                                    <span> یخ</span>
                                </li>
                                <li className=''>
                                    <i class="bi bi-3-circle"></i>
                                    <span>شیر</span>
                                </li>
                                <li>
                                    <i class="bi bi-4-circle"></i>
                                    <span>سیروپ به دلخواه</span>
                                </li>
                            </ul>

                        </div>

                        <h5>روش اول: طرز تهیه آیس کاپوچینوی با قهوه اسپرسو</h5>
                        <div className='des1_article'>
                            <p>
                                {fetchData.des3}
                            </p>
                        </div>
                    </div>

                    <div className='box_new_product'>
                        <p>جدیدترین مقالات :</p>
                        
                        {
                            fetchNew.map((product, index) => (
                                <div key={index} className='box_new_article'>
                                    <img className='img_new_article' src={product.image} alt="" />
                                    <div style={{ fontWeight: '200' }}>
                                        <p>{product.title}</p>
                                        <p style={{ color: '#b4b7bb', fontSize: 'small' }}>
                                            <i style={{ color: '#b4b7bb' }} class="bi bi-calendar-week ">{"   "}</i>
                                            {product.date}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>


        </>
    )
}
export default Article