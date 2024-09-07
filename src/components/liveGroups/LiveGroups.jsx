import Category from "./Category";
import img1 from './img/category1.png';
import img2 from './img/category2.png';
import img3 from './img/category3.png';
import img4 from './img/category4.png';

const LiveGroups = () => {


    return (
        <>
            <div className="d-flex justify-content-center my-4  ">
                <h2><a style={{ color: '#fff', textDecoration: 'none' }} href="">محبوب ترین دسته ها</a></h2>

            </div>
            <div className="box_love_groups">
                <div className="">
                    <Category image={img1} caption="قهوه دمی و اسپرسو" />

                </div>
                <div className="">
                    <Category image={img2} caption="لوازم جانبی و تجهیزات" />
                </div>
                <div className="">
                    <Category image={img3} caption="اسپرسو ساز" />
                </div>
                <div >
                    <Category image={img4} caption="قهوه ترک" />
                </div>

            </div>
        </>

    )
}
export default LiveGroups;