import './navbar.css';
import Info from '../infocaffee/InfoCoffee.jsx';
import LiveGroups from '../liveGroups/LiveGroups.jsx';
import Offer from '../offer/Amazingoffer.jsx';
import CarouselPage from '../carousel/Carousel.jsx';

const HomePage = ({ theme }) => {

    return (
        <>
            <CarouselPage />
            <LiveGroups />
            <Offer />
            <Info />
        </>
    )
}
export default HomePage;

