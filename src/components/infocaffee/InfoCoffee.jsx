import { Link } from 'react-router-dom';
import './infocoffee.css';

const Info = () => {
    return (
        <>
            <h3 style={{ textAlign: 'center' }}>مطالب خواندی</h3>
            <div className="box_info_coffee ">
                <Link to="/Article" style={{ textDecoration: 'none' }}>
                    <div className="col-7 col-md-5 box_info1">

                        <div className='theme_box_info'>
                            <h4 className='hover'>انواع قهوه</h4>
                            <p className='hover line_hover'>ترکیبی و تک</p>
                        </div>
                    </div>
                </Link>
                <Link to="/Article" style={{ textDecoration: 'none' }}>
                    <div className="col-7 col-md-5 box_info2">
                        <div className='theme_box_info'>
                            <h4 className='hover'> پودرهای فوری</h4>
                            <p className='hover line_hover'> نسکافه ، هات چاکلت ، ماسالا</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>

    )
}
export default Info;