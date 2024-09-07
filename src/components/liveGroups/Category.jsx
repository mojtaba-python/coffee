import { Link } from 'react-router-dom';
import './category.css';

const Category = ({ image, caption }) => {

    return (
        <>
            <div className="cart_category">
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <img className="" src={image} alt="ddd" />
                    <span className='link_love_groups'>{caption}</span >
                </Link>
            </div>

        </>
    )
}
export default Category;